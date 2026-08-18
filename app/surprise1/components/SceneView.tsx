"use client";

import { SceneType } from "../types";
import {
  PixelStars,
  PixelMoon,
  PixelMountain,
  PixelCloud,
  PixelSnowGround,
  PixelSnowfall,
  PixelPineTree,
  PixelFootprints,
  PixelBuilding,
  PixelBridge,
  PixelLampPost,
  PixelWater,
  PixelColumn,
  PixelSign,
  PixelMarketStall,
  PixelTable,
  PixelChair,
  PixelArcadeCabinet,
  PixelCinemaSeats,
  PixelSushiBelt,
  PixelTrainWindows,
  PixelFerrisWheel,
} from "./ScenePrimitives";

/* =========================================================
   SCENE BACKGROUND
========================================================= */

export function SceneBackground({ type }: { type: SceneType }) {
  const base = "absolute inset-0 overflow-hidden";

  if (type === "aurora") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#020617] via-[#050B1A] to-[#071019]`}>
        <PixelStars count={70} spread={65} />

        <div className="absolute left-[-20%] top-[8%] h-28 w-[140%] rotate-[-6deg] rounded-[50%] border-[16px] border-green-300/25 blur-xl" />
        <div className="absolute left-[-20%] top-[14%] h-24 w-[140%] rotate-[-4deg] rounded-[50%] border-[10px] border-cyan-300/25 blur-lg" />
        <div className="absolute left-[-20%] top-[20%] h-16 w-[140%] rotate-[-3deg] rounded-[50%] border-[8px] border-purple-300/15 blur-lg" />

        {/* distant mountains */}
        <PixelMountain left={-5} width={45} height={26} color="#0B1626" />
        <PixelMountain left={28} width={55} height={20} color="#0E1B2E" />
        <PixelMountain left={62} width={48} height={24} color="#0B1626" />

        {/* snow ground */}
        <div className="absolute bottom-0 h-[26%] w-full bg-[#0F1E2C]" />
        <div className="absolute bottom-[18%] h-1 w-full bg-white/10" />
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/60"
            style={{ left: `${(i * 17) % 100}%`, bottom: `${2 + (i % 5)}%` }}
          />
        ))}
      </div>
    );
  }

  if (type === "snowball") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#BFE0F0] to-[#E8F4FA]`}>
        <PixelCloud left={8} top={8} width={70} opacity={0.9} />
        <PixelCloud left={58} top={16} width={50} opacity={0.7} />

        <PixelMountain left={-10} width={60} height={22} color="#C7DEEA" />
        <PixelMountain left={45} width={65} height={18} color="#D7E8F0" />

        <PixelPineTree left={10} height={56} />
        <PixelPineTree left={20} height={40} color="#28603A" />
        <PixelPineTree left={82} height={62} />
        <PixelPineTree left={70} height={38} color="#28603A" />

        <PixelSnowGround />
        <PixelFootprints left={38} />
        <PixelSnowfall count={26} />
      </div>
    );
  }

  if (type === "snowman") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#BFE0F0] to-[#E8F4FA]`}>
        <PixelCloud left={12} top={10} width={60} opacity={0.85} />
        <PixelMountain left={-10} width={55} height={20} color="#C7DEEA" />
        <PixelMountain left={50} width={60} height={16} color="#D7E8F0" />

        <PixelPineTree left={6} height={50} />
        <PixelPineTree left={86} height={58} />
        <PixelPineTree left={76} height={36} color="#28603A" />

        <PixelSnowGround />
        <PixelSnowfall count={18} />
      </div>
    );
  }

  if (type === "bumpercars") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#2B1B39] to-[#170D22]`}>
        {/* string lights along the top */}
        <div className="absolute left-0 right-0 top-[6%] h-0.5 bg-gray-600" />
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,0.9)]"
            style={{
              left: `${4 + i * 7}%`,
              top: "6.5%",
              animation: "ourjourney-flicker 4s steps(1) infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={`bulb-${i}`}
            className="absolute h-2.5 w-2.5 rounded-full bg-pink-300 shadow-[0_0_14px_rgba(244,114,182,0.8)]"
            style={{ left: `${(i * 29) % 100}%`, top: `${14 + ((i * 11) % 40)}%` }}
          />
        ))}

        <PixelSign left={50} text="BUMPER CARS" color="#F472B6" />

        {/* arena floor */}
        <div className="absolute bottom-0 h-[34%] w-full border-t-4 border-gray-500 bg-[#3A2E44]" />
        <div className="absolute bottom-[8%] left-[10%] right-[10%] h-1 rounded-full bg-white/10" />
        <div className="absolute bottom-0 h-[34%] w-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      </div>
    );
  }

  if (type === "coat") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#2A1F3D] via-[#3B2A4A] to-[#1A1224]`}>
        <PixelStars count={20} spread={30} />
        <PixelMoon left={80} top={8} />

        <PixelBuilding left={2} width={16} height={48} color="#5C4B6E" windowColor="#F3D98B" rows={4} cols={2} />
        <PixelBuilding left={20} width={14} height={40} color="#6B5580" windowColor="#F3D98B" rows={3} cols={2} />
        <PixelBuilding left={66} width={14} height={44} color="#5C4B6E" windowColor="#F3D98B" rows={4} cols={2} />
        <PixelBuilding left={82} width={16} height={38} color="#6B5580" windowColor="#F3D98B" rows={3} cols={2} />

        <PixelBridge left={34} width={32} />
        <PixelLampPost left={30} />
        <PixelLampPost left={68} />

        <PixelWater color="#3A5064" />
      </div>
    );
  }

  if (type === "powerbank") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#3B2A22] via-[#4A3428] to-[#1E140F]`}>
        <PixelStars count={16} spread={25} />

        <PixelColumn left={12} />
        <PixelColumn left={22} />
        <PixelColumn left={70} />
        <PixelColumn left={80} />

        <PixelBuilding left={30} width={40} height={40} color="#B98550" windowColor="#F3D98B" rows={2} cols={5} />

        <PixelLampPost left={5} />
        <PixelLampPost left={90} />

        <div className="absolute bottom-0 h-[16%] w-full bg-[#241813]" />
        <div className="absolute bottom-[14%] h-1 w-full bg-black/20" />
      </div>
    );
  }

  if (type === "confession") {
    return (
      <div className={`${base} bg-[#111827]`}>
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(224,189,114,0.18)_0%,transparent_65%)]"
          style={{ animation: "ourjourney-glow-pulse 4s ease-in-out infinite" }}
        />

        <PixelTrainWindows />

        {/* overhead lights */}
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-8 rounded-full bg-[#F3D98B]/70 shadow-[0_0_18px_rgba(243,217,139,0.6)]"
            style={{
              left: `${14 + i * 24}%`,
              top: "4%",
              animation: "ourjourney-flicker 6s steps(1) infinite",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* seat bench */}
        <div className="absolute bottom-[16%] left-[5%] h-20 w-[90%] rounded-t-2xl bg-[#3B4252]" />
        <div className="absolute bottom-[16%] left-[5%] h-3 w-[90%] rounded-t-2xl bg-[#E0BD72]/30" />
      </div>
    );
  }

  if (type === "borough") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#4B2A1C] to-[#2E1A11]`}>
        <PixelSign left={50} text="BOROUGH MARKET" color="#E0BD72" />

        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#F3D98B] shadow-[0_0_10px_rgba(243,217,139,0.8)]"
            style={{
              left: `${4 + i * 10}%`,
              top: "20%",
              animation: "ourjourney-flicker 5s steps(1) infinite",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        <div className="absolute bottom-0 h-[26%] w-full bg-[#302018]" />

        <PixelMarketStall left={4} width={16} color="#B23B3B" />
        <PixelMarketStall left={22} width={16} color="#3B7A4B" />
        <PixelMarketStall left={40} width={16} color="#B26F1E" />
        <PixelMarketStall left={58} width={16} color="#8B5A3C" />
        <PixelMarketStall left={76} width={16} color="#B23B3B" />
      </div>
    );
  }

  if (type === "gaming") {
    return (
      <div className={`${base} bg-[#0C1220]`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.08)_0%,transparent_60%)]" />

        {/* smaller cabinets flanking the main one */}
        <div className="absolute bottom-[16%] left-[6%] h-[32%] w-[14%] border-4 border-gray-700 bg-[#0B0F16]">
          <div className="m-[14%] h-[50%] bg-purple-900/40" />
        </div>
        <div className="absolute bottom-[16%] right-[6%] h-[32%] w-[14%] border-4 border-gray-700 bg-[#0B0F16]">
          <div className="m-[14%] h-[50%] bg-red-900/40" />
        </div>

        <PixelArcadeCabinet left={50} />

        <div className="absolute bottom-0 h-[14%] w-full bg-[#05080D]" />
        <div className="absolute bottom-[12%] h-px w-full bg-cyan-400/20" />
      </div>
    );
  }

  if (type === "flowers") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#241419] to-[#160D11]`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#F3B98B] shadow-[0_0_14px_rgba(243,185,139,0.7)]"
            style={{
              left: `${10 + i * 18}%`,
              top: "18%",
              animation: "ourjourney-flicker 5s steps(1) infinite",
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        <div className="absolute left-[8%] top-[14%] h-20 w-14 border-4 border-[#3A2820] bg-[#0F1B2E]" />
        <div className="absolute right-[8%] top-[14%] h-20 w-14 border-4 border-[#3A2820] bg-[#0F1B2E]" />

        <div className="absolute bottom-[20%] left-[8%] right-[8%] h-32 rounded-t-3xl border-4 border-[#5B3A2E] bg-[#271914]" />

        <PixelTable left={20} />
        <PixelChair left={17} />
        <PixelChair left={28} />
        <PixelTable left={64} />
        <PixelChair left={61} />
        <PixelChair left={72} />
      </div>
    );
  }

  if (type === "bigben") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#0B1020] to-[#050810]`}>
        <PixelStars count={40} spread={40} />
        <PixelFerrisWheel left={68} top={10} />

        <PixelBuilding left={4} width={12} height={30} color="#141B2E" windowColor="#F3D98B" rows={3} cols={2} />
        <PixelBuilding left={82} width={12} height={26} color="#141B2E" windowColor="#F3D98B" rows={3} cols={2} />

        {/* Big Ben tower */}
        <div className="absolute bottom-[20%] left-[38%] h-[46%] w-14 border-4 border-yellow-900 bg-[#B8864A]" />
        <div className="absolute bottom-[62%] left-[36%] h-14 w-[72px] border-4 border-yellow-900 bg-[#C99A5A]" />
        <div className="absolute bottom-[74%] left-[40%] h-2 w-2 rounded-full bg-[#F3D98B] shadow-[0_0_10px_rgba(243,217,139,0.9)]" />

        <PixelWater color="#0E2430" />
      </div>
    );
  }

  if (type === "sushi") {
    return (
      <div className={`${base} bg-gradient-to-b from-[#241713] to-[#17110E]`}>
        <PixelSign left={50} text="SUSHIRO" color="#E0463A" />

        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#F3D98B] shadow-[0_0_12px_rgba(243,217,139,0.7)]"
            style={{ left: `${16 + i * 22}%`, top: "18%" }}
          />
        ))}

        <PixelSushiBelt />
        <div className="absolute bottom-0 h-[24%] w-full bg-[#3B2619]" />
      </div>
    );
  }

  if (type === "movie") {
    return (
      <div className={`${base} bg-[#05070B]`}>
        <div className="absolute left-[8%] right-[8%] top-[10%] h-[46%] border-4 border-gray-700 bg-black shadow-[0_0_40px_rgba(255,255,255,0.06)]">
          <div className="flex h-full items-center justify-center font-mono text-[10px] text-gray-600">
            NOW PLAYING
          </div>
        </div>

        <div className="absolute left-0 top-[10%] h-[46%] w-[6%] bg-[#3B0F1A]" />
        <div className="absolute right-0 top-[10%] h-[46%] w-[6%] bg-[#3B0F1A]" />

        <div className="absolute bottom-0 h-[28%] w-full bg-[#15191F]">
          <PixelCinemaSeats />
        </div>

        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-[6%] h-1 w-1 rounded-full bg-[#F3D98B]/70"
            style={{ left: `${10 + i * 15}%` }}
          />
        ))}
      </div>
    );
  }

  return <div className={`${base} bg-[#080A0D]`} />;
}
