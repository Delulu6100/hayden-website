"use client";

import { Memory, Location } from "../types";
import { playUiSound } from "../audio";

/* =========================================================
   MEMORY JOURNAL
========================================================= */

export function JournalOverlay({
  locations,
  completedMemories,
  onClose,
  onOpenMemory,
}: {
  locations: Location[];
  completedMemories: string[];
  onClose: () => void;
  onOpenMemory: (locationIdx: number, memory: Memory) => void;
}) {
  const totalMemories = locations.reduce(
    (total, location) => total + location.memories.length,
    0
  );

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden border-4 border-[#7A9C7B] bg-[#16261A] shadow-[8px_8px_0px_#020617]"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(#A4C2A8 1px, transparent 1px), linear-gradient(90deg, #A4C2A8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative flex items-center justify-between border-b-4 border-[#3E5640] bg-[#101B12] px-5 py-4">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-green-400">
              THE JOURNEY SO FAR
            </p>
            <h2 className="mt-1 font-mono text-sm font-bold text-white">
              MEMORY JOURNAL
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-mono text-[8px] text-gray-400">
              {completedMemories.length}/{totalMemories}
            </p>
            <button
              type="button"
              onClick={() => {
                playUiSound();
                onClose();
              }}
              className="border-2 border-gray-700 px-3 py-2 font-mono text-[8px] text-gray-300 transition active:bg-gray-800"
            >
              CLOSE
            </button>
          </div>
        </div>

        <div className="relative overflow-y-auto px-5 py-5">
          {locations.map((location, locationIdx) => (
            <div key={location.name} className="mb-6 last:mb-0">
              <div className="flex items-center gap-2 border-b border-[#2A3A2C] pb-2">
                <span className="text-lg">{location.emoji}</span>
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-300">
                  {location.name}
                </p>
              </div>

              <div className="mt-3 space-y-2">
                {location.memories.map((memory) => {
                  const done = completedMemories.includes(memory.title);

                  return (
                    <button
                      key={memory.title}
                      type="button"
                      onClick={() => {
                        playUiSound();
                        onOpenMemory(locationIdx, memory);
                      }}
                      className={[
                        "flex w-full items-center gap-3 border-2 px-3 py-2 text-left transition active:translate-y-[1px]",
                        done
                          ? "border-green-900 bg-[#0F1912]"
                          : "border-gray-800 bg-[#111820]",
                      ].join(" ")}
                    >
                      <span className="text-lg">{memory.emoji}</span>
                      <span className="flex-1 font-mono text-[9px] text-gray-200">
                        {memory.title}
                      </span>
                      <span
                        className={[
                          "font-mono text-[7px] uppercase tracking-widest",
                          done ? "text-green-400" : "text-gray-600",
                        ].join(" ")}
                      >
                        {done ? "✓ collected" : "not yet"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
