"use client";

import { useState } from "react";
import { SpriteImage } from "./SpriteImage";

/* =========================================================
   PLAYER
========================================================= */

export function PixelPlayer({
  walking = false,
  direction = "right",
}: {
  walking?: boolean;
  direction?: "left" | "right";
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className={[
        "relative h-12 w-9",
        walking ? "animate-bounce" : "",
        direction === "left" ? "-scale-x-100" : "",
      ].join(" ")}
    >
      {imgFailed ? (
        <>
          <div className="absolute left-2 top-0 h-4 w-5 bg-[#1D1B20]" />
          <div className="absolute left-2 top-3 h-4 w-5 bg-[#E5A06D]" />
          <div className="absolute left-1 top-7 h-5 w-7 border-2 border-black bg-blue-700" />
          <div
            className={[
              "absolute bottom-0 left-1 h-3 w-3 bg-[#1A1A1A]",
              walking ? "animate-pulse" : "",
            ].join(" ")}
          />
          <div
            className={[
              "absolute bottom-0 right-1 h-3 w-3 bg-[#1A1A1A]",
              walking ? "animate-pulse" : "",
            ].join(" ")}
          />
        </>
      ) : (
        <SpriteImage
          src="/sprites/characters/player.png"
          className="h-full w-full object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}
