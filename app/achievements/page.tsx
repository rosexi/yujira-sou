import type { Metadata } from "next";
import { achievements, showResults } from "@/lib/data/achievements";
import { breadcrumbJsonLd } from "@/lib/seo";
import SectionLabel from "@/components/SectionLabel";
import AchievementRow from "@/components/AchievementRow";

export const metadata: Metadata = {
  title: "Achievements & Show Results",
  description:
    "Breed firsts, show results, and titles earned by Yujira Sou Shikoku Ken in NIPPO, AKC, and IABCA shows. Based in San Francisco, California.",
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", href: "/" },
  { name: "Achievements", href: "/achievements" },
]);

export default function AchievementsPage() {
  const breedFirsts = achievements.filter((a) => a.category === "breed-first");
  const titleAbbreviations = ["NIPPO CH", "JKC CH", "IABCA CH", "AKC FSS", "CGC", "TKN"];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="px-8 md:px-16 lg:px-24 pt-32 md:pt-40 pb-16">
        <SectionLabel className="mb-6">Record</SectionLabel>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
          Achievements
        </h1>
        <p className="text-mist mt-4 max-w-xl leading-relaxed">
          We do not chase titles for their own sake. But we believe in proving
          our dogs through established evaluation systems — and in sharing
          the results openly.
        </p>
      </section>

      {/* 1. Breed Firsts */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24 border-t border-charcoal/10">
        <SectionLabel className="mb-8">Breed Firsts</SectionLabel>
        <div className="divide-y divide-charcoal/10">
          {breedFirsts.map((achievement, i) => (
            <AchievementRow key={i} achievement={achievement} />
          ))}
        </div>
      </section>

      {/* 2. Show Results — editorial data table */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24 border-t border-charcoal/10">
        <SectionLabel className="mb-8">Show Results</SectionLabel>

        {/* Header row */}
        <div className="hidden md:grid grid-cols-[2fr_3fr_1fr_1fr] gap-4 pb-4 border-b border-charcoal/10">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-mist">
            Date
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-mist">
            Show
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-mist">
            Dog
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-mist">
            Result
          </span>
        </div>

        {/* Result rows */}
        <div className="divide-y divide-charcoal/5">
          {showResults.map((result, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[2fr_3fr_1fr_1fr] gap-2 md:gap-4 py-4"
            >
              <span className="text-sm text-mist">{result.date}</span>
              <span className="text-sm text-charcoal">{result.show}</span>
              <span className="text-sm text-bronze">{result.dog}</span>
              <span className="text-sm text-charcoal">{result.placement}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Performance Titles — horizontal scroll of oversized abbreviations */}
      <section className="py-16 md:py-24 border-t border-charcoal/10">
        <div className="px-8 md:px-16 lg:px-24 mb-8">
          <SectionLabel>Titles Represented</SectionLabel>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-12 md:gap-16 px-8 md:px-16 lg:px-24 pb-4">
            {titleAbbreviations.map((title) => (
              <span
                key={title}
                className="font-serif text-5xl md:text-7xl font-light text-charcoal/15 whitespace-nowrap shrink-0 select-none"
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
