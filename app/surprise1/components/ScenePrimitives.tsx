/* =========================================================
   SCENE PRIMITIVES

   Small reusable pixel-art building blocks. Each memory scene
   below is composed from these — foreground, midground, and
   background — instead of one bespoke blob of divs per scene.
========================================================= */

export function PixelStars({
  count = 40,
  spread = 70,
}: {
  count?: number;
  spread?: number;
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute h-[3px] w-[3px] bg-white"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 19) % spread}%`,
            animation: `ourjourney-twinkle ${2 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.4}s`,
          }}
        />
      ))}
    </>
  );
}

export function PixelMoon({
  left = 78,
  top = 10,
}: {
  left?: number;
  top?: number;
}) {
  return (
    <div
      className="absolute h-9 w-9 rounded-full bg-[#F3EAC2] shadow-[0_0_28px_rgba(243,234,194,0.5)]"
      style={{ left: `${left}%`, top: `${top}%` }}
    />
  );
}

export function PixelMountain({
  left,
  width,
  height,
  color,
}: {
  left: number;
  width: number;
  height: number;
  color: string;
}) {
  return (
    <div
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        width: `${width}%`,
        height: `${height}%`,
        background: color,
        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
      }}
    />
  );
}

export function PixelCloud({
  left,
  top,
  width = 60,
  color = "#ffffff",
  opacity = 0.8,
}: {
  left: number;
  top: number;
  width?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <div
      className="absolute"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width,
        opacity,
        animation: "ourjourney-drift 14s ease-in-out infinite alternate",
      }}
    >
      <div className="h-3 w-full rounded-full" style={{ background: color }} />
      <div
        className="-mt-2 ml-2 h-4 w-2/3 rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

export function PixelSnowfall({ count = 30 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/90"
          style={{
            left: `${(i * 23) % 100}%`,
            animation: `ourjourney-fall ${5 + (i % 5)}s linear infinite`,
            animationDelay: `${(i % 10) * 0.6}s`,
          }}
        />
      ))}
    </>
  );
}

export function PixelSnowGround() {
  return (
    <>
      <div className="absolute bottom-0 h-[36%] w-full bg-white" />
      <div className="absolute bottom-[28%] left-[-5%] h-8 w-[45%] rounded-t-[50%] bg-white/90" />
      <div className="absolute bottom-[30%] right-[-5%] h-10 w-[55%] rounded-t-[50%] bg-white/90" />
    </>
  );
}

