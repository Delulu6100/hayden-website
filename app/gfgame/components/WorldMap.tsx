"use client";

import { useMemo, useState } from "react";

import { LOCATIONS } from "../data/gameContent";
import { useGame } from "../context/GameContext";
import { StatsHeader } from "./StatsHeader";

export default function WorldMap() {
  const {
    selectLocation,
    isLocationUnlocked,
    isLocationComplete,
    getLocationProgress,
    progress,
    openMap,
  } = useGame();

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const unlockedLocations = useMemo(
    () => LOCATIONS.filter((loc) => isLocationUnlocked(loc.id)),
    [isLocationUnlocked, progress.unlockedLocationIds]
  );

  const pathPoints = useMemo(
    () =>
      LOCATIONS.map((loc) => `${loc.mapX},${loc.mapY}`).join(" "),
    []
  );

  const handleSelect = (locationId: string) => {
    if (!isLocationUnlocked(locationId)) return;
    selectLocation(locationId);
  };

  return (
    <div className="gfgame-shell gfgame-scanlines gfgame-grid gfgame-vignette flex h-[100dvh] flex-col overflow-hidden">
      <StatsHeader subtitle="SYS://WORLD_MAP" onBack={openMap} />

      <div className="relative min-h-0 flex-1">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(93,255,138,0.07)_0%,transparent_55%)]" />

        {/* Decorative pixel terrain */}
        <MapTerrain />

        {/* Journey path */}
        <svg
          className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polyline
            points={pathPoints}
            fill="none"
            stroke="#2a8f4a"
            strokeWidth="0.6"
            strokeDasharray="2 2"
            vectorEffect="non-scaling-stroke"
            opacity={0.5}
          />
          <polyline
            points={pathPoints}
            fill="none"
            stroke="#5dff8a"
            strokeWidth="0.35"
            strokeDasharray="1.5 1.5"
            vectorEffect="non-scaling-stroke"
            style={{ animation: "gfgame-dash 2s linear infinite" }}
          />
        </svg>

        {/* Location nodes */}
        {LOCATIONS.map((location) => {
          const unlocked = isLocationUnlocked(location.id);
          const complete = isLocationComplete(location.id);
          const { done, total } = getLocationProgress(location.id);
          const inProgress = done > 0 && done < total;
          const isHovered = hoveredId === location.id;
          const isActive = progress.activeLocationId === location.id;

          return (
            <button
              key={location.id}
              type="button"
              disabled={!unlocked}
              onClick={() => handleSelect(location.id)}
              onMouseEnter={() => setHoveredId(location.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={[
                "group absolute z-20 -translate-x-1/2 -translate-y-1/2 touch-manipulation outline-none",
                unlocked ? "cursor-pointer" : "cursor-not-allowed",
              ].join(" ")}
              style={{
                left: `${location.mapX}%`,
                top: `${location.mapY}%`,
              }}
              aria-label={
                unlocked
                  ? `Travel to ${location.name}`
                  : `${location.name} locked`
              }
            >
              {/* Pulse ring for active / in-progress */}
              {(isActive || inProgress) && unlocked && (
                <span
                  className="absolute -inset-3 rounded-sm border border-[#5dff8a]/50"
                  style={{ animation: "gfgame-pulse-glow 2s ease-in-out infinite" }}
                />
              )}

              {/* Node container — pixel CRT frame */}
              <div
                className={[
                  "gfgame-pixel-border relative flex flex-col items-center transition-transform duration-100",
                  unlocked && "group-hover:scale-105 group-active:scale-95",
                  !unlocked && "opacity-40 grayscale",
                  complete && unlocked && "border-[#5dff8a]/60",
                ].join(" ")}
                style={
                  unlocked && !complete
                    ? { animation: "gfgame-node-float 3s ease-in-out infinite" }
                    : undefined
                }
              >
                {/* Flag badge */}
                <div
                  className={[
                    "flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16",
                    complete
                      ? "bg-[#143318]"
                      : unlocked
                        ? "bg-[#0d180d]"
                        : "bg-[#0a0f0a]",
                  ].join(" ")}
                >
                  <span className="text-2xl sm:text-3xl" style={{ imageRendering: "pixelated" }}>
                    {unlocked ? (complete ? "✓" : location.flag) : "🔒"}
                  </span>
                </div>

                {/* Label plate */}
                <div className="w-full border-t-2 border-[#1e3d24] bg-[#070d07] px-2 py-1.5 text-center">
                  <p
                    className={[
                      "font-[family-name:var(--font-gfgame-pixel)] text-[6px] uppercase tracking-wide sm:text-[7px]",
                      unlocked ? "text-[#5dff8a]" : "text-[#3a5040]",
                    ].join(" ")}
                  >
                    {location.name}
                  </p>
                  {unlocked && total > 0 && (
                    <p className="mt-0.5 text-[7px] text-[#5a8060]">
                      {done}/{total} chapters
                    </p>
                  )}
                </div>
              </div>

              {/* Hover tooltip */}
              {unlocked && isHovered && (
                <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-36 -translate-x-1/2 border-2 border-[#2a8f4a] bg-[#070d07]/95 px-2 py-1.5 text-center shadow-[0_0_16px_rgba(93,255,138,0.2)]">
                  <p className="text-[8px] leading-relaxed text-[#b8f0c8]">
                    {location.tagline}
                  </p>
                </div>
              )}
            </button>
          );
        })}

        {/* HUD footer hint */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2">
          <div className="gfgame-pixel-border bg-[#070d07]/90 px-4 py-2 text-center">
            <p className="font-[family-name:var(--font-gfgame-pixel)] text-[7px] uppercase tracking-wider text-[#5dff8a]">
              TAP A NODE
            </p>
            <p className="mt-1 text-[8px] text-[#5a8060]">
              {unlockedLocations.length}/{LOCATIONS.length} regions online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Decorative pixel props scattered across the map */
function MapTerrain() {
  const props = [
    { type: "tree", x: 8, y: 55 },
    { type: "tree", x: 22, y: 72 },
    { type: "tower", x: 52, y: 22 },
    { type: "tree", x: 72, y: 38 },
    { type: "wave", x: 90, y: 62 },
    { type: "star", x: 45, y: 12 },
    { type: "star", x: 78, y: 18 },
    { type: "star", x: 18, y: 8 },
  ] as const;

  return (
    <div className="pointer-events-none absolute inset-0 z-[3]">
      {props.map((prop, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: `${prop.x}%`, top: `${prop.y}%` }}
        >
          {prop.type === "tree" && <PixelTree />}
          {prop.type === "tower" && <PixelTower />}
          {prop.type === "wave" && <PixelWave />}
          {prop.type === "star" && <PixelStar delay={i * 0.4} />}
        </div>
      ))}
    </div>
  );
}

function PixelTree() {
  return (
    <div className="relative h-8 w-6 opacity-50 sm:h-10 sm:w-8">
      <div className="absolute bottom-0 left-1/2 h-3 w-1 -translate-x-1/2 bg-[#3d2817]" />
      <div className="absolute bottom-2 left-0 h-5 w-6 bg-[#1a4a28]" />
      <div className="absolute bottom-4 left-1 h-4 w-4 bg-[#2a6a38]" />
      <div className="absolute bottom-6 left-2 h-3 w-2 bg-[#3a8a48]" />
    </div>
  );
}

function PixelTower() {
  return (
    <div className="relative h-10 w-4 opacity-40">
      <div className="absolute bottom-0 h-full w-full border border-[#1e3d24] bg-[#0d180d]" />
      <div className="absolute left-0.5 top-1 h-1 w-2 bg-[#4de8ff]/60" />
      <div className="absolute left-0.5 top-3 h-1 w-2 bg-[#4de8ff]/40" />
      <div className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 bg-[#5dff8a]" />
    </div>
  );
}

function PixelWave() {
  return (
    <div className="flex gap-0.5 opacity-35">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-2 w-3 bg-[#4de8ff]/30"
          style={{
            clipPath: "polygon(0 60%, 50% 0, 100% 60%, 100% 100%, 0 100%)",
          }}
        />
      ))}
    </div>
  );
}

function PixelStar({ delay }: { delay: number }) {
  return (
    <span
      className="block h-1 w-1 bg-[#5dff8a]"
      style={{
        animation: "gfgame-blink 2s step-end infinite",
        animationDelay: `${delay}s`,
        boxShadow: "0 0 6px #5dff8a",
      }}
    />
  );
}
