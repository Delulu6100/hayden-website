import { SaveData } from "./types";
import { locations } from "./data";

/* =========================================================
   SAVE / LOAD PROGRESS
========================================================= */

const SAVE_KEY = "our-journey-save-v1";

export function loadSave(): SaveData | null {
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

export function writeSave(data: SaveData) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    // Storage unavailable
  }
}
