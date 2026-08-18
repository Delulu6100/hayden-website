/* ============================================================
   GF GAME — content & types
   All narrative, locations, chapters, and choice trees live here.
   Add new memories, photos, or milestones by extending this file.
   ============================================================ */

export type GameView = "map" | "chapters" | "play";

export type SceneType =
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

export type Choice = {
  id: string;
  label: string;
  nextNodeId: string;
  /** Hook: unlock a collectible memory when this choice is picked */
  unlockMemoryId?: string;
  /** Hook: reveal a hidden item (future feature) */
  hiddenItemId?: string;
};

export type StoryNode = {
  id: string;
  speaker?: string;
  text: string;
  /** Branching paths — omit for linear "tap to continue" beats */
  choices?: Choice[];
  /** Linear continuation when there are no choices */
  nextNodeId?: string;
};

export type Chapter = {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  /** Links to collectible memory slot */
  memoryId?: string;
  startNodeId: string;
  nodes: Record<string, StoryNode>;
};

export type GameLocation = {
  id: string;
  name: string;
  country: string;
  flag: string;
  /** Percent position on world map (0–100) */
  mapX: number;
  mapY: number;
  tagline: string;
  /** Available from the start of a new game */
  unlockedByDefault?: boolean;
  /** Unlock after completing any chapter in this location */
  unlockAfterLocationId?: string;
  chapters: Chapter[];
};

export type MemoryCollectible = {
  id: string;
  title: string;
  emoji: string;
  locationId: string;
  /** Description lines for journal display */
  description: string[];
  /** Optional scene type for playback */
  sceneType?: SceneType;
};

export type GameMeta = {
  title: string;
  subtitle: string;
  version: string;
};

/* ── Collectible memories (15 slots) ─────────────────────── */

