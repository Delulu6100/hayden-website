/* =========================================================
   SPRITE ASSETS
========================================================= */

export function SpriteImage({
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
