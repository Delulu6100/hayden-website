"use client";

import { Location } from "../types";
import { PixelPlayer } from "./PixelPlayer";
import { MapDecorations } from "./MapBackground";

export function MapBackground({
  playerX,
  playerY,
  playerDirection,
  traveling,
  travelText,
  locations,
  locationIndex,
  completedMemories,
  onLocationClick,
}: {
  playerX: number;
  playerY: number;
  playerDirection: "left" | "right";
  traveling: boolean;
  travelText: string;
  locations: Location[];
  locationIndex: number;
  completedMemories: string[];
  onLocationClick: (index: number) => void;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#1B3521]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#A4C2A8 1px, transparent 1px), linear-gradient(90deg, #A4C2A8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-[15] bg-[radial-gradient(circle_at_50%_45%,transparent_55%,rgba(0,0,0,0.35)_100%)]" />

      <MapDecorations />

      <svg
        className="pointer-events-none absolute inset-0 z-[12] h-full w-full"
        preserveAspectRatio="none"
      >
        <polyline
          points={locations
            .map((location) => `${location.x}% ${location.y}%`)
            .join(", ")}
          fill="none"
          stroke="#E0BD72"
          strokeWidth="3"
          strokeDasharray="8 8"
          vectorEffect="non-scaling-stroke"
          style={{
            animation: "ourjourney-dash 1.4s linear infinite",
          }}
        />
      </svg>

      {locations.map((location, index) => {
        const completedCount = location.memories.filter((memory) =>
          completedMemories.includes(memory.title)
        ).length;

        const hasCompleted = completedCount === location.memories.length;
        const inProgress = completedCount > 0 && !hasCompleted;
        const isCurrent = index === locationIndex && !traveling;

        return (
          <button
            key={location.name}
            type="button"
            disabled={traveling}
            onClick={() => onLocationClick(index)}
            className="group absolute z-30 -translate-x-1/2 -translate-y-1/2 touch-manipulation"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
            }}
          >
            <div
              className={[
                "absolute -inset-4 rounded-full transition",
                isCurrent
                  ? "animate-pulse bg-yellow-300/20"
                  : "bg-transparent",
              ].join(" ")}
            />

            {inProgress && (
              <div
                className="absolute -inset-2 rounded-full border-2 border-[#E0BD72]/70"
                style={{
                  animation: "ourjourney-glow-pulse 2s ease-in-out infinite",
                }}
              />
            )}

            <div
              className={[
                "relative flex h-12 w-12 items-center justify-center border-4 border-[#101B12] text-xl shadow-[4px_4px_0px_#071008] transition-transform",
                "group-hover:scale-110",
                "group-active:scale-95",
                hasCompleted ? "bg-green-500" : "bg-[#D6AD54]",
              ].join(" ")}
            >
              {hasCompleted ? "✓" : location.emoji}
            </div>

            <div className="mt-2 whitespace-nowrap border-2 border-[#49614A] bg-[#08100B]/95 px-2 py-1 text-center shadow-[2px_2px_0px_#050806]">
              <p className="font-mono text-[7px] font-bold tracking-wide">
                {location.name.toUpperCase()}
              </p>
              {location.memories.length > 0 && (
                <p
                  className={[
                    "font-mono text-[6px]",
                    hasCompleted ? "text-green-400" : "text-gray-400",
                  ].join(" ")}
                >
                  {completedCount}/{location.memories.length}
                </p>
              )}
            </div>
          </button>
        );
      })}

      <div
        className="absolute z-40 -translate-x-1/2 -translate-y-full transition-none"
        style={{
          left: `${playerX}%`,
          top: `${playerY}%`,
        }}
      >
        <div className="mb-1 text-center font-mono text-[7px] font-bold text-white [text-shadow:2px_2px_0_#000]">
          YOU
        </div>
        <PixelPlayer walking={traveling} direction={playerDirection} />
      </div>

      {traveling && (
        <div className="absolute inset-0 z-[45] flex items-center justify-center bg-black/35 backdrop-blur-[1px]">
          <div className="border-4 border-[#A8C2A7] bg-[#08100B] px-7 py-6 text-center shadow-[6px_6px_0px_#020617]">
            <div className="mx-auto mb-4 flex justify-center">
              <PixelPlayer walking direction={playerDirection} />
            </div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-green-300">
              {travelText}
            </p>
            <div className="mt-4 flex justify-center gap-1">
              <span className="h-1.5 w-1.5 animate-pulse bg-green-400" />
              <span className="h-1.5 w-1.5 animate-pulse bg-green-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-pulse bg-green-400 [animation-delay:300ms]" />
            </div>
          </div>
        </div>
      )}

      {!traveling && (
        <div className="absolute bottom-5 left-1/2 z-40 -translate-x-1/2 border-2 border-[#526753] bg-[#08100B]/95 px-4 py-3 text-center font-mono shadow-[3px_3px_0px_#050806]">
          <p className="text-[8px] font-bold text-green-300">
            TAP A DESTINATION
          </p>
          <p className="mt-1 text-[6px] text-gray-400">
            Choose where to travel next.
          </p>
        </div>
      )}
    </div>
  );
}
