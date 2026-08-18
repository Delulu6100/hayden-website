/* =========================================================
   SHARED KEYFRAMES
========================================================= */

export function GameKeyframes() {
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
