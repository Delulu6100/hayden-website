"use client";

import { GAME_META, LOCATIONS, MEMORY_COLLECTIBLES } from "./data/gameContent";
import type { Chapter, StoryNode, Choice } from "./data/gameContent";
import { useGame } from "./context/GameContext";
import LocationChapters from "./components/LocationChapters";
import { StatsHeader } from "./components/StatsHeader";
import WorldMap from "./components/WorldMap";
import { useState } from "react";

function StartScreen() {
  const { startGame } = useGame();

  return (
    <div className="gfgame-shell gfgame-scanlines gfgame-grid gfgame-vignette flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <div className="gfgame-pixel-border bg-[#070d07]/80 px-8 py-10">
        <p className="text-[9px] uppercase tracking-[0.35em] text-[#4de8ff]">
          {GAME_META.subtitle}
        </p>

        <h1 className="gfgame-neon-text mt-6 font-[family-name:var(--font-gfgame-pixel)] text-sm leading-relaxed sm:text-base">
          {GAME_META.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xs text-[10px] leading-6 text-[#5a8060]">
          A casual, story-driven journey through places and memories.
          Tap nodes. Read chapters. Collect moments.
        </p>

        <button
          type="button"
          onClick={startGame}
          className="gfgame-arcade-btn mt-10 w-full px-6 py-4 font-[family-name:var(--font-gfgame-pixel)] text-[9px] uppercase tracking-wider"
        >
          ▶ START
        </button>

        <p className="mt-6 text-[8px] uppercase tracking-[0.2em] text-[#3a5040]">
          v{GAME_META.version}
        </p>
      </div>
    </div>
  );
}

function ChapterView() {
  const { progress, completeChapter, openMap, collectMemory } = useGame();

  const location = progress.activeLocationId
    ? LOCATIONS.find((l) => l.id === progress.activeLocationId)
    : null;
  const chapter =
    location && progress.activeChapterId
      ? location.chapters.find((c) => c.id === progress.activeChapterId)
      : null;

  // useState before any conditional returns (Rules of Hooks)
  const [internalNodeId, setInternalNodeId] = useState<string>(chapter?.startNodeId ?? "");

  if (!location || !chapter) return <WorldMap />;

  const memory = chapter.memoryId
    ? MEMORY_COLLECTIBLES.find((m) => m.id === chapter.memoryId)
    : null;

  const currentNode: StoryNode | undefined = chapter.nodes[internalNodeId || chapter.startNodeId];
  const isCompleted = progress.completedChapterIds.includes(chapter.id);

  if (!currentNode) return <WorldMap />;

  const hasChoices = currentNode.choices && currentNode.choices.length > 0;
  const hasNext = !!currentNode.nextNodeId;
  const isEnd = !hasChoices && !hasNext;

  const handleNext = () => {
    if (hasNext) setInternalNodeId(currentNode.nextNodeId!);
  };

  const handleChoice = (choice: Choice) => {
    if (choice.unlockMemoryId) collectMemory(choice.unlockMemoryId);
    setInternalNodeId(choice.nextNodeId);
  };

  const handleComplete = () => {
    if (memory && !progress.collectedMemoryIds.includes(memory.id)) {
      collectMemory(memory.id);
    }
    completeChapter(chapter.id, memory?.id);
  };

  if (isCompleted) {
    return (
      <div className="gfgame-shell gfgame-scanlines gfgame-grid gfgame-vignette flex min-h-[100dvh] flex-col">
        <StatsHeader title={chapter.title} subtitle={location.name} onBack={openMap} />
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-8xl">{memory?.emoji || chapter.emoji}</span>
            <h2 className="gfgame-neon-text mt-6 font-[family-name:var(--font-gfgame-pixel)] text-xl uppercase sm:text-2xl">
              {chapter.title}
            </h2>
            {chapter.subtitle && (
              <p className="mt-2 text-[10px] text-[#5a8060]">{chapter.subtitle}</p>
            )}
            <p className="mt-8 text-sm text-[#5dff8a]">Chapter Complete</p>
            <button
              type="button"
              onClick={openMap}
              className="gfgame-arcade-btn mt-10 px-6 py-4 font-[family-name:var(--font-gfgame-pixel)] text-[9px] uppercase tracking-wider"
            >
              ← BACK TO MAP
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gfgame-shell gfgame-scanlines gfgame-grid gfgame-vignette flex min-h-[100dvh] flex-col">
      <StatsHeader title={chapter.title} subtitle={location.name} onBack={openMap} />
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="text-8xl">{memory?.emoji || chapter.emoji}</span>
            <h2 className="gfgame-neon-text mt-4 font-[family-name:var(--font-gfgame-pixel)] text-xl uppercase sm:text-2xl">
              {chapter.title}
            </h2>
            {chapter.subtitle && (
              <p className="mt-2 text-[10px] text-[#5a8060]">{chapter.subtitle}</p>
            )}
          </div>

          <div className="gfgame-pixel-border bg-[#070d07]/80 mb-8 min-h-[200px] p-6">
            {currentNode.speaker && (
              <p className="mb-3 font-[family-name:var(--font-gfgame-pixel)] text-[10px] uppercase text-[#4de8ff]">
                {currentNode.speaker}
              </p>
            )}
            <p className="whitespace-pre-line text-[11px] leading-relaxed text-[#b8f0c8]">
              {currentNode.text}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            {hasChoices &&
              currentNode.choices!.map((choice: Choice) => (
                <button
                  key={choice.id}
                  type="button"
                  onClick={() => handleChoice(choice)}
                  className="gfgame-arcade-btn px-4 py-3 font-[family-name:var(--font-gfgame-pixel)] text-[9px] uppercase tracking-wider"
                >
                  {choice.label}
                </button>
              ))}

            {hasNext && !hasChoices && (
              <button
                key="continue"
                type="button"
                onClick={handleNext}
                className="gfgame-arcade-btn px-6 py-3 font-[family-name:var(--font-gfgame-pixel)] text-[9px] uppercase tracking-wider"
              >
                ▶ CONTINUE
              </button>
            )}

            {isEnd && (
              <button
                type="button"
                onClick={handleComplete}
                className="gfgame-arcade-btn px-6 py-3 font-[family-name:var(--font-gfgame-pixel)] text-[9px] uppercase tracking-wider"
              >
                ✓ COMPLETE CHAPTER
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function GameRouter() {
  const { progress } = useGame();

  if (progress.view === "map") {
    return <WorldMap />;
  }

  if (progress.view === "chapters" && progress.activeLocationId) {
    return <LocationChapters locationId={progress.activeLocationId} />;
  }

  if (progress.view === "play" && progress.activeLocationId && progress.activeChapterId) {
    return <ChapterView />;
  }

  return <WorldMap />;
}

export default function GfgamePage() {
  const { progress } = useGame();

  if (!progress.started) {
    return <StartScreen />;
  }

  return <GameRouter />;
}
