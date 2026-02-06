"use client";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-t border-charcoal/10 py-6">
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <span className="font-serif text-lg font-light text-charcoal pr-8">
          {question}
        </span>
        <span className="text-mist text-xl shrink-0 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="text-sm text-mist mt-4 max-w-xl leading-relaxed">
        {answer}
      </p>
    </details>
  );
}
