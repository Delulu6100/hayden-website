"use client";

import { useState } from "react";
import { SceneType } from "../types";
import { SpriteImage } from "./SpriteImage";

/* =========================================================
   SCENE CHARACTERS
========================================================= */

function PixelPerson({ color }: { color: "blue" | "pink" }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src =
    color === "blue"
      ? "/sprites/characters/hayden.png"
      : "/sprites/characters/kelly.png";

  return (
    <div className="h-24 w-14">
      {imgFailed ? (
        <>
          <div
            className={[
              "h-20 w-12 border-4 border-black",
              color === "blue" ? "bg-blue-700" : "bg-pink-700",
            ].join(" ")}
          />
          <div className="flex gap-2">
            <div className="h-10 w-4 bg-black" />
            <div className="h-10 w-4 bg-black" />
          </div>
        </>
      ) : (
        <SpriteImage
          src={src}
          className="h-full w-full object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}

export function PixelCharacters({
  type,
  activeSpeaker,
}: {
  type: SceneType;
  activeSpeaker: "HAYDEN" | "KELLY" | null;
}) {
  const dim = (speaker: "HAYDEN" | "KELLY") =>
    activeSpeaker && activeSpeaker !== speaker
      ? "opacity-50 transition-opacity duration-300 scale-95"
      : "opacity-100 transition-all duration-300 scale-100";

  if (type === "snowman") {
    return (
      <>
        <div className={`absolute bottom-[25%] right-[18%] z-10 ${dim("KELLY")}`}>
          <PixelPerson color="pink" />
        </div>

        <div className="absolute bottom-[24%] left-1/2 z-10 -translate-x-1/2">
          <div className="relative flex flex-col items-center">
            {/* head */}
            <div className="relative h-12 w-12 rounded-full border-4 border-gray-700 bg-white shadow-[3px_3px_0_rgba(0,0,0,0.15)]">
              <span className="absolute left-[26%] top-[32%] h-1.5 w-1.5 rounded-full bg-black" />
              <span className="absolute right-[26%] top-[32%] h-1.5 w-1.5 rounded-full bg-black" />
              <span className="absolute left-1/2 top-[52%] h-0 w-0 -translate-x-1/2 border-l-[4px] border-r-[4px] border-t-[7px] border-l-transparent border-r-transparent border-t-orange-500" />
            </div>

            {/* body */}
            <div className="relative h-20 w-20 rounded-full border-4 border-gray-700 bg-white shadow-[3px_3px_0_rgba(0,0,0,0.15)]">
              <span className="absolute left-1/2 top-[30%] h-1 w-1 -translate-x-1/2 rounded-full bg-gray-700" />
              <span className="absolute left-1/2 top-[50%] h-1 w-1 -translate-x-1/2 rounded-full bg-gray-700" />
              <span className="absolute left-1/2 top-[70%] h-1 w-1 -translate-x-1/2 rounded-full bg-gray-700" />

              <span
                className="absolute -left-6 top-[35%] h-1 w-8 origin-right bg-[#5B3925]"
                style={{ animation: "ourjourney-sway 4s ease-in-out infinite" }}
              />
              <span
                className="absolute -right-6 top-[35%] h-1 w-8 origin-left bg-[#5B3925]"
                style={{ animation: "ourjourney-sway 4s ease-in-out infinite reverse" }}
              />
            </div>

            {/* base */}
            <div className="h-28 w-28 rounded-full border-4 border-gray-700 bg-white shadow-[3px_3px_0_rgba(0,0,0,0.15)]" />
          </div>
        </div>
      </>
    );
  }

  if (type === "bumpercars") {
    return (
      <>
        <div className="absolute bottom-[26%] left-[28%] z-10 h-12 w-20 rounded-lg border-4 border-black bg-blue-700 shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
          <div className="absolute -top-2 left-1/2 h-3 w-6 -translate-x-1/2 rounded-full border-2 border-black bg-gray-300" />
        </div>
        <div className="absolute bottom-[26%] left-[48%] z-10 h-12 w-20 rounded-lg border-4 border-black bg-pink-600 shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
          <div className="absolute -top-2 left-1/2 h-3 w-6 -translate-x-1/2 rounded-full border-2 border-black bg-gray-300" />
        </div>
        <div className="absolute bottom-[31%] left-[35%] z-20">
          <PixelPerson color="pink" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`absolute bottom-[23%] left-[25%] z-10 ${dim("HAYDEN")}`}>
        <PixelPerson color="blue" />
      </div>
      <div className={`absolute bottom-[23%] right-[25%] z-10 ${dim("KELLY")}`}>
        <PixelPerson color="pink" />
      </div>
    </>
  );
}
