"use client";

import { useState } from "react";
import { SpriteImage } from "./SpriteImage";

/* =========================================================
   MAP DECORATIONS
========================================================= */

function PixelTree({ x, y }: { x: number; y: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="absolute z-10 h-9 w-8 sm:h-14 sm:w-12"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {imgFailed ? (
        <>
          <div className="absolute bottom-0 left-1/2 h-5 w-2 -translate-x-1/2 bg-[#5B3925]" />
          <div className="absolute left-1 top-5 h-8 w-10 bg-[#214C2B]" />
          <div className="absolute left-0 top-2 h-8 w-10 bg-[#2D6736]" />
          <div className="absolute left-2 top-0 h-7 w-7 bg-[#438048]" />
          <div className="absolute left-4 top-0 h-2 w-2 bg-[#6CA653]" />
        </>
      ) : (
        <SpriteImage
          src="/sprites/tiles/tree.png"
          className="h-full w-full object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}

function PixelRock({ x, y }: { x: number; y: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="absolute z-[8] h-4 w-5 sm:h-6 sm:w-8"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {imgFailed ? (
        <>
          <div className="h-4 w-6 bg-[#526654]" />
          <div className="absolute left-2 top-[-4px] h-4 w-4 bg-[#687D69]" />
        </>
      ) : (
        <SpriteImage
          src="/sprites/tiles/rock.png"
          className="h-full w-full object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}

function PixelFlower({ x, y }: { x: number; y: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="absolute z-[8] h-4 w-4 sm:h-6 sm:w-6"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {imgFailed ? (
        <>
          <div className="absolute left-2 top-2 h-5 w-1 bg-[#477044]" />
          <div className="absolute left-0 top-0 h-2 w-2 bg-pink-300" />
          <div className="absolute left-3 top-0 h-2 w-2 bg-yellow-200" />
          <div className="absolute left-1 top-2 h-2 w-2 bg-red-300" />
        </>
      ) : (
        <SpriteImage
          src="/sprites/tiles/flower.png"
          className="h-full w-full object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}

function PixelHouse({ x, y }: { x: number; y: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="absolute z-[9] h-9 w-8 sm:h-14 sm:w-12"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {imgFailed ? (
        <>
          <div className="absolute -top-4 left-1 h-0 w-0 border-l-[22px] border-r-[22px] border-b-[18px] border-l-transparent border-r-transparent border-b-[#613D30]" />
          <div className="h-8 w-10 border-2 border-[#2A201B] bg-[#B97855]" />
          <div className="absolute bottom-0 left-4 h-5 w-3 bg-[#4A3026]" />
          <div className="absolute left-2 top-2 h-3 w-3 bg-[#A9D5E6]" />
        </>
      ) : (
        <SpriteImage
          src="/sprites/tiles/house.png"
          className="h-full w-full object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}

function Water() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden opacity-70">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-1 bg-[#6AA7C3]/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${10 + ((i * 19) % 80)}%`,
            width: `${12 + ((i * 7) % 18)}px`,
          }}
        />
      ))}
    </div>
  );
}

export function MapDecorations() {
  return (
    <>
      <PixelHouse x={25} y={67} />
      <PixelHouse x={87} y={52} />

      <PixelRock x={34} y={63} />
      <PixelRock x={66} y={41} />
      <PixelRock x={91} y={67} />
      <PixelRock x={12} y={49} />

      <PixelFlower x={23} y={48} />
      <PixelFlower x={28} y={54} />
      <PixelFlower x={36} y={71} />
      <PixelFlower x={62} y={53} />
      <PixelFlower x={75} y={68} />
      <PixelFlower x={84} y={77} />

      <PixelTree x={10} y={35} />
      <PixelTree x={21} y={41} />
      <PixelTree x={33} y={18} />
      <PixelTree x={52} y={28} />
      <PixelTree x={64} y={13} />
      <PixelTree x={74} y={45} />
      <PixelTree x={90} y={35} />
      <PixelTree x={45} y={72} />
      <PixelTree x={78} y={73} />
      <PixelTree x={17} y={70} />

      <Water />

      {/* Ambient floating dust / snow particles on world map */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white/40 pointer-events-none z-[11]"
          style={{
            left: `${(i * 31) % 100}%`,
            top: `${(i * 47) % 100}%`,
            animation: `ourjourney-glow-pulse ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </>
  );
}
