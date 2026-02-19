import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Our Kennel",
  description:
    "The story and philosophy behind Yujira Sou — a Shikoku Ken breeder in San Francisco, California dedicated to breed preservation, health testing, and responsible puppy placement.",
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
]);

const philosophyCards = [
  {
    number: "01",
    title: "Breed Standard First",
    text: "Every kennel decision begins with the Nihon Ken standard. Structure, temperament, and type are not negotiable. We evaluate our dogs honestly, acknowledge their faults openly, and improve — not replicate.",
  },
  {
    number: "02",
    title: "Health as Foundation",
    text: "Comprehensive health testing is the baseline, not the ceiling. OFA hips, patellas, eyes, and DNA panels are completed before any pairing is considered. We share results publicly because transparency benefits the breed.",
  },
  {
    number: "03",
    title: "Thoughtful Placement",
    text: "We breed rarely and place deliberately. Every puppy goes to a home we have vetted thoroughly — not for perfection, but for commitment. We remain a resource for every dog we produce, for the life of that dog.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {/* 1. Story opening — full-bleed image, overlapping text */}
      <section>
        <ImagePlaceholder
          aspect="aspect-[16/9]"
          label="Kennel property — wide shot"
          className="w-full"
        />
        <div className="mx-8 md:mx-16 lg:mx-32 -mt-16 md:-mt-24 relative z-10 bg-stone px-8 md:px-16 pt-12 pb-16 md:pb-24">
          <SectionLabel className="mb-6">Our Story</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-8">
            Yujira Sou
          </h1>
          <div className="columns-1 md:columns-2 gap-12 text-mist leading-relaxed">
            <p className="mb-6">
              Yujira Sou was founded in San Francisco with a single purpose: to
              contribute meaningfully to the preservation of the Shikoku Ken
              outside Japan. We are a small kennel — intentionally so. Our dogs
              live as family members first. They sleep on our couches, hike our
              trails, and remind us daily why this breed matters.
            </p>
            <p className="mb-6">
              The name Yujira Sou (優鯨荘) translates loosely to &ldquo;lodge of the
              honorable whale&rdquo; — a nod to the Pacific coastline of San
              Francisco and the maritime heritage of Shikoku, the island
              prefecture where the breed originated. We chose it as a reminder
              that these dogs come from a place shaped by ocean and mountain
              alike.
            </p>
            <p className="mb-6">
              Our kennel program is built on dogs we have raised, trained,
              shown, and lived with. We know their strengths because we see
              them every day. We know their limitations because we are honest
              about them. That honesty is the foundation of everything we do.
            </p>
            <p>
              We are members of NIPPO, the North American Shikoku Club, and
              participate in both Japanese and international show systems. We
              believe in proving our dogs in the ring and on the trail — and in
              being transparent about the results.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy cards — 12-col grid, mixed spans */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <SectionLabel className="mb-8">Our Philosophy</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tall card */}
          <div className="md:col-span-5 bg-parchment p-8 md:p-12 flex flex-col justify-between">
            <span className="font-serif text-6xl font-light text-stone-dark">
              {philosophyCards[0].number}
            </span>
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
                {philosophyCards[0].title}
              </h3>
              <p className="text-sm text-mist leading-relaxed">
                {philosophyCards[0].text}
              </p>
            </div>
          </div>
          {/* Two stacked cards */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {philosophyCards.slice(1).map((card) => (
              <div key={card.number} className="bg-parchment p-8 md:p-12">
                <span className="font-serif text-6xl font-light text-stone-dark">
                  {card.number}
                </span>
                <h3 className="font-serif text-2xl font-light text-charcoal mt-6 mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Code of Ethics — ultra-narrow, book-page feel */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-32">
        <div className="max-w-lg">
          <SectionLabel className="mb-6">Code of Ethics</SectionLabel>
          <h2 className="font-serif text-3xl font-light text-charcoal mb-8">
            What we hold ourselves to
          </h2>
          <ol className="space-y-6">
            {[
              "Health test all kennel dogs to OFA standards at minimum.",
              "Breed only dogs that meet or exceed the Nihon Ken standard in structure and temperament.",
              "Place puppies with approved families under contract, with lifetime return guarantee.",
              "Share health results, pedigrees, and evaluations openly with the community.",
              "Never breed more frequently than the health and wellbeing of our dogs allow.",
              "Support and mentor new Shikoku Ken owners regardless of where their dog was bred.",
              "Participate actively in breed evaluation through NIPPO, AKC, and international systems.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-serif text-2xl font-light text-stone-dark shrink-0 w-8">
                  {i + 1}
                </span>
                <p className="text-sm text-mist leading-relaxed pt-2">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Club involvement — newspaper two-column */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24 border-t border-charcoal/10">
        <SectionLabel className="mb-8">Club Involvement</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <div className="md:pr-12 md:border-r md:border-charcoal/10">
            <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
              NIPPO
            </h3>
            <p className="text-sm text-mist leading-relaxed mb-6">
              We are active members of NIPPO (Nihon Ken Hozonkai), the primary
              registry and preservation organization for Japan&apos;s native breeds.
              NIPPO evaluation is the gold standard for Nihon Ken breed
              assessment — it evaluates the whole dog against a detailed
              standard that has remained largely unchanged since 1934.
            </p>
            <p className="text-sm text-mist leading-relaxed">
              Our dogs are shown at NIPPO regionals and the Grand National. We
              believe this evaluation system offers the most rigorous and
              breed-specific assessment available.
            </p>
          </div>
          <div className="md:pl-12">
            <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
              North American Shikoku Club
            </h3>
            <p className="text-sm text-mist leading-relaxed mb-6">
              The NASC serves as the breed community hub for Shikoku Ken
              owners and kennels in North America. We participate in club
              events, contribute to breed education, and support the club&apos;s
              mission of responsible stewardship.
            </p>
            <Link
              href="/contact"
              className="link-underline text-sm text-bronze"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
