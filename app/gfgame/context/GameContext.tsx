"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getDefaultUnlockedLocationIds,
  getLocationById,
  LOCATIONS,
  TOTAL_MEMORIES,
  type GameView,
} from "../data/gameContent";

const SAVE_KEY = "gfgame-progress-v1";

export type GameProgress = {
  started: boolean;
  view: GameView;
  activeLocationId: string | null;
  activeChapterId: string | null;
  unlockedLocationIds: string[];
  completedChapterIds: string[];
  collectedMemoryIds: string[];
};

const DEFAULT_PROGRESS: GameProgress = {
  started: false,
  view: "map",
  activeLocationId: null,
  activeChapterId: null,
  unlockedLocationIds: getDefaultUnlockedLocationIds(),
  completedChapterIds: [],
  collectedMemoryIds: [],
};

type GameContextValue = {
  progress: GameProgress;
  totalMemories: number;
  memoryCount: number;
  startGame: () => void;
  openMap: () => void;
  selectLocation: (locationId: string) => void;
  openChapter: (locationId: string, chapterId: string) => void;
  completeChapter: (chapterId: string, memoryId?: string) => void;
  collectMemory: (memoryId: string) => void;
  isLocationUnlocked: (locationId: string) => boolean;
  isLocationComplete: (locationId: string) => boolean;
  getLocationProgress: (locationId: string) => { done: number; total: number };
};

const GameContext = createContext<GameContextValue | null>(null);

function loadProgress(): GameProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;

  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return DEFAULT_PROGRESS;

    const parsed = JSON.parse(raw) as Partial<GameProgress>;
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      unlockedLocationIds:
        parsed.unlockedLocationIds ?? getDefaultUnlockedLocationIds(),
      completedChapterIds: parsed.completedChapterIds ?? [],
      collectedMemoryIds: parsed.collectedMemoryIds ?? [],
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function persistProgress(progress: GameProgress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(progress));
  } catch {
    // Storage unavailable
  }
}

function computeUnlockedLocations(
  completedChapterIds: string[]
): string[] {
  const unlocked = new Set(getDefaultUnlockedLocationIds());

  for (const location of LOCATIONS) {
    if (!location.unlockAfterLocationId) continue;

    const prerequisite = getLocationById(location.unlockAfterLocationId);
    if (!prerequisite) continue;

    const hasCompletedPrereq = prerequisite.chapters.some((ch) =>
      completedChapterIds.includes(ch.id)
    );

    if (hasCompletedPrereq) {
      unlocked.add(location.id);
    }
  }

  return [...unlocked];
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<GameProgress>(DEFAULT_PROGRESS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    persistProgress(progress);
  }, [hydrated, progress]);

  const startGame = useCallback(() => {
    setProgress({
      started: true,
      view: "map",
      activeLocationId: null,
      activeChapterId: null,
      unlockedLocationIds: getDefaultUnlockedLocationIds(),
      completedChapterIds: [],
      collectedMemoryIds: [],
    });
  }, []);

  const openMap = useCallback(() => {
    setProgress({
      ...progress,
      view: "map",
      activeLocationId: null,
      activeChapterId: null,
    });
  }, [progress]);

  const selectLocation = useCallback((locationId: string) => {
    setProgress((prev) => ({
      ...prev,
      view: "chapters",
      activeLocationId: locationId,
      activeChapterId: null,
    }));
  }, []);

  const openChapter = useCallback((locationId: string, chapterId: string) => {
    setProgress({
      ...progress,
      view: "play",
      activeLocationId: locationId,
      activeChapterId: chapterId,
    });
  }, [progress]);

  const collectMemory = useCallback((memoryId: string) => {
    setProgress((prev) => {
      if (prev.collectedMemoryIds.includes(memoryId)) return prev;
      return {
        ...prev,
        collectedMemoryIds: [...prev.collectedMemoryIds, memoryId],
      };
    });
  }, []);

  const completeChapter = useCallback(
    (chapterId: string, memoryId?: string) => {
      setProgress((prev) => {
        const completedChapterIds = prev.completedChapterIds.includes(chapterId)
          ? prev.completedChapterIds
          : [...prev.completedChapterIds, chapterId];

        const collectedMemoryIds =
          memoryId && !prev.collectedMemoryIds.includes(memoryId)
            ? [...prev.collectedMemoryIds, memoryId]
            : prev.collectedMemoryIds;

        return {
          ...prev,
          completedChapterIds,
          collectedMemoryIds,
          unlockedLocationIds: computeUnlockedLocations(completedChapterIds),
          view: "map",  // Transition back to map after chapter completion
          activeChapterId: chapterId,
        };
      });
    },
    []
  );

  const isLocationUnlocked = useCallback(
    (locationId: string) => progress.unlockedLocationIds.includes(locationId),
    [progress.unlockedLocationIds]
  );

  const isLocationComplete = useCallback(
    (locationId: string) => {
      const location = getLocationById(locationId);
      if (!location) return false;
      return location.chapters.every((ch) =>
        progress.completedChapterIds.includes(ch.id)
      );
    },
    [progress.completedChapterIds]
  );

  const getLocationProgress = useCallback(
    (locationId: string) => {
      const location = getLocationById(locationId);
      if (!location) return { done: 0, total: 0 };

      const done = location.chapters.filter((ch) =>
        progress.completedChapterIds.includes(ch.id)
      ).length;

      return { done, total: location.chapters.length };
    },
    [progress.completedChapterIds]
  );

  const value = useMemo<GameContextValue>(
    () => ({
      progress,
      totalMemories: TOTAL_MEMORIES,
      memoryCount: progress.collectedMemoryIds.length,
      startGame,
      openMap,
      selectLocation,
      openChapter,
      completeChapter,
      collectMemory,
      isLocationUnlocked,
      isLocationComplete,
      getLocationProgress,
    }),
    [
      progress,
      startGame,
      openMap,
      selectLocation,
      openChapter,
      completeChapter,
      collectMemory,
      isLocationUnlocked,
      isLocationComplete,
      getLocationProgress,
    ]
  );

  if (!hydrated) {
    return (
      <div className="gfgame-shell flex min-h-[100dvh] items-center justify-center">
        <p className="gfgame-blink font-[family-name:var(--font-gfgame)] text-[10px] uppercase tracking-[0.4em] text-[#5dff8a]">
          INITIALIZING...
        </p>
      </div>
    );
  }

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within GameProvider");
  }
  return context;
}
