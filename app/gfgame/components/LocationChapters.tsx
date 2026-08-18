"use client";

import { getLocationById, GAME_META } from "../data/gameContent";
import { useGame } from "../context/GameContext";
import { StatsHeader } from "./StatsHeader";

type LocationChaptersProps = {
  locationId: string;
};

export default function LocationChapters({ locationId }: LocationChaptersProps) {
  const { openMap, openChapter, progress } = useGame();
  const location = getLocationById(locationId);

  if (!location) {
    return null;
  }

  return (
    <div className="gfgame-shell gfgame-scanlines gfgame-grid flex h-[100dvh] flex-col overflow-hidden">
      <StatsHeader
        title={location.name}
        subtitle={`${location.flag} CHAPTERS`}
        showBack
        onBack={openMap}
      />

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
        <p className="text-center text-[10px] leading-relaxed text-[#5a8060]">
          {location.tagline}
        </p>

        <div className="mx-auto mt-6 grid max-w-lg gap-3">
          {location.chapters.map((chapter, index) => {
            const done = progress.completedChapterIds.includes(chapter.id);

            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => openChapter(locationId, chapter.id)}
                className={[
                  "gfgame-pixel-border gfgame-arcade-btn w-full px-4 py-4 text-left",
                  done && "border-[#5dff8a]/50",
                ].join(" ")}
              >
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#4de8ff]">
                  CH.{String(index + 1).padStart(2, "0")}
                  {done && (
                    <span className="ml-2 text-[#5dff8a]">✓ COLLECTED</span>
                  )}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-2xl">{chapter.emoji}</span>
                  <div>
                    <p className="font-[family-name:var(--font-gfgame-pixel)] text-[9px] uppercase text-[#5dff8a]">
                      {chapter.title}
                    </p>
                    {chapter.subtitle && (
                      <p className="mt-1 text-[9px] text-[#5a8060]">
                        {chapter.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
