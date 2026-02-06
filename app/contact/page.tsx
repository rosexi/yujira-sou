import type { Metadata } from "next";
import { SOCIAL_LINKS, LOCATION } from "@/lib/constants";
import { faqs } from "@/lib/data/achievements";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Yujira Sou. Inquiries about the Shikoku Ken, puppy availability, and frequently asked questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* 50/50 split: image left, info right */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <ImagePlaceholder
          aspect="aspect-auto"
          label="Yujira Sou — kennel life"
          className="min-h-[50vh] md:min-h-screen"
        />
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <SectionLabel className="mb-6">Contact</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-8">
            Get in Touch
          </h1>
          <p className="text-mist leading-relaxed max-w-md mb-12">
            We welcome inquiries about the Shikoku Ken, our breeding program,
            and puppy availability. We respond to every genuine inquiry —
            please allow a few days for our reply.
          </p>

          <div className="space-y-8">
            <div>
              <SectionLabel className="mb-2">Email</SectionLabel>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-charcoal hover:text-bronze transition-colors"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
            <div>
              <SectionLabel className="mb-2">Location</SectionLabel>
              <p className="text-charcoal">{LOCATION}</p>
            </div>
            <div>
              <SectionLabel className="mb-2">Social</SectionLabel>
              <div className="flex gap-6">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal hover:text-bronze transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal hover:text-bronze transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-2xl">
          <SectionLabel className="mb-6">FAQ</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-8">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
