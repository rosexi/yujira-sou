import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import PullQuote from "@/components/PullQuote";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import TimelineStep from "@/components/TimelineStep";

export const metadata: Metadata = {
  title: "Puppies",
  description:
    "Information about Yujira Sou's breeding philosophy, puppy placement process, and what we look for in prospective families.",
};

const priorities = [
  {
    title: "Commitment to the Breed",
    text: "We look for families who have researched the Shikoku Ken thoroughly and understand what they are signing up for. Enthusiasm is welcome. Naivety is not.",
  },
  {
    title: "Appropriate Living Situation",
    text: "Secure fencing is non-negotiable. Access to trails or open space is strongly preferred. The Shikoku is an athletic, active breed — they need room to move.",
  },
  {
    title: "Experience with Primitive Breeds",
    text: "Prior experience with Nihon Ken, Nordic breeds, or other primitive types is a significant advantage. These dogs do not behave like retrievers, and the adjustment can be difficult for first-time owners.",
  },
  {
    title: "Willingness to Stay Connected",
    text: "We want to hear from our families. Updates, photos, questions, challenges — we are a resource for the life of the dog, and we take that seriously.",
  },
];

const processSteps = [
  {
    title: "Application & Conversation",
    description:
      "We begin with a written application followed by extended conversation — phone, video, or in person. We want to understand your lifestyle, experience, and expectations. We are equally happy to answer your questions about us.",
  },
  {
    title: "Waitlist",
    description:
      "Approved applicants join our waitlist. We breed infrequently — typically one litter every two to three years. Waitlist position does not guarantee a puppy from any specific litter.",
  },
  {
    title: "Litter Announcement",
    description:
      "When a breeding is confirmed, we notify waitlist families with details about the pairing, our goals for the litter, and expected timeline.",
  },
  {
    title: "Puppy Evaluation & Matching",
    description:
      "We evaluate puppies at multiple stages for structure, temperament, and drive. We match puppies to families based on compatibility — not first-come, first-served selection.",
  },
  {
    title: "Placement & Support",
    description:
      "Puppies go home at 10-12 weeks with health records, microchip, initial vaccinations, and a comprehensive puppy packet. We remain available for guidance throughout the dog's life.",
  },
];

export default function PuppiesPage() {
  return (
    <>
      {/* 1. Philosophy — image left, text right */}
      <section className="grid grid-cols-1 md:grid-cols-[2fr_5fr] min-h-[60vh]">
        <ImagePlaceholder
          aspect="aspect-auto"
          label="Shikoku Ken puppies"
          className="min-h-[40vh] md:min-h-[60vh]"
        />
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <SectionLabel className="mb-6">Puppies</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-8">
            Puppy Information
          </h1>
          <div className="max-w-2xl text-mist leading-relaxed space-y-6">
            <p>
              We breed rarely and with intention. Every litter at Yujira Sou
              is planned months or years in advance, with specific goals for
              breed improvement and preservation. We do not breed to meet
              demand — we breed when the right pairing presents itself.
            </p>
            <p>
              Our puppies are raised in our home, exposed to daily life from
              the start. Early neurological stimulation, socialization with
              people and dogs, and exposure to varied environments are part
              of every puppy&apos;s first weeks.
            </p>
          </div>

          {/* Border-left pull quote inline */}
          <div className="border-l-2 border-bronze/30 pl-6 my-8 max-w-lg">
            <p className="font-serif text-xl italic font-light text-charcoal">
              We would rather have a puppy wait for the right home than rush
              a placement that does not serve the dog.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What we look for */}
      <section className="bg-parchment py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <SectionLabel className="mb-6">What We Look For</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-12">
          In prospective families
        </h2>
        <div className="space-y-8 max-w-2xl">
          {priorities.map((item, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr] gap-6">
              <span className="font-serif text-4xl font-light text-charcoal/[0.15] leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl font-light text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The process — vertical timeline */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <SectionLabel className="mb-6">The Process</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-12">
          From application to placement
        </h2>
        <div className="max-w-2xl space-y-12">
          {processSteps.map((step, i) => (
            <TimelineStep
              key={i}
              number={i + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 lg:px-24 pb-24 md:pb-32">
        <div className="max-w-xl">
          <PullQuote className="mb-8 !text-3xl">
            Ready to start the conversation?
          </PullQuote>
          <Link
            href="/contact"
            className="link-underline text-sm text-bronze"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
