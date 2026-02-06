interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-sans text-[10px] uppercase tracking-[0.3em] text-bronze block ${className}`}
    >
      {children}
    </span>
  );
}
