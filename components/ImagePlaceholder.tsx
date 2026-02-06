interface ImagePlaceholderProps {
  aspect?: string;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  aspect = "aspect-[4/3]",
  label = "Photo",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspect} bg-stone-dark flex items-center justify-center ${className}`}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-mist/50">
        {label}
      </span>
    </div>
  );
}
