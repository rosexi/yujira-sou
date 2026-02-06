interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
}

export default function TimelineStep({ number, title, description }: TimelineStepProps) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-charcoal/10" />
      {/* Dot */}
      <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-bronze" />
      <div>
        <span className="font-serif text-3xl font-light text-charcoal/20">
          {String(number).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-xl font-light text-charcoal mt-2">
          {title}
        </h3>
        <p className="text-sm text-mist mt-2 max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
