type VideoProps = {
  src: string;
  poster: string;
  label: string;
  // Starts muted and loops, like a moving picture; the controls still let visitors pause it or turn the sound on.
  autoPlay?: boolean;
};

export default function Video({ src, poster, label, autoPlay = false }: VideoProps) {
  return (
    <video
      className="pp3-video"
      controls
      playsInline
      preload="metadata"
      poster={poster}
      src={src}
      aria-label={label}
      autoPlay={autoPlay}
      muted={autoPlay}
      loop={autoPlay}
    >
      <track kind="captions" />
    </video>
  );
}
