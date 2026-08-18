export type DialogueLine = {
  speaker: string;
  text: string;
};

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

export type Memory = {
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

export type Location = {
  name: string;
  country: string;
  emoji: string;
  memories: Memory[];
  x: number;
  y: number;
};

export type SaveData = {
  started: boolean;
  completedMemories: string[];
  locationIndex: number;
  showFinal: boolean;
};
