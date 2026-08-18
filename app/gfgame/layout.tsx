import "./gfgame.css";

import { Press_Start_2P, Share_Tech_Mono } from "next/font/google";

import { GameProvider } from "./context/GameContext";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gfgame-pixel",
});

const terminalFont = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gfgame",
});

export const metadata = {
  title: "Our Journey — GF Game",
  description: "A pixel journey through places and memories.",
};

export default function GfgameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${pixelFont.variable} ${terminalFont.variable} fixed inset-0 z-[200] overflow-hidden`}
    >
      <GameProvider>{children}</GameProvider>
    </div>
  );
}
