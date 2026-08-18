"use client";

import { GAME_META } from "../data/gameContent";
import { useGame } from "../context/GameContext";

type StatsHeaderProps = {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
};

export function StatsHeader({
  title,
  subtitle,
  showBack = true,
  onBack,
}: StatsHeaderProps) {
  const { memoryCount, totalMemories } = useGame();
  const progressPct = Math.round((memoryCount / totalMemories) * 100);

  return (
    <header className="relative z-40 shrink-0 border-b-3 border-[#1e3d24] bg-[#070d07]/95 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          {showBack && onBack && (
            <button
              type="button"
              onClick={onBack}
              className="gfgame-arcade-btn shrink-0 px-3 py-2 text-[8px] uppercase tracking-wider"
              aria-label="Go back"
            >
              ←
            </button>
          )}

          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-gfgame-pixel)] text-[7px] uppercase tracking-[0.2em] text-[#4de8ff]">
              {subtitle ?? "SYS://WORLD_MAP"}
            </p>
            <h1 className="gfgame-neon-text truncate font-[family-name:var(--font-gfgame-pixel)] text-[10px] uppercase sm:text-xs">
              {title}
            </h1>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-[8px] uppercase tracking-[0.25em] text-[#5a8060]">
            MEMORIES
          </p>
          <p className="font-[family-name:var(--font-gfgame-pixel)] text-[9px] text-[#5dff8a]">
            {String(memoryCount).padStart(2, "0")}/
            {String(totalMemories).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="h-1 bg-[#0a120a]">
        <div
          className="h-full bg-gradient-to-r from-[#2a8f4a] via-[#5dff8a] to-[#4de8ff] transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </header>
  );
}