export const MEMORY_COLLECTIBLES: MemoryCollectible[] = [
  {
    id: "mem-aurora",
    title: "The Aurora Photo",
    emoji: "🌌",
    locationId: "iceland",
    description: [
      "It was nighttime in Iceland.",
      "The aurora was in the background.",
      "I asked for a photo because I wanted a picture with you.",
      "Then we somehow decided that pointing our phones at each other like pistols was the correct pose.",
    ],
    sceneType: "aurora",
  },
  {
    id: "mem-snowball",
    title: "The Snowball Attack",
    emoji: "❄️",
    locationId: "iceland",
    description: [
      "Another day in Iceland.",
      "You threw a snowball directly at my face.",
      "I was completely stunned.",
      "Somehow this became one of those jokes we still bring up from time to time.",
    ],
    sceneType: "snowball",
  },
  {
    id: "mem-snowman",
    title: "The First Snowman",
    emoji: "☃️",
    locationId: "norway",
    description: [
      "You built your first snowman.",
      "It wasn't my first snowman.",
      "But I got to build it with you.",
    ],
    sceneType: "snowman",
  },
  {
    id: "mem-bumper",
    title: "The Bumper Cars",
    emoji: "🎡",
    locationId: "denmark",
    description: [
      "We went to a carnival with the group.",
      "You chose to sit in my bumper car.",
      "I drove.",
      "Things got chaotic.",
    ],
    sceneType: "bumpercars",
  },
  {
    id: "mem-coat",
    title: "The Coat — Venice",
    emoji: "🧥",
        locationId: "italy",
    description: [
      "It was cold in Venice.",
      "I went back to the hostel to get your coat.",
      "I just didn't want you to be cold.",
    ],
    sceneType: "coat",
  },
  {
    id: "mem-confession",
    title: "The Confession",
    emoji: "❤️",
    locationId: "london",
    description: [
      "May 20, 2026.",
      "On a train from Coventry to London.",
      "I was incredibly nervous.",
      "I scratched my hand while trying to figure out how to say it.",
      "And then I asked.",
    ],
    sceneType: "confession",
  },
  {
    id: "mem-borough",
    title: "Borough Market",
    emoji: "🍓",
    locationId: "london",
    description: [
      "We went to Borough Market.",
      "Fish and chips.",
      "Strawberry chocolate.",
      "And the special crème brûlée donut.",
      "It was somewhere you had wanted to visit for a while.",
    ],
    sceneType: "borough",
  },
  {
    id: "mem-gaming",
    title: "Crazy Taxi",
    emoji: "🎮",
    locationId: "london",
    description: [
      "We went to the Science Museum.",
      "There was a special video game exhibit.",
      "You played Crazy Taxi.",
      "Your driving skills were... questionable.",
      "You crashed a lot.",
    ],
    sceneType: "gaming",
  },
  {
    id: "mem-flowers",
    title: "The Flowers",
    emoji: "🌹",
    locationId: "london",
    description: [
      "We went to Flat Iron.",
      "The steak was great.",
      "During the meal, I went outside.",
      "I came back with flowers.",
    ],
    sceneType: "flowers",
  },
  {
    id: "mem-bigben",
    title: "Big Ben & London Eye",
    emoji: "🎡",
    locationId: "london",
    description: [
      "After dinner we went to see Big Ben and the London Eye.",
      "You hadn't been there before.",
      "So we got to see them together.",
    ],
    sceneType: "bigben",
  },
  {
    id: "mem-sushi",
    title: "Sushiro",
    emoji: "🍣",
    locationId: "hong-kong",
    description: [
      "After coming back from Warwick, we missed sushi.",
      "So naturally, we went to Sushiro.",
    ],
    sceneType: "sushi",
  },
  {
    id: "mem-movie",
    title: "Movie Dates",
    emoji: "🎬",
    locationId: "hong-kong",
    description: [
      "We watched 給阿嬤的情書.",
      "And on another date, Obsession.",
      "Different movies.",
      "Different days.",
      "More memories.",
    ],
    sceneType: "movie",
  },
    {
    id: "mem-another-stop",
    title: "Another Stop",
    emoji: "🗺️",
    locationId: "czechia",
    description: [
      "Not every place needs a dramatic story.",
      "It was another country.",
      "Another stop.",
      "Another part of the journey.",
    ],
  },
  {
    id: "mem-budapest",
    title: "Budapest",
    emoji: "🏰",
    locationId: "budapest",
    description: [
      "Budapest.",
      "Another stop during exchange.",
      "Another place that became part of the story.",
    ],
  },
  {
    id: "mem-powerbank",
    title: "The Power Bank — Rome",
    emoji: "🔋",
    locationId: "italy",
    description: [
      "In Rome, another friend's bag had been stolen.",
      "You were waiting for them.",
      "I rushed back to find you.",
      "Then I gave you my power bank.",
    ],
    sceneType: "powerbank",
  },
];

export const TOTAL_MEMORIES = MEMORY_COLLECTIBLES.length;

/* ── World locations & chapters ──────────────────────────── */

export const GAME_META: GameMeta = {
  title: "OUR JOURNEY",
  subtitle: "A pixel journey through places & memories",
  version: "0.1.0",
};