export function PixelPineTree({
  left,
  height = 60,
  color = "#1F4D2B",
}: {
  left: number;
  height?: number;
  color?: string;
}) {
  return (
    <div
      className="absolute bottom-[26%]"
      style={{ left: `${left}%`, width: height * 0.6, height }}
    >
      <div
        className="h-full w-full"
        style={{
          background: color,
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
        }}
      />
      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 bg-[#5B3925]" />
    </div>
  );
}

export function PixelFootprints({ left = 30 }: { left?: number }) {
  return (
    <div
      className="absolute bottom-[10%] flex gap-4"
      style={{ left: `${left}%` }}
    >
      <div className="h-2 w-1.5 rounded-full bg-black/20" />
      <div className="mt-3 h-2 w-1.5 rounded-full bg-black/20" />
      <div className="h-2 w-1.5 rounded-full bg-black/20" />
    </div>
  );
}

export function PixelBuilding({
  left,
  width,
  height,
  color,
  windowColor = "#F3D98B",
  rows = 3,
  cols = 3,
}: {
  left: number;
  width: number;
  height: number;
  color: string;
  windowColor?: string;
  rows?: number;
  cols?: number;
}) {
  return (
    <div
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        width: `${width}%`,
        height: `${height}%`,
        background: color,
      }}
    >
      <div
        className="grid h-full w-full gap-[10%] p-[10%]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div
            key={i}
            style={{
              background: (i * 7) % 3 === 0 ? "transparent" : windowColor,
              animation:
                (i * 7) % 5 === 0
                  ? "ourjourney-flicker 6s steps(1) infinite"
                  : undefined,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function PixelLampPost({ left }: { left: number }) {
  return (
    <div
      className="absolute bottom-[22%] flex flex-col items-center"
      style={{ left: `${left}%` }}
    >
      <div
        className="h-3 w-3 rounded-full bg-[#F3D98B] shadow-[0_0_16px_rgba(243,217,139,0.9)]"
        style={{ animation: "ourjourney-flicker 5s steps(1) infinite" }}
      />
      <div className="h-14 w-1 bg-[#1B1B1B]" />
      <div className="h-1 w-6 bg-[#1B1B1B]" />
    </div>
  );
}

export function PixelWater({ color = "#2F5D73" }: { color?: string }) {
  return (
    <div
      className="absolute bottom-0 h-[24%] w-full overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${color} 0%, #0E2430 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(100deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 2px, transparent 2px, transparent 40px)",
          backgroundSize: "200% 100%",
          animation: "ourjourney-shimmer 6s linear infinite",
        }}
      />
    </div>
  );
}

export function PixelBridge({
  left = 30,
  width = 40,
}: {
  left?: number;
  width?: number;
}) {
  return (
    <div
      className="absolute bottom-[20%]"
      style={{ left: `${left}%`, width: `${width}%` }}
    >
      <div className="h-2 w-full rounded-t-full border-2 border-[#1B1B1B] bg-[#8B6B4A]" />
      <div className="flex justify-between px-1">
        <div className="h-6 w-1 bg-[#1B1B1B]" />
        <div className="h-6 w-1 bg-[#1B1B1B]" />
      </div>
    </div>
  );
}

export function PixelColumn({ left }: { left: number }) {
  return (
    <div
      className="absolute bottom-[18%] flex flex-col items-center"
      style={{ left: `${left}%` }}
    >
      <div className="h-2 w-8 bg-[#D9C6A3]" />
      <div className="h-24 w-4 bg-[#C9B48C]" />
      <div className="h-2 w-8 bg-[#D9C6A3]" />
    </div>
  );
}

export function PixelMarketStall({
  left,
  width = 16,
  color = "#B23B3B",
}: {
  left: number;
  width?: number;
  color?: string;
}) {
  return (
    <div
      className="absolute bottom-[26%]"
      style={{ left: `${left}%`, width: `${width}%` }}
    >
      <div
        className="h-3 w-full"
        style={{
          background: color,
          clipPath: "polygon(0 100%, 8% 0, 92% 0, 100% 100%)",
        }}
      />
      <div className="h-9 w-full border-2 border-[#3B2619] bg-[#5B3A28]" />
    </div>
  );
}

export function PixelTable({
  left,
  width = 16,
}: {
  left: number;
  width?: number;
}) {
  return (
    <div
      className="absolute bottom-[22%]"
      style={{ left: `${left}%`, width: `${width}%` }}
    >
      <div className="h-1.5 w-full bg-[#5B3A28]" />
      <div className="mx-auto h-6 w-1.5 bg-[#3B2619]" />
    </div>
  );
}

export function PixelChair({ left }: { left: number }) {
  return (
    <div
      className="absolute bottom-[20%]"
      style={{ left: `${left}%` }}
    >
      <div className="h-4 w-3 border-2 border-[#3B2619] bg-[#5B3A28]" />
    </div>
  );
}

export function PixelSign({
  left,
  text,
  color = "#E0BD72",
}: {
  left: number;
  text: string;
  color?: string;
}) {
  return (
    <div
      className="absolute top-[12%] -translate-x-1/2 whitespace-nowrap border-2 border-black px-2 py-1 font-mono text-[7px] font-bold text-black shadow-[2px_2px_0_#000]"
      style={{ left: `${left}%`, background: color }}
    >
      {text}
    </div>
  );
}

export function PixelArcadeCabinet({ left = 50 }: { left?: number }) {
  return (
    <div
      className="absolute bottom-[16%] -translate-x-1/2 border-4 border-gray-700 bg-[#0B0F16]"
      style={{ left: `${left}%`, width: "34%", height: "46%" }}
    >
      <div className="m-[10%] h-[55%] border-2 border-cyan-400 bg-[#07111D] shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
      <div className="mx-auto mt-1 flex w-1/2 justify-between">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <div className="h-2 w-2 rounded-full bg-yellow-400" />
      </div>
    </div>
  );
}

export function PixelCinemaSeats() {
  return (
    <div className="absolute bottom-0 flex w-full justify-center gap-1 px-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="h-6 w-5 rounded-t-md border-2 border-black bg-[#5B1F2B]"
        />
      ))}
    </div>
  );
}

export function PixelSushiBelt() {
  return (
    <div className="absolute bottom-[24%] h-9 w-full overflow-hidden border-y-4 border-[#6B442D] bg-[#3B2619]">
      <div
        className="absolute inset-0 flex items-center gap-6"
        style={{ animation: "ourjourney-conveyor 3s linear infinite" }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-5 shrink-0 rounded-full border-2 border-red-300 bg-red-500"
          />
        ))}
      </div>
    </div>
  );
}

export function PixelTrainWindows() {
  return (
    <div className="absolute left-[6%] right-[6%] top-[8%] flex justify-between gap-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-24 flex-1 overflow-hidden border-4 border-gray-700 bg-gradient-to-b from-[#172554] to-[#020617]"
        >
          <div
            className="h-full w-[220%]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0 40px, rgba(224,189,114,0.5) 40px 42px)",
              animation: "ourjourney-conveyor 4s linear infinite",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function PixelFerrisWheel({
  left = 78,
  top = 12,
}: {
  left?: number;
  top?: number;
}) {
  return (
    <div
      className="absolute rounded-full border-4 border-[#E0BD72]"
      style={{ left: `${left}%`, top: `${top}%`, width: 90, height: 90 }}
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * 44;
        const y = 50 + Math.sin(angle) * 44;
        return (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#F3D98B]"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        );
      })}
    </div>
  );
}
