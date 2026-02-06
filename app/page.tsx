import type { Metadata } from "next";
import Link from "next/link";
import { KENNEL_NAME, KENNEL_NAME_JP } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";
import PullQuote from "@/components/PullQuote";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: `${KENNEL_NAME} — Shikoku Ken, San Francisco`,
};

export default function Home() {
  return (
    <>
      {/* 1. Hero — grid-cols-[3fr_5fr] */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[3fr_5fr]">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-0">
          <SectionLabel className="mb-6">
            Shikoku Ken &middot; San Francisco
          </SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1]">
            {KENNEL_NAME}
          </h1>
          <p className="font-serif text-lg text-charcoal/30 mt-2">
            {KENNEL_NAME_JP}
          </p>
          <p className="text-mist mt-6 max-w-sm leading-relaxed">
            A Shikoku Ken preservation kennel. Rooted in standard, guided
            by health, measured by the dogs themselves.
          </p>
        </div>
        <div className="relative">
          <ImagePlaceholder
            aspect="aspect-auto"
            label="Hero — Shikoku Ken in landscape"
            className="h-full min-h-[60vh] md:min-h-screen"
          />
        </div>
      </section>

      {/* 2. Mission quote — maximum breathing room */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <PullQuote>
            We do not breed to produce puppies. We breed to preserve a breed.
          </PullQuote>
        </div>
      </section>

      {/* 3. Photo + intro — grid-cols-[5fr_3fr], reversed from hero */}
      <section className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-0">
        <ImagePlaceholder
          aspect="aspect-auto"
          label="Kennel lifestyle"
          className="min-h-[50vh]"
        />
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <div className="w-12 h-px bg-bronze mb-8" />
          <SectionLabel className="mb-4">Our Approach</SectionLabel>
          <p className="text-mist leading-relaxed">
            Every kennel decision at Yujira Sou begins with the standard and
            ends with the dog. We health test comprehensively, evaluate
            honestly, and place deliberately. The Shikoku Ken is a rare breed
            — fewer than 8,000 exist worldwide. That rarity demands
            responsibility.
          </p>
          <Link
            href="/about"
            className="link-underline text-sm text-bronze mt-8 inline-block"
          >
            About our kennel
          </Link>
        </div>
      </section>

      {/* 4. Breed firsts teaser */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <div className="font-serif text-[120px] md:text-[180px] font-light text-stone-dark leading-none select-none">
            1st
          </div>
          <SectionLabel className="mt-4 mb-4">Breed Firsts</SectionLabel>
          <p className="text-mist leading-relaxed max-w-md">
            Yujira Sou dogs have earned firsts for the Shikoku Ken at the
            regional, national, and international level. Achievements that
            speak for the breed, not for us.
          </p>
          <Link
            href="/achievements"
            className="link-underline text-sm text-bronze mt-6 inline-block"
          >
            View achievements
          </Link>
        </div>
      </section>

      {/* 5. Philosophy snippet — full-bleed bg, text bottom-left */}
      <section className="relative min-h-[60vh] flex items-end">
        <ImagePlaceholder
          aspect="aspect-auto"
          label="Shikoku in mountain landscape"
          className="absolute inset-0 h-full"
        />
        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16 max-w-xl">
          <div className="bg-stone/90 backdrop-blur-sm p-8">
            <SectionLabel className="mb-4">Philosophy</SectionLabel>
            <p className="font-serif text-2xl font-light text-charcoal leading-snug">
              A breed preserved is not a breed frozen. It is a living standard,
              carried forward by dogs that can do what they were bred to do.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Affiliations */}
      <section className="border-t border-charcoal/10 py-12 px-8 md:px-16 lg:px-24">
        <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
          <SectionLabel>Affiliations</SectionLabel>
          {[
            "NIPPO",
            "North American Shikoku Club",
            "AKC FSS",
            "IABCA",
          ].map((club) => (
            <span
              key={club}
              className="font-serif text-lg text-charcoal/40"
            >
              {club}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
