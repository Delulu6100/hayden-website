"use client";

import { useEffect, useState, useRef } from "react";

type DialogueLine = {
  speaker: string;
  text: string;
};

type SceneType =
  | "aurora"
  | "snowball"
  | "snowman"
  | "bumpercars"
  | "coat"
  | "powerbank"
  | "confession"
  | "borough"
  | "gaming"
  | "flowers"
  | "bigben"
  | "sushi"
  | "movie";

type Memory = {
  title: string;
  emoji: string;
  description: string[];
  scene?: {
    title: string;
    subtitle?: string;
    emoji: string;
    type: SceneType;
    lines: DialogueLine[];
  };
};

type Location = {
  name: string;
  country: string;
  emoji: string;
  memories: Memory[];
  x: number;
  y: number;
};

/* =========================================================
   MEMORIES

<<<<<<< HEAD
   Real memories, unchanged. Presentation around them is what
=======
   Real memories, unchanged. Presentation around them is what
>>>>>>> 693c213533d236b03785badd7b5672015affc406
   this pass improves — not the words themselves.
========================================================= */

const locations: Location[] = [
  {
    name: "Iceland",
    country: "Iceland",
    emoji: "🇮🇸",
    x: 16,
    y: 16,
    memories: [
      {
        title: "The Aurora Photo",
        emoji: "🌌",
        description: [
          "It was nighttime in Iceland.",
          "The aurora was in the background.",
          "I asked for a photo because I wanted a picture with you.",
          "Then we somehow decided that pointing our phones at each other like pistols was the correct pose.",
        ],
        scene: {
          title: "ICELAND",
          subtitle: "The northern lights",
          emoji: "🌌",
          type: "aurora",
          lines: [
            { speaker: "NARRATOR", text: "It was cold. Really cold." },
            { speaker: "NARRATOR", text: "But the sky looked incredible." },
            { speaker: "HAYDEN", text: "Wait..." },
            { speaker: "HAYDEN", text: "Can we take a photo?" },
            { speaker: "KELLY", text: "A photo of what?" },
            { speaker: "HAYDEN", text: "Us." },
            { speaker: "NARRATOR", text: "So we took out our phones." },
            {
              speaker: "NARRATOR",
              text: "And somehow turned them into imaginary pistols.",
            },
            { speaker: "KELLY", text: "🔫" },
            { speaker: "HAYDEN", text: "🔫" },
            {
              speaker: "NARRATOR",
              text: "Behind us, the aurora filled the sky.",
            },
          ],
        },
      },

      {
        title: "The Snowball Attack",
        emoji: "❄️",
        description: [
          "Another day in Iceland.",
          "You threw a snowball directly at my face.",
          "I was completely stunned.",
          "Somehow this became one of those jokes we still bring up from time to time.",
        ],
        scene: {
          title: "ICELAND",
          subtitle: "The attack",
          emoji: "❄️",
          type: "snowball",
          lines: [
            { speaker: "NARRATOR", text: "Another day." },
            { speaker: "NARRATOR", text: "More snow." },
            { speaker: "KELLY", text: "Hey Hayden." },
            { speaker: "HAYDEN", text: "Yeah?" },
            { speaker: "NARRATOR", text: "Kelly picked up a snowball." },
            { speaker: "HAYDEN", text: "Don't." },
            { speaker: "KELLY", text: "🙂" },
            { speaker: "NARRATOR", text: "She threw it." },
            {
              speaker: "NARRATOR",
              text: "Directly at Hayden's face.",
            },
            { speaker: "HAYDEN", text: "..." },
            { speaker: "HAYDEN", text: "I was stunned." },
            {
              speaker: "NARRATOR",
              text: "And somehow, we still talk about this.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Norway",
    country: "Norway",
    emoji: "🇳🇴",
    x: 29,
    y: 25,
    memories: [
      {
        title: "The First Snowman",
        emoji: "☃️",
        description: [
          "You built your first snowman.",
          "It wasn't my first snowman.",
          "But I got to build it with you.",
        ],
        scene: {
          title: "NORWAY",
          subtitle: "A snowy day",
          emoji: "☃️",
          type: "snowman",
          lines: [
            { speaker: "NARRATOR", text: "There was snow everywhere." },
            {
              speaker: "KELLY",
              text: "I've never built a snowman before.",
            },
            {
              speaker: "HAYDEN",
              text: "Then let's build one.",
            },
            {
              speaker: "NARRATOR",
              text: "You started rolling the snow.",
            },
            { speaker: "KELLY", text: "Is this big enough?" },
            { speaker: "HAYDEN", text: "Bigger." },
            {
              speaker: "NARRATOR",
              text: "Piece by piece, it started taking shape.",
            },
            { speaker: "KELLY", text: "We actually made one." },
            { speaker: "NARRATOR", text: "Your first snowman." },
            {
              speaker: "NARRATOR",
              text: "And I got to build it with you.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Denmark",
    country: "Denmark",
    emoji: "🇩🇰",
    x: 40,
    y: 36,
    memories: [
      {
        title: "The Bumper Cars",
        emoji: "🎡",
        description: [
          "We went to a carnival with the group.",
          "You chose to sit in my bumper car.",
          "I drove.",
          "Things got chaotic.",
        ],
        scene: {
          title: "DENMARK",
          subtitle: "Carnival",
          emoji: "🎡",
          type: "bumpercars",
          lines: [
            {
              speaker: "NARRATOR",
              text: "The group went to a carnival.",
            },
            {
              speaker: "NARRATOR",
              text: "There were rides everywhere.",
            },
            {
              speaker: "KELLY",
              text: "I'm sitting in your car.",
            },
            {
              speaker: "HAYDEN",
              text: "You're trusting me with this?",
            },
            { speaker: "KELLY", text: "Yes." },
            {
              speaker: "NARRATOR",
              text: "Hayden became the driver.",
            },
            { speaker: "HAYDEN", text: "Alright. Let's go." },
            {
              speaker: "NARRATOR",
              text: "The car immediately went somewhere it probably shouldn't have.",
            },
            {
              speaker: "KELLY",
              text: "WHY ARE WE GOING THAT WAY?",
            },
            { speaker: "HAYDEN", text: "I'M DRIVING." },
            {
              speaker: "NARRATOR",
              text: "Bumper car driving: questionable.",
            },
            {
              speaker: "NARRATOR",
              text: "Memory: excellent.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Czechia",
    country: "Czech Republic",
    emoji: "🇨🇿",
    x: 47,
    y: 48,
    memories: [
      {
        title: "Another Stop",
        emoji: "🗺️",
        description: [
          "Not every place needs a dramatic story.",
          "It was another country.",
          "Another stop.",
          "Another part of the journey.",
        ],
      },
    ],
  },

  {
    name: "Budapest",
    country: "Hungary",
    emoji: "🇭🇺",
    x: 53,
    y: 59,
    memories: [
      {
        title: "Budapest",
        emoji: "🏙️",
        description: [
          "Budapest.",
          "Another stop during exchange.",
          "Another place that became part of the story.",
        ],
      },
    ],
  },

  {
    name: "Italy",
    country: "Italy",
    emoji: "🇮🇹",
    x: 59,
    y: 70,
    memories: [
      {
        title: "The Coat — Venice",
        emoji: "🧥",
        description: [
          "It was cold in Venice.",
          "I went back to the hostel to get your coat.",
          "I just didn't want you to be cold.",
        ],
        scene: {
          title: "VENICE",
          subtitle: "A small thing",
          emoji: "🧥",
          type: "coat",
          lines: [
            { speaker: "NARRATOR", text: "Venice was beautiful." },
            {
              speaker: "NARRATOR",
              text: "But it was getting cold.",
            },
            { speaker: "HAYDEN", text: "You're cold." },
            { speaker: "KELLY", text: "A little." },
            { speaker: "HAYDEN", text: "Wait here." },
            {
              speaker: "NARRATOR",
              text: "Hayden went back to the hostel.",
            },
            {
              speaker: "NARRATOR",
              text: "Just to get your coat.",
            },
            { speaker: "HAYDEN", text: "Here." },
            { speaker: "KELLY", text: "Thank you." },
            {
              speaker: "NARRATOR",
              text: "Sometimes caring about someone is as simple as making sure they're warm.",
            },
          ],
        },
      },

      {
        title: "The Power Bank — Rome",
        emoji: "🔋",
        description: [
          "In Rome, another friend's bag had been stolen.",
          "You were waiting for them.",
          "I rushed back to find you.",
          "Then I gave you my power bank.",
        ],
        scene: {
          title: "ROME",
          subtitle: "Don't let your phone die",
          emoji: "🔋",
          type: "powerbank",
          lines: [
            { speaker: "NARRATOR", text: "Rome." },
            {
              speaker: "NARRATOR",
              text: "Something unexpected happened.",
            },
            {
              speaker: "NARRATOR",
              text: "Another friend's bag had been stolen.",
            },
            {
              speaker: "KELLY",
              text: "I'm waiting for them.",
            },
            {
              speaker: "NARRATOR",
              text: "So Hayden rushed back to find you.",
            },
            { speaker: "HAYDEN", text: "Here." },
            { speaker: "KELLY", text: "What's this?" },
            { speaker: "HAYDEN", text: "My power bank." },
            { speaker: "HAYDEN", text: "You'll need it." },
            { speaker: "NARRATOR", text: "A small thing." },
            {
              speaker: "NARRATOR",
              text: "But I wanted to make sure you were okay.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "London",
    country: "United Kingdom",
    emoji: "🇬🇧",
    x: 69,
    y: 80,
    memories: [
      {
        title: "The Confession",
        emoji: "❤️",
        description: [
          "May 20, 2026.",
          "On a train from Coventry to London.",
          "I was incredibly nervous.",
          "I scratched my hand while trying to figure out how to say it.",
          "And then I asked.",
        ],
        scene: {
          title: "MAY 20, 2026",
          subtitle: "Coventry → London",
          emoji: "🚆",
          type: "confession",
          lines: [
            {
              speaker: "NARRATOR",
              text: "The train was heading towards London.",
            },
            {
              speaker: "NARRATOR",
              text: "Everything looked normal.",
            },
            {
              speaker: "NARRATOR",
              text: "Except Hayden was extremely nervous.",
            },
            {
              speaker: "NARRATOR",
              text: "He kept scratching his hand.",
            },
            { speaker: "KELLY", text: "Are you okay?" },
            { speaker: "HAYDEN", text: "Yeah..." },
            { speaker: "NARRATOR", text: "He wasn't." },
            { speaker: "HAYDEN", text: "Kelly..." },
            { speaker: "KELLY", text: "Yeah?" },
            {
              speaker: "HAYDEN",
              text: "Can you be my boyfriend?",
            },
            { speaker: "NARRATOR", text: "..." },
            { speaker: "KELLY", text: "HAHAHAHA" },
            { speaker: "HAYDEN", text: "WAIT—" },
            { speaker: "KELLY", text: "Yes." },
            {
              speaker: "NARRATOR",
              text: "And just like that, everything changed.",
            },
          ],
        },
      },

      {
        title: "Borough Market",
        emoji: "🍓",
        description: [
          "We went to Borough Market.",
          "Fish and chips.",
          "Strawberry chocolate.",
          "And the special crème brûlée donut.",
          "It was somewhere you had wanted to visit for a while.",
        ],
        scene: {
          title: "LONDON",
          subtitle: "Borough Market",
          emoji: "🍓",
          type: "borough",
          lines: [
            {
              speaker: "NARRATOR",
              text: "First stop: Borough Market.",
            },
            {
              speaker: "KELLY",
              text: "I've wanted to come here for ages.",
            },
            {
              speaker: "HAYDEN",
              text: "Then today we're coming here.",
            },
            { speaker: "NARRATOR", text: "Fish and chips." },
            { speaker: "NARRATOR", text: "Strawberry chocolate." },
            {
              speaker: "NARRATOR",
              text: "And the special crème brûlée donut.",
            },
            {
              speaker: "HAYDEN",
              text: "This is actually really good.",
            },
            { speaker: "KELLY", text: "Told you." },
          ],
        },
      },

      {
        title: "Crazy Taxi",
        emoji: "🎮",
        description: [
          "We went to the Science Museum.",
          "There was a special video game exhibit.",
          "You played Crazy Taxi.",
          "Your driving skills were... questionable.",
          "You crashed a lot.",
        ],
        scene: {
          title: "SCIENCE MUSEUM",
          subtitle: "Video game exhibit",
          emoji: "🎮",
          type: "gaming",
          lines: [
            {
              speaker: "NARRATOR",
              text: "Then we went to the Science Museum.",
            },
            {
              speaker: "NARRATOR",
              text: "There was a special video game exhibition.",
            },
            { speaker: "HAYDEN", text: "YES. GAMES." },
            {
              speaker: "KELLY",
              text: "I'm going to try this one.",
            },
            {
              speaker: "NARRATOR",
              text: "Kelly chose Crazy Taxi.",
            },
            { speaker: "NARRATOR", text: "The driving began." },
            { speaker: "NARRATOR", text: "CRASH." },
            { speaker: "KELLY", text: "Oops." },
            { speaker: "NARRATOR", text: "Another crash." },
            {
              speaker: "HAYDEN",
              text: "Your driving is terrible.",
            },
            { speaker: "KELLY", text: "I KNOW." },
          ],
        },
      },

      {
        title: "The Flowers",
        emoji: "🌹",
        description: [
          "We went to Flat Iron.",
          "The steak was great.",
          "During the meal, I went outside.",
          "I came back with flowers.",
        ],
        scene: {
          title: "FLAT IRON",
          subtitle: "A little surprise",
          emoji: "🌹",
          type: "flowers",
          lines: [
            { speaker: "NARRATOR", text: "We went to Flat Iron." },
            { speaker: "NARRATOR", text: "The steak was great." },
            { speaker: "HAYDEN", text: "I'll be back in a minute." },
            { speaker: "KELLY", text: "Where are you going?" },
            { speaker: "HAYDEN", text: "You'll see." },
            { speaker: "NARRATOR", text: "Hayden went outside." },
            {
              speaker: "NARRATOR",
              text: "A few minutes later...",
            },
            { speaker: "HAYDEN", text: "Here." },
            { speaker: "KELLY", text: "Flowers?" },
            { speaker: "HAYDEN", text: "For you." },
          ],
        },
      },

      {
        title: "Big Ben & London Eye",
        emoji: "🎡",
        description: [
          "After dinner we went to see Big Ben and the London Eye.",
          "You hadn't been there before.",
          "So we got to see them together.",
        ],
        scene: {
          title: "LONDON",
          subtitle: "The night continues",
          emoji: "🎡",
          type: "bigben",
          lines: [
            { speaker: "NARRATOR", text: "The day wasn't over yet." },
            { speaker: "NARRATOR", text: "We went to see Big Ben." },
            {
              speaker: "KELLY",
              text: "I've never been here before.",
            },
            {
              speaker: "HAYDEN",
              text: "Then I'm glad I get to see it with you.",
            },
            {
              speaker: "NARRATOR",
              text: "Then we walked towards the London Eye.",
            },
            { speaker: "NARRATOR", text: "A long day." },
            { speaker: "NARRATOR", text: "A lot of memories." },
            {
              speaker: "NARRATOR",
              text: "And the beginning of something even bigger.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Hong Kong",
    country: "Hong Kong",
    emoji: "🇭🇰",
    x: 82,
    y: 89,
    memories: [
      {
        title: "Sushiro",
        emoji: "🍣",
        description: [
          "After coming back from Warwick, we missed sushi.",
          "So naturally, we went to Sushiro.",
        ],
        scene: {
          title: "HONG KONG",
          subtitle: "Sushiro",
          emoji: "🍣",
          type: "sushi",
          lines: [
            { speaker: "NARRATOR", text: "Back in Hong Kong." },
            {
              speaker: "NARRATOR",
              text: "After exchange, there was something we both missed.",
            },
            { speaker: "KELLY", text: "Sushi." },
            { speaker: "HAYDEN", text: "Sushi." },
            { speaker: "NARRATOR", text: "So we went to Sushiro." },
            {
              speaker: "NARRATOR",
              text: "Sometimes the simplest dates are the best ones.",
            },
          ],
        },
      },

      {
        title: "Movie Dates",
        emoji: "🎬",
        description: [
          "We watched 給阿嬤的情書.",
          "And on another date, Obsession.",
          "Different movies.",
          "Different days.",
          "More memories.",
        ],
        scene: {
          title: "HONG KONG",
          subtitle: "Movie night",
          emoji: "🎬",
          type: "movie",
          lines: [
            { speaker: "NARRATOR", text: "Another day." },
            { speaker: "NARRATOR", text: "Another movie." },
            {
              speaker: "NARRATOR",
              text: "We watched 給阿嬤的情書.",
            },
            {
              speaker: "NARRATOR",
              text: "Another time, we watched Obsession.",
            },
            {
              speaker: "KELLY",
              text: "What should we watch next?",
            },
            {
              speaker: "HAYDEN",
              text: "We'll figure it out.",
            },
            {
              speaker: "NARRATOR",
              text: "And there will probably be another memory.",
            },
          ],
        },
      },
    ],
  },
];

/* =========================================================
   WEB AUDIO API SYNTHESIZER

   Zero external asset dependencies. Generates retro chimes
   and celebratory melodies natively in the browser.
========================================================= */

function playUiSound() {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Audio context not allowed or supported yet.
  }
}

function playCompleteSound() {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.25);
    });
  } catch {
    // Fallback if audio restricted.
  }
}

function playFanfare() {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const melody = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 659.25, t: 0.15, d: 0.15 },
      { f: 783.99, t: 0.3, d: 0.15 },
      { f: 1046.50, t: 0.45, d: 0.4 },
      { f: 783.99, t: 0.9, d: 0.15 },
      { f: 1046.50, t: 1.05, d: 0.6 },
    ];

    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(note.f, ctx.currentTime + note.t);
      gain.gain.setValueAtTime(0.06, ctx.currentTime + note.t);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.t + note.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + note.t);
      osc.stop(ctx.currentTime + note.t + note.d);
    });
  } catch {
    // Fallback if audio restricted.
  }
}

/* =========================================================
   SAVE / LOAD PROGRESS
========================================================= */

const SAVE_KEY = "our-journey-save-v1";

type SaveData = {
  started: boolean;
  completedMemories: string[];
  locationIndex: number;
  showFinal: boolean;
};

function loadSave(): SaveData | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof parsed.started !== "boolean" ||
      !Array.isArray(parsed.completedMemories) ||
      typeof parsed.locationIndex !== "number"
    ) {
      return null;
    }

    const safeLocationIndex = Math.min(
      Math.max(parsed.locationIndex, 0),
      locations.length - 1
    );

    return {
      started: parsed.started,
      completedMemories: parsed.completedMemories.filter(
        (title: unknown): title is string => typeof title === "string"
      ),
      locationIndex: safeLocationIndex,
      showFinal: Boolean(parsed.showFinal),
    };
  } catch {
    return null;
  }
}

function writeSave(data: SaveData) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    // Storage unavailable
  }
}

/* =========================================================
   SHARED KEYFRAMES
========================================================= */

function GameKeyframes() {
  return (
    <style>{`
      @keyframes ourjourney-dash { to { stroke-dashoffset: -40; } }
      @keyframes ourjourney-fall {
        0% { transform: translateY(-10%) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        100% { transform: translateY(112vh) rotate(25deg); opacity: 0.9; }
      }
      @keyframes ourjourney-heart-pop {
        0% { transform: scale(0) translateY(0); opacity: 0; }
        25% { transform: scale(1.3) translateY(-14px); opacity: 1; }
        100% { transform: scale(0.9) translateY(-90px); opacity: 0; }
      }
      @keyframes ourjourney-glow-pulse {
        0%, 100% { opacity: 0.35; }
        50% { opacity: 0.85; }
      }
      @keyframes ourjourney-shimmer {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }
      @keyframes ourjourney-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      @keyframes ourjourney-twinkle {
        0%, 100% { opacity: 0.25; }
        50% { opacity: 1; }
      }
      @keyframes ourjourney-drift {
        0% { transform: translateX(0); }
        100% { transform: translateX(30px); }
      }
      @keyframes ourjourney-conveyor {
        0% { transform: translateX(0); }
        100% { transform: translateX(-64px); }
      }
      @keyframes ourjourney-flicker {
        0%, 19%, 21%, 100% { opacity: 1; }
        20% { opacity: 0.4; }
      }
      @keyframes ourjourney-sway {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
      }
    `}</style>
  );
}

/* =========================================================
   SPRITE ASSETS
========================================================= */

function SpriteImage({
  src,
  alt = "",
  className,
  onError,
}: {
  src: string;
  alt?: string;
  className?: string;
  onError: () => void;
}) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      onError={onError}
      className={className}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

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

function MapDecorations() {
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

/* =========================================================
   PLAYER
========================================================= */

function PixelPlayer({
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

/* =========================================================
   SCENE PRIMITIVES

   Small reusable pixel-art building blocks. Each memory scene
   below is composed from these — foreground, midground, and
   background — instead of one bespoke blob of divs per scene.
========================================================= */

function PixelStars({ count = 40, spread = 70 }: { count?: number; spread?: number }) {
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

function PixelMoon({ left = 78, top = 10 }: { left?: number; top?: number }) {
  return (
    <div
      className="absolute h-9 w-9 rounded-full bg-[#F3EAC2] shadow-[0_0_28px_rgba(243,234,194,0.5)]"
      style={{ left: `${left}%`, top: `${top}%` }}
    />
  );
}

function PixelMountain({
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

function PixelCloud({
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

function PixelSnowfall({ count = 30 }: { count?: number }) {
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

function PixelSnowGround() {
  return (
    <>
      <div className="absolute bottom-0 h-[36%] w-full bg-white" />
      <div className="absolute bottom-[28%] left-[-5%] h-8 w-[45%] rounded-t-[50%] bg-white/90" />
      <div className="absolute bottom-[30%] right-[-5%] h-10 w-[55%] rounded-t-[50%] bg-white/90" />
    </>
  );
}

function PixelPineTree({
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

function PixelFootprints({ left = 30 }: { left?: number }) {
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

function PixelBuilding({
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

function PixelLampPost({ left }: { left: number }) {
  return (
    <div className="absolute bottom-[22%] flex flex-col items-center" style={{ left: `${left}%` }}>
      <div
        className="h-3 w-3 rounded-full bg-[#F3D98B] shadow-[0_0_16px_rgba(243,217,139,0.9)]"
        style={{ animation: "ourjourney-flicker 5s steps(1) infinite" }}
      />
      <div className="h-14 w-1 bg-[#1B1B1B]" />
      <div className="h-1 w-6 bg-[#1B1B1B]" />
    </div>
  );
}

function PixelWater({ color = "#2F5D73" }: { color?: string }) {
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

function PixelBridge({ left = 30, width = 40 }: { left?: number; width?: number }) {
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

function PixelColumn({ left }: { left: number }) {
  return (
    <div className="absolute bottom-[18%] flex flex-col items-center" style={{ left: `${left}%` }}>
      <div className="h-2 w-8 bg-[#D9C6A3]" />
      <div className="h-24 w-4 bg-[#C9B48C]" />
      <div className="h-2 w-8 bg-[#D9C6A3]" />
    </div>
  );
}

function PixelMarketStall({
  left,
  width = 16,
  color = "#B23B3B",
}: {
  left: number;
  width?: number;
  color?: string;
}) {
  return (
    <div className="absolute bottom-[26%]" style={{ left: `${left}%`, width: `${width}%` }}>
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

function PixelTable({ left, width = 16 }: { left: number; width?: number }) {
  return (
    <div className="absolute bottom-[22%]" style={{ left: `${left}%`, width: `${width}%` }}>
      <div className="h-1.5 w-full bg-[#5B3A28]" />
      <div className="mx-auto h-6 w-1.5 bg-[#3B2619]" />
    </div>
  );
}

function PixelChair({ left }: { left: number }) {
  return (
    <div className="absolute bottom-[20%]" style={{ left: `${left}%` }}>
      <div className="h-4 w-3 border-2 border-[#3B2619] bg-[#5B3A28]" />
    </div>
  );
}

function PixelSign({
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

function PixelArcadeCabinet({ left = 50 }: { left?: number }) {
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

function PixelCinemaSeats() {
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

function PixelSushiBelt() {
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

function PixelTrainWindows() {
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

function PixelFerrisWheel({ left = 78, top = 12 }: { left?: number; top?: number }) {
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

/* =========================================================
   SCENE BACKGROUND
========================================================= */

function SceneBackground({ type }: { type: SceneType }) {
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

function PixelCharacters({
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

/* =========================================================
   MEMORY JOURNAL
========================================================= */

function JournalOverlay({
  completedMemories,
  onClose,
  onOpenMemory,
}: {
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

/* =========================================================
   GAME
========================================================= */

export default function Surprise() {
  const [started, setStarted] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [locationIndex, setLocationIndex] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [sceneMemory, setSceneMemory] = useState<Memory | null>(null);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [showJournal, setShowJournal] = useState(false);

  const [playerX, setPlayerX] = useState(22);
  const [playerY, setPlayerY] = useState(33);
  const [playerDirection, setPlayerDirection] = useState<"left" | "right">("right");

  const [traveling, setTraveling] = useState(false);
  const [travelText, setTravelText] = useState("");
  const [completedMemories, setCompletedMemories] = useState<string[]>([]);
  const [showFinal, setShowFinal] = useState(false);

  const totalMemories = locations.reduce(
    (total, location) => total + location.memories.length,
    0
  );

  const progress = Math.round(
    (completedMemories.length / totalMemories) * 100
  );

  /* Load save */
  useEffect(() => {
    const save = loadSave();
    if (save) {
      setStarted(save.started);
      setCompletedMemories(save.completedMemories);
      setLocationIndex(save.locationIndex);
      setShowFinal(save.showFinal);

      const destination = locations[save.locationIndex];
      setPlayerX(destination.x);
      setPlayerY(destination.y);
    }
    setHydrated(true);
  }, []);

  /* Write save */
  useEffect(() => {
    if (!hydrated) return;
    writeSave({
      started,
      completedMemories,
      locationIndex,
      showFinal,
    });
  }, [hydrated, started, completedMemories, locationIndex, showFinal]);

  /* Scroll reset */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [showMap, locationIndex, selectedMemory, sceneMemory, showFinal]);

  /* Dialogue Typewriter */
  useEffect(() => {
    const text = sceneMemory?.scene?.lines[dialogueIndex]?.text ?? "";
    setTypedCount(0);
    if (!text) return;

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTypedCount(i);
      if (i >= text.length) {
        window.clearInterval(id);
      }
    }, 18);

    return () => window.clearInterval(id);
  }, [sceneMemory, dialogueIndex]);

  /* Travel */
  const travelToLocation = (index: number) => {
    if (traveling) return;
    const destination = locations[index];
    if (index === locationIndex && !showMap) return;

    playUiSound();
    setTraveling(true);
    setTravelText(`TRAVELLING TO ${destination.name.toUpperCase()}`);

    const startX = playerX;
    const startY = playerY;
    const endX = destination.x;
    const endY = destination.y;

    const duration = 1100;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const nextX = startX + (endX - startX) * eased;
      const nextY = startY + (endY - startY) * eased;

      setPlayerX(nextX);
      setPlayerY(nextY);

      if (endX < startX) {
        setPlayerDirection("left");
      } else {
        setPlayerDirection("right");
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
        return;
      }

      setPlayerX(endX);
      setPlayerY(endY);

      setTimeout(() => {
        setTravelText(`ARRIVED AT ${destination.name.toUpperCase()}`);
      }, 50);

      setTimeout(() => {
        setTraveling(false);
        setTravelText("");
        setLocationIndex(index);
        setSelectedMemory(null);
        setSceneMemory(null);
        setDialogueIndex(0);
        setShowMap(false);
      }, 450);
    };

    requestAnimationFrame(animate);
  };

  /* Memory Completion */
  const finishMemory = (memory: Memory) => {
    playCompleteSound();
    setCompletedMemories((previous) => {
      if (previous.includes(memory.title)) return previous;
      return [...previous, memory.title];
    });

    setSceneMemory(null);
    setDialogueIndex(0);
    setShowMap(false);
  };

  const openMemoryFromJournal = (locationIdx: number, memory: Memory) => {
    setShowJournal(false);
    setShowMap(false);
    setLocationIndex(locationIdx);
    setSelectedMemory(memory);
  };

  const resetProgress = () => {
    const confirmed = window.confirm(
      "Reset all progress? This clears every completed memory and can't be undone."
    );
    if (!confirmed) return;

    try {
      window.localStorage.removeItem(SAVE_KEY);
    } catch {
      // Ignore
    }

    setCompletedMemories([]);
    setLocationIndex(0);
    setShowFinal(false);
    setSelectedMemory(null);
    setSceneMemory(null);
    setDialogueIndex(0);
    setPlayerX(22);
    setPlayerY(33);
    setShowMap(true);
    setShowJournal(false);
  };

  /* Final chapter trigger */
  useEffect(() => {
    if (completedMemories.length === totalMemories && totalMemories > 0) {
      const timer = window.setTimeout(() => {
        playFanfare();
        setShowFinal(true);
      }, 600);
      return () => window.clearTimeout(timer);
    }
  }, [completedMemories.length, totalMemories]);

  if (!hydrated) {
    return (
      <main className="flex min-h-[100dvh] items-center justify-center bg-[#050708] text-white">
        <p className="animate-pulse font-mono text-[9px] uppercase tracking-[0.35em] text-blue-300">
          LOADING...
        </p>
      </main>
    );
  }

  /* Start Screen */
  if (!started) {
    return (
      <main className="relative min-h-[100dvh] overflow-hidden bg-[#050708] text-white">
        <GameKeyframes />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#172554_0%,#050708_55%)]" />

        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white"
            style={{
              left: `${(i * 43) % 100}%`,
              top: `${(i * 29) % 100}%`,
              opacity: 0.15 + ((i * 11) % 50) / 100,
              animation: `ourjourney-glow-pulse ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}

        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-7 text-center">
          <div className="flex h-24 w-24 items-center justify-center border-4 border-blue-300 bg-[#10151C] text-5xl shadow-[6px_6px_0px_#1E293B]">
            ❤️
          </div>

          <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.35em] text-blue-300">
            A tiny adventure
          </p>

          <h1 className="mt-5 font-mono text-4xl font-bold sm:text-6xl">
            OUR JOURNEY
          </h1>

          <p className="mt-6 max-w-sm font-mono text-xs leading-7 text-gray-400">
            A little pixel adventure through some of the places and memories we've shared.
          </p>

          <button
            type="button"
            onClick={() => {
              playUiSound();
              setStarted(true);
            }}
            className="mt-10 border-4 border-white bg-white px-8 py-4 font-mono text-xs font-bold text-black shadow-[5px_5px_0px_#334155] transition active:translate-y-1 active:shadow-none"
          >
            START GAME
          </button>

          <p className="mt-6 font-mono text-[7px] uppercase tracking-[0.25em] text-gray-600">
            {totalMemories} memories to find · one journey
          </p>
        </section>
      </main>
    );
  }

  /* Final Reward */
  if (showFinal) {
    const visitedEmojis = locations.map((location) => location.emoji);
    const birthday = new Date(2026, 7, 13);
    const now = new Date();
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysUntil = Math.ceil(
      (birthday.setHours(0, 0, 0, 0) - now.setHours(0, 0, 0, 0)) / msPerDay
    );

    let countdownLabel: string;
    if (daysUntil > 1) {
      countdownLabel = `${daysUntil} DAYS TO GO`;
    } else if (daysUntil === 1) {
      countdownLabel = "TOMORROW";
    } else if (daysUntil === 0) {
      countdownLabel = "TODAY";
    } else {
      countdownLabel = "ALREADY HERE";
    }

    return (
      <main className="relative min-h-[100dvh] overflow-hidden bg-[#080A0D] text-white">
        <GameKeyframes />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#3b1d35_0%,#080A0D_60%)]" />

        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="pointer-events-none absolute top-0 text-lg"
            style={{
              left: `${(i * 61) % 100}%`,
              animation: `ourjourney-fall ${6 + (i % 5)}s linear infinite`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.7,
            }}
          >
            {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "✨" : "🌌"}
          </span>
        ))}

        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-7 py-12 text-center">
          <div className="animate-pulse text-6xl">❤️</div>

          <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.4em] text-pink-300">
            QUEST COMPLETE
          </p>

          <h1 className="mt-5 font-mono text-3xl font-bold sm:text-5xl">
            OUR JOURNEY
          </h1>

          <div className="mt-7 flex max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {visitedEmojis.map((emoji, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-xl">{emoji}</span>
                {i < visitedEmojis.length - 1 && (
                  <span className="text-[8px] text-pink-300/50">┄</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 border-4 border-pink-300 bg-[#17101A] px-8 py-6 shadow-[6px_6px_0px_#020617]">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400">
              THE NEXT CHAPTER
            </p>
            <p className="mt-4 font-mono text-2xl font-bold text-pink-200 sm:text-3xl">
              13 AUG 2026
            </p>
            <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.3em] text-pink-400">
              {countdownLabel}
            </p>
          </div>

          <div className="mt-8 max-w-md space-y-4">
            <p className="font-mono text-xs leading-7 text-gray-300">
              We've travelled through countries, survived snowballs, built snowmen, crashed bumper cars, ate sushi, watched movies...
            </p>
            <p className="font-mono text-xs leading-7 text-gray-300">
              And somehow, the best part of the journey is that there are still memories left to make.
            </p>
          </div>

          <div className="mt-10 text-3xl">🌌 ☃️ 🎡 ❤️ 🍣</div>

          <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.3em] text-pink-300">
            HAPPY BIRTHDAY
          </p>

          <button
            type="button"
            onClick={() => {
              playUiSound();
              setShowJournal(true);
            }}
            className="mt-10 border-2 border-gray-700 px-5 py-3 font-mono text-[8px] uppercase tracking-widest text-gray-300 transition active:bg-gray-800"
          >
            📖 Revisit the journal
          </button>
        </section>

        {showJournal && (
          <JournalOverlay
            completedMemories={completedMemories}
            onClose={() => setShowJournal(false)}
            onOpenMemory={openMemoryFromJournal}
          />
        )}
      </main>
    );
  }

  /* Dialogue Scene */
  if (sceneMemory?.scene) {
    const scene = sceneMemory.scene;
    const currentLine = scene.lines[dialogueIndex];
    const isLastLine = dialogueIndex === scene.lines.length - 1;

    const fullText = currentLine.text;
    const isTyping = typedCount < fullText.length;
    const shownText = fullText.slice(0, typedCount);

    const activeSpeaker =
      currentLine.speaker === "HAYDEN" || currentLine.speaker === "KELLY"
        ? currentLine.speaker
        : null;

    const isConfession = scene.type === "confession";
    const isYesMoment =
      isConfession &&
      currentLine.speaker === "KELLY" &&
      currentLine.text === "Yes.";

    const advanceOrReveal = () => {
      playUiSound();
      if (isTyping) {
        setTypedCount(fullText.length);
        return;
      }

      if (isLastLine) {
        finishMemory(sceneMemory);
      } else {
        setDialogueIndex((value) => value + 1);
      }
    };

    return (
      <main className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-hidden bg-black text-white">
        <GameKeyframes />

        {/* SCENE AREA — its own dedicated region. The dialogue
            box below is a flex sibling, never an overlay, so it
            can never cover the scene. */}
        <div className="relative min-h-[30dvh] flex-1 overflow-hidden">
          <SceneBackground type={scene.type} />
          <PixelCharacters type={scene.type} activeSpeaker={activeSpeaker} />

          {isYesMoment && (
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${44 + i * 3}%`,
                    animation: "ourjourney-heart-pop 1.4s ease-out infinite",
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  ❤️
                </span>
              ))}
            </div>
          )}

          <div className="absolute left-0 right-0 top-4 z-20 px-4 text-center">
            <p
              className={[
                "font-mono text-[9px] uppercase tracking-[0.35em]",
                isConfession ? "text-[#E0BD72]" : "text-blue-300",
              ].join(" ")}
            >
              {scene.title}
            </p>
            {scene.subtitle && (
              <p className="mt-2 font-mono text-[8px] text-gray-400">
                {scene.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* DIALOGUE AREA — dedicated section underneath the
            scene, sized to its content rather than overlaid on
            top of the artwork. */}
        <div
          onClick={advanceOrReveal}
          className="relative z-30 shrink-0 cursor-pointer border-t-4 border-gray-700 bg-[#080A0D]/95 pb-[env(safe-area-inset-bottom)]"
        >
          <div className="mx-auto max-w-5xl p-3 sm:p-6">
            <div
              className={[
                "border-2 p-4 shadow-[4px_4px_0px_#020617] sm:border-4 sm:p-7",
                isConfession
                  ? "border-[#E0BD72] bg-[#151009]"
                  : "border-gray-500 bg-[#111820]",
              ].join(" ")}
            >
              <p
                className={[
                  "font-mono text-[9px] font-bold uppercase tracking-[0.2em]",
                  isConfession ? "text-[#E0BD72]" : "text-blue-300",
                ].join(" ")}
              >
                {currentLine.speaker}
              </p>

              <p className="mt-3 max-h-[26dvh] min-h-[54px] overflow-y-auto font-mono text-xs leading-6 text-white sm:mt-5 sm:min-h-[70px] sm:text-base sm:leading-8">
                {shownText}
                {isTyping && <span className="ml-0.5 animate-pulse">▌</span>}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-[8px] text-gray-500">
                  {dialogueIndex + 1} / {scene.lines.length}
                </span>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    advanceOrReveal();
                  }}
                  className={[
                    "border-2 px-5 py-3 font-mono text-[9px] font-bold transition active:translate-y-1",
                    isConfession
                      ? "border-[#E0BD72] bg-[#E0BD72] text-black"
                      : "border-white bg-white text-black",
                  ].join(" ")}
                >
                  {isTyping ? "SKIP ▸" : isLastLine ? "CONTINUE →" : "NEXT →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* World Map */
  if (showMap) {
    return (
      <main className="fixed inset-0 overflow-hidden bg-[#1B3521] text-white">
        <GameKeyframes />

        <div className="absolute left-0 right-0 top-0 z-50 border-b-4 border-[#2A3A2C] bg-[#08100B]/95">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border-2 border-[#A8C2A7] bg-[#162419] text-lg">
                ❤️
              </div>
              <div>
                <p className="font-mono text-[7px] tracking-[0.3em] text-green-400">
                  WORLD MAP
                </p>
                <p className="font-mono text-xs font-bold">OUR JOURNEY</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-mono text-[7px] text-gray-500">MEMORIES</p>
                <p className="font-mono text-xs text-green-300">
                  {completedMemories.length} / {totalMemories}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  playUiSound();
                  setShowJournal(true);
                }}
                aria-label="Open memory journal"
                title="Memory journal"
                className="font-mono text-xs text-gray-400 transition active:text-green-300"
              >
                📖
              </button>

              <button
                type="button"
                onClick={resetProgress}
                aria-label="Reset progress"
                title="Reset progress"
                className="font-mono text-[10px] text-gray-600 transition active:text-gray-300"
              >
                ↺
              </button>
            </div>
          </div>

          <div className="h-1 bg-[#101A12]">
            <div
              className="h-full bg-green-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 top-[66px]">
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
                  onClick={() => travelToLocation(index)}
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
        </div>

        {showJournal && (
          <JournalOverlay
            completedMemories={completedMemories}
            onClose={() => setShowJournal(false)}
            onOpenMemory={openMemoryFromJournal}
          />
        )}
      </main>
    );
  }

  /* Location Page */
  const location = locations[locationIndex];
  const locationCompleted = location.memories.filter((memory) =>
    completedMemories.includes(memory.title)
  ).length;

  return (
    <main className="min-h-[100dvh] bg-[#080A0D] text-white">
      <GameKeyframes />

      <section className="mx-auto min-h-[100dvh] max-w-4xl px-5 py-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-blue-300">
              LOCATION
            </p>
            <h1 className="mt-2 font-mono text-xl font-bold">
              {location.emoji} {location.name}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                playUiSound();
                setShowJournal(true);
              }}
              className="border-2 border-gray-700 px-3 py-2 font-mono text-[8px] text-gray-300 transition active:bg-gray-800"
            >
              📖
            </button>

            <button
              type="button"
              onClick={() => {
                playUiSound();
                setSelectedMemory(null);
                setShowMap(true);
              }}
              className="border-2 border-gray-700 px-4 py-2 font-mono text-[8px] text-gray-300 transition active:bg-gray-800"
            >
              ← MAP
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-end justify-between">
            <p className="font-mono text-[8px] uppercase tracking-widest text-gray-500">
              CHAPTERS COLLECTED
            </p>
            <p className="font-mono text-[7px] text-gray-500">
              {locationCompleted} / {location.memories.length}
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {location.memories.map((memory, memoryIdx) => {
              const completed = completedMemories.includes(memory.title);

              return (
                <button
                  key={memory.title}
                  type="button"
                  onClick={() => {
                    playUiSound();
                    setSelectedMemory(memory);
                  }}
                  className={[
                    "relative overflow-hidden border-4 p-5 text-left shadow-[5px_5px_0px_#020617] transition active:translate-y-1 active:shadow-none",
                    completed
                      ? "border-green-900 bg-[#0F1912]"
                      : "border-gray-800 bg-[#111820]",
                  ].join(" ")}
                >
                  {completed && (
                    <div className="absolute -right-9 top-3 w-32 rotate-45 bg-green-500 py-0.5 text-center font-mono text-[6px] font-bold uppercase tracking-widest text-black shadow-[0_1px_0_#020617]">
                      Collected
                    </div>
                  )}

                  <p className="font-mono text-[6px] uppercase tracking-[0.3em] text-gray-500">
                    Chapter {String(memoryIdx + 1).padStart(2, "0")}
                  </p>

                  <div className="mt-2 flex items-start justify-between">
                    <div className="text-4xl">{memory.emoji}</div>
                  </div>

                  <h2 className="mt-5 font-mono text-xs font-bold">
                    {memory.title}
                  </h2>

                  <p className="mt-3 font-mono text-[7px] text-gray-500">
                    {completed
                      ? "▶ VIEW MEMORY"
                      : memory.scene
                      ? "▶ PLAY MEMORY"
                      : "▶ VIEW MEMORY"}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Memory Modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/85 px-5"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="max-h-[88dvh] w-full max-w-xl overflow-y-auto border-4 border-gray-600 bg-[#111820] p-6 shadow-[8px_8px_0px_#020617]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-6xl">{selectedMemory.emoji}</div>
              <h2 className="mt-5 font-mono text-lg font-bold">
                {selectedMemory.title}
              </h2>
            </div>

            <div className="mt-7 space-y-3">
              {selectedMemory.description.map((line) => (
                <p
                  key={line}
                  className="font-mono text-[10px] leading-7 text-gray-300"
                >
                  {line}
                </p>
              ))}
            </div>

            {selectedMemory.scene ? (
              <button
                type="button"
                onClick={() => {
                  playUiSound();
                  setDialogueIndex(0);
                  setSceneMemory(selectedMemory);
                  setSelectedMemory(null);
                }}
                className="mt-7 w-full border-2 border-blue-300 bg-blue-300 px-6 py-4 font-mono text-[9px] font-bold text-black transition active:translate-y-1"
              >
                ▶ PLAY THIS MEMORY
              </button>
            ) : (
              !completedMemories.includes(selectedMemory.title) && (
                <button
                  type="button"
                  onClick={() => 
                    finishMemory(selectedMemory)}
                  className="mt-7 w-full border-2 border-[#E0BD72] bg-[#E0BD72] px-6 py-4 font-mono text-[9px] font-bold text-white transition active:translate-y-1"
                >
                  ✓ MARK AS REMEMBERED
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => {
                playUiSound();
                setSelectedMemory(null);
              }}
              className="mt-3 w-full border-2 border-gray-600 px-6 py-3 font-mono text-[9px] font-bold text-gray-300 transition active:bg-gray-800"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {showJournal && (
        <JournalOverlay
          completedMemories={completedMemories}
          onClose={() => setShowJournal(false)}
          onOpenMemory={openMemoryFromJournal}
        />
      )}
    </main>
  );
}