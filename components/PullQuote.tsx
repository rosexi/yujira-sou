interface PullQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function PullQuote({ children, className = "" }: PullQuoteProps) {
  return (
    <blockquote
      className={`font-serif text-3xl md:text-4xl lg:text-5xl italic font-light text-charcoal leading-snug ${className}`}
    >
      {children}
    </blockquote>
  );
}