export const LOCATIONS: GameLocation[] = [
  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    flag: "🇮🇸",
    mapX: 14,
    mapY: 18,
    tagline: "Northern lights & snowball diplomacy",
    unlockedByDefault: true,
    chapters: [
      {
        id: "iceland-aurora",
        title: "The Aurora Photo",
        subtitle: "Night sky, two phones, one pose",
        emoji: "🌌",
        memoryId: "mem-aurora",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "It was cold. Really cold.\nBut the sky looked incredible — ribbons of green drifting over the black lava fields.",
            nextNodeId: "ask-photo",
          },
          "ask-photo": {
            id: "ask-photo",
            speaker: "HAYDEN",
            text: "Wait... can we take a photo?",
            nextNodeId: "pistol-pose",
          },
          "pistol-pose": {
            id: "pistol-pose",
            speaker: "NARRATOR",
            text: "So we took out our phones.\nAnd somehow turned them into imaginary pistols.",
            choices: [
              {
                id: "pose-duel",
                label: "🔫 Strike a duel pose",
                nextNodeId: "duel",
                unlockMemoryId: "mem-aurora",
              },
              {
                id: "pose-sweet",
                label: "📸 Just smile for the camera",
                nextNodeId: "sweet",
                unlockMemoryId: "mem-aurora",
              },
            ],
          },
          duel: {
            id: "duel",
            speaker: "NARRATOR",
            text: "Behind us, the aurora filled the sky.\nTwo phones. One ridiculous pose.\nA memory that still makes us laugh.",
          },
          sweet: {
            id: "sweet",
            speaker: "NARRATOR",
            text: "We tried to be normal.\nWe failed — and pointed our phones at each other anyway.\nThe aurora didn't mind.",
          },
        },
      },
      {
        id: "iceland-snowball",
        title: "The Snowball Attack",
        subtitle: "She started it",
        emoji: "❄️",
        memoryId: "mem-snowball",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Another day. More snow.\nKelly picked up a snowball with suspicious calm.",
            choices: [
              { id: "dont", label: "Don't.", nextNodeId: "throw" },
              { id: "run", label: "Run.", nextNodeId: "throw" },
            ],
          },
          throw: {
            id: "throw",
            speaker: "NARRATOR",
            text: "She threw it.\nDirectly at Hayden's face.\nSomehow, we still talk about this.",
            nextNodeId: "end",
          },
          end: {
            id: "end",
            speaker: "HAYDEN",
            text: "...I was stunned.",
          },
        },
      },
    ],
  },
  {
    id: "norway",
    name: "Norway",
    country: "Norway",
    flag: "🇳🇴",
    mapX: 28,
    mapY: 28,
    tagline: "Snowmen & quiet fjords",
    unlockAfterLocationId: "iceland",
    chapters: [
      {
        id: "norway-snowman",
        title: "The First Snowman",
        subtitle: "Rolling snow, piece by piece",
        emoji: "☃️",
        memoryId: "mem-snowman",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "KELLY",
            text: "I've never built a snowman before.",
            nextNodeId: "build",
          },
          build: {
            id: "build",
            speaker: "HAYDEN",
            text: "Then let's build one.",
            nextNodeId: "shape",
          },
          shape: {
            id: "shape",
            speaker: "NARRATOR",
            text: "Piece by piece, it started taking shape.",
            choices: [
              {
                id: "bigger",
                label: "Make it BIGGER",
                nextNodeId: "done",
                unlockMemoryId: "mem-snowman",
              },
              {
                id: "perfect",
                label: "Make it perfect",
                nextNodeId: "done",
                unlockMemoryId: "mem-snowman",
              },
            ],
          },
          done: {
            id: "done",
            speaker: "KELLY",
            text: "We actually made one.",
          },
        },
      },
    ],
  },
  {
    id: "denmark",
    name: "Denmark",
    country: "Denmark",
    flag: "🇩🇰",
    mapX: 40,
    mapY: 40,
    tagline: "Carnival lights & bumper chaos",
    unlockAfterLocationId: "norway",
    chapters: [
      {
        id: "denmark-bumper",
        title: "The Bumper Cars",
        subtitle: "Questionable driving, excellent memory",
        emoji: "🎡",
        memoryId: "mem-bumper",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "KELLY",
            text: "I'm sitting in your car.",
            nextNodeId: "drive",
          },
          drive: {
            id: "drive",
            speaker: "HAYDEN",
            text: "You're trusting me with this?",
            choices: [
              { id: "yes", label: "Yes.", nextNodeId: "crash" },
              { id: "regret", label: "…maybe not.", nextNodeId: "crash" },
            ],
          },
          crash: {
            id: "crash",
            speaker: "NARRATOR",
            text: "The car immediately went somewhere it probably shouldn't have.\nBumper car driving: questionable.\nMemory: excellent.",
            nextNodeId: "end",
          },
          end: {
            id: "end",
            speaker: "KELLY",
            text: "WHY ARE WE GOING THAT WAY?",
          },
        },
      },
    ],
  },
  {
    id: "czechia",
    name: "Czechia",
    country: "Czech Republic",
    flag: "🇨🇿",
    mapX: 47,
    mapY: 48,
    tagline: "Another stop, no dramatic story",
    unlockAfterLocationId: "denmark",
    chapters: [
      {
        id: "czechia-stop",
        title: "Another Stop",
        subtitle: "Not every place needs a story",
        emoji: "🗺️",
        memoryId: "mem-another-stop",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Not every place needs a dramatic story.\nIt was another country.\nAnother stop. Another part of the journey.",
            choices: [
              {
                id: "accept",
                label: "Just another stop",
                nextNodeId: "end",
                unlockMemoryId: "mem-another-stop",
              },
            ],
          },
          end: {
            id: "end",
            speaker: "KELLY",
            text: "Some stops are just... stops. And that's okay.",
          },
        },
      },
    ],
  },
  {
    id: "budapest",
    name: "Budapest",
    country: "Hungary",
    flag: "🇭🇺",
    mapX: 53,
    mapY: 59,
    tagline: "Another stop during exchange",
    unlockAfterLocationId: "czechia",
    chapters: [
      {
        id: "budapest-memory",
        title: "Budapest",
        subtitle: "A place that became part of the story",
        emoji: "🏰",
        memoryId: "mem-budapest",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Budapest. Another stop during exchange.",
            choices: [
              { id: "explore", label: "Walk the streets", nextNodeId: "end", unlockMemoryId: "mem-budapest" },
            ],
          },
          end: {
            id: "end",
            speaker: "HAYDEN",
            text: "Every city leaves a mark.",
          },
        },
      },
    ],
  },
  {
    id: "italy",
    name: "Italy",
    country: "Italy",
    flag: "🇮🇹",
    mapX: 59,
    mapY: 70,
    tagline: "Coats, power banks & Roman streets",
    unlockAfterLocationId: "budapest",
    chapters: [
      {
        id: "italy-coat",
        title: "The Coat — Venice",
        subtitle: "A small thing",
        emoji: "🧥",
        memoryId: "mem-coat",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Venice was beautiful. But it was getting cold.",
            nextNodeId: "cold",
          },
          cold: {
            id: "cold",
            speaker: "HAYDEN",
            text: "You're cold.",
            nextNodeId: "wait",
          },
          wait: {
            id: "wait",
            speaker: "KELLY",
            text: "A little.",
            nextNodeId: "hostel",
          },
          hostel: {
            id: "hostel",
            speaker: "HAYDEN",
            text: "Wait here.",
            nextNodeId: "back",
          },
          back: {
            id: "back",
            speaker: "NARRATOR",
            text: "Hayden went back to the hostel. Just to get your coat.",
            choices: [
              { id: "return", label: "Come back with the coat", nextNodeId: "end", unlockMemoryId: "mem-coat" },
            ],
          },
          end: {
            id: "end",
            speaker: "NARRATOR",
            text: "Sometimes caring about someone is as simple as making sure they're warm.",
          },
        },
      },
      {
        id: "italy-powerbank",
        title: "The Power Bank — Rome",
        subtitle: "Don't let your phone die",
        emoji: "🔋",
        memoryId: "mem-powerbank",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Rome. Something unexpected happened.",
            nextNodeId: "waiting",
          },
          waiting: {
            id: "waiting",
            speaker: "KELLY",
            text: "I'm waiting for them.",
            nextNodeId: "rush",
          },
          rush: {
            id: "rush",
            speaker: "NARRATOR",
            text: "So Hayden rushed back to find you.",
            nextNodeId: "give",
          },
          give: {
            id: "give",
            speaker: "HAYDEN",
            text: "Here. What's this? My power bank. You'll need it.",
            nextNodeId: "small",
          },
          small: {
            id: "small",
            speaker: "NARRATOR",
            text: "A small thing. But I wanted to make sure you were okay.",
            choices: [
              { id: "accept", label: "Thank you", nextNodeId: "end", unlockMemoryId: "mem-powerbank" },
            ],
          },
          end: {
            id: "end",
            speaker: "KELLY",
            text: "I really appreciate this.",
          },
        },
      },
    ],
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    mapX: 62,
    mapY: 58,
    tagline: "Trains, markets & firsts",
    unlockAfterLocationId: "italy",
    chapters: [
      {
        id: "london-confession",
        title: "The Confession",
        subtitle: "Coventry → London",
        emoji: "❤️",
        memoryId: "mem-confession",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "The train was heading towards London.\nEverything looked normal.\nExcept Hayden was extremely nervous.",
            nextNodeId: "nervous",
          },
          nervous: {
            id: "nervous",
            speaker: "KELLY",
            text: "Are you okay?",
            nextNodeId: "ask",
          },
          ask: {
            id: "ask",
            speaker: "HAYDEN",
            text: "Kelly... can you be my boyfriend?",
            choices: [
              { id: "yes", label: "Yes.", nextNodeId: "yes-scene", unlockMemoryId: "mem-confession" },
              { id: "laugh", label: "HAHAHAHA — yes.", nextNodeId: "yes-scene", unlockMemoryId: "mem-confession" },
            ],
          },
          "yes-scene": {
            id: "yes-scene",
            speaker: "NARRATOR",
            text: "And just like that, everything changed.",
          },
        },
      },
      {
        id: "london-borough",
        title: "Borough Market",
        subtitle: "Fish, chips & crème brûlée donuts",
        emoji: "🍓",
        memoryId: "mem-borough",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "KELLY",
            text: "I've wanted to come here for ages.",
            nextNodeId: "food",
          },
          food: {
            id: "food",
            speaker: "NARRATOR",
            text: "Fish and chips. Strawberry chocolate. And the special crème brûlée donut.",
            choices: [
              { id: "donut", label: "Get the donut first", nextNodeId: "end", unlockMemoryId: "mem-borough" },
              { id: "chips", label: "Fish & chips first", nextNodeId: "end", unlockMemoryId: "mem-borough" },
            ],
          },
          end: {
            id: "end",
            speaker: "HAYDEN",
            text: "This is actually really good.",
          },
        },
      },
      {
        id: "london-gaming",
        title: "Crazy Taxi",
        subtitle: "Video game exhibit",
        emoji: "🎮",
        memoryId: "mem-gaming",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Then we went to the Science Museum.\nThere was a special video game exhibition.",
            nextNodeId: "hayden",
          },
          hayden: {
            id: "hayden",
            speaker: "HAYDEN",
            text: "YES. GAMES.",
            nextNodeId: "kelly",
          },
          kelly: {
            id: "kelly",
            speaker: "KELLY",
            text: "I'm going to try this one.",
            choices: [
              { id: "taxi", label: "Crazy Taxi", nextNodeId: "crash", unlockMemoryId: "mem-gaming" },
            ],
          },
          crash: {
            id: "crash",
            speaker: "NARRATOR",
            text: "Kelly chose Crazy Taxi.\nThe driving began.\nCRASH.\nAnother crash.\nYour driving is terrible.\nI KNOW.",
            nextNodeId: "end",
          },
          end: {
            id: "end",
            speaker: "HAYDEN",
            text: "Somehow, none of this matters.",
          },
        },
      },
      {
        id: "london-flowers",
        title: "The Flowers",
        subtitle: "Flat Iron",
        emoji: "🌹",
        memoryId: "mem-flowers",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "We went to Flat Iron.\nThe steak was great.",
            nextNodeId: "hayden-leave",
          },
          "hayden-leave": {
            id: "hayden-leave",
            speaker: "HAYDEN",
            text: "I'll be back in a minute.",
            nextNodeId: "kelly-ask",
          },
          "kelly-ask": {
            id: "kelly-ask",
            speaker: "KELLY",
            text: "Where are you going?",
            nextNodeId: "hayden-secret",
          },
          "hayden-secret": {
            id: "hayden-secret",
            speaker: "HAYDEN",
            text: "You'll see.",
            nextNodeId: "wait",
          },
          wait: {
            id: "wait",
            speaker: "NARRATOR",
            text: "Hayden went outside.\nA few minutes later...",
            choices: [
              { id: "wait-longer", label: "Wait a bit more", nextNodeId: "hayden-return", unlockMemoryId: "mem-flowers" },
              { id: "follow", label: "Go after Hayden", nextNodeId: "hayden-return", unlockMemoryId: "mem-flowers" },
            ],
          },
          "hayden-return": {
            id: "hayden-return",
            speaker: "HAYDEN",
            text: "Here. Flowers? For you.",
            nextNodeId: "end",
          },
          end: {
            id: "end",
            speaker: "NARRATOR",
            text: "Sometimes the best gestures are the simple ones.",
          },
        },
      },
      {
        id: "london-bigben",
        title: "Big Ben & London Eye",
        subtitle: "The night continues",
        emoji: "🎡",
        memoryId: "mem-bigben",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "The day wasn't over yet.\nWe went to see Big Ben.",
            nextNodeId: "kelly",
          },
          kelly: {
            id: "kelly",
            speaker: "KELLY",
            text: "I've never been here before.",
            nextNodeId: "hayden",
          },
          hayden: {
            id: "hayden",
            speaker: "HAYDEN",
            text: "Then I'm glad I get to see it with you.",
            nextNodeId: "eye",
          },
          eye: {
            id: "eye",
            speaker: "NARRATOR",
            text: "Then we walked towards the London Eye.",
            choices: [
              { id: "look", label: "Look around", nextNodeId: "end", unlockMemoryId: "mem-bigben" },
              { id: "stay", label: "Stay awhile", nextNodeId: "end", unlockMemoryId: "mem-bigben" },
            ],
          },
          end: {
            id: "end",
            speaker: "NARRATOR",
            text: "A long day.\nA lot of memories.\nAnd the beginning of something even bigger.",
          },
        },
      },
    ],
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    country: "Hong Kong",
    flag: "🇭🇰",
    mapX: 84,
    mapY: 78,
    tagline: "Home again — sushi & cinema",
    unlockAfterLocationId: "london",
    chapters: [
      {
        id: "hk-sushi",
        title: "Sushiro",
        subtitle: "The simplest dates",
        emoji: "🍣",
        memoryId: "mem-sushi",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Back in Hong Kong.\nAfter exchange, there was something we both missed.",
            nextNodeId: "sushi",
          },
          sushi: {
            id: "sushi",
            speaker: "BOTH",
            text: "Sushi.",
            choices: [
              {
                id: "salmon",
                label: "Salmon nigiri",
                nextNodeId: "end",
                unlockMemoryId: "mem-sushi",
              },
              {
                id: "roll",
                label: "Dragon roll",
                nextNodeId: "end",
                unlockMemoryId: "mem-sushi",
              },
            ],
          },
          end: {
            id: "end",
            speaker: "NARRATOR",
            text: "Sometimes the simplest dates are the best ones.",
          },
        },
      },
      {
        id: "hk-movie",
        title: "Movie Dates",
        subtitle: "給阿嬤的情書 & Obsession",
        emoji: "🎬",
        memoryId: "mem-movie",
        startNodeId: "start",
        nodes: {
          start: {
            id: "start",
            speaker: "NARRATOR",
            text: "Another day. Another movie.",
            nextNodeId: "pick",
          },
          pick: {
            id: "pick",
            speaker: "KELLY",
            text: "What should we watch next?",
            choices: [
              {
                id: "letter",
                label: "給阿嬤的情書",
                nextNodeId: "end",
                unlockMemoryId: "mem-movie",
              },
              {
                id: "obsession",
                label: "Obsession",
                nextNodeId: "end",
                unlockMemoryId: "mem-movie",
              },
            ],
          },
          end: {
            id: "end",
            speaker: "HAYDEN",
            text: "We'll figure it out.",
          },
        },
      },
    ],
  },
];

/* ── Helpers ─────────────────────────────────────────────── */

export function getLocationById(id: string): GameLocation | undefined {
  return LOCATIONS.find((loc) => loc.id === id);
}

export function getChapterById(
  locationId: string,
  chapterId: string
): Chapter | undefined {
  const location = getLocationById(locationId);
  return location?.chapters.find((ch) => ch.id === chapterId);
}

export function getMemoryById(id: string): MemoryCollectible | undefined {
  return MEMORY_COLLECTIBLES.find((mem) => mem.id === id);
}

export function getDefaultUnlockedLocationIds(): string[] {
  return LOCATIONS.filter((loc) => loc.unlockedByDefault).map((loc) => loc.id);
}
