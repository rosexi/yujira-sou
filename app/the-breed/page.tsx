import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import PullQuote from "@/components/PullQuote";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "The Shikoku Ken",
  description:
    "An introduction to the Shikoku Ken — origins, temperament, the three virtues (Kan'i, Ryousei, Soboku), and what it means to live with this rare Japanese breed.",
};

const sportCards = [
  { title: "Conformation", description: "NIPPO, JKC, AKC Open, and IABCA evaluation systems." },
  { title: "Lure Coursing", description: "Natural prey drive makes them enthusiastic coursing participants." },
  { title: "Barn Hunt", description: "Keen nose and hunting instinct translate well to barn hunt trials." },
  { title: "Hiking & Trail", description: "Bred for mountain terrain — they are natural trail companions." },
  { title: "Rally Obedience", description: "With patient training, they can excel in rally environments." },
];

export default function TheBreedPage() {
  return (
    <>
      {/* 1. Hero — cinematic image with title overlay */}
      <section className="relative min-h-[80vh] flex items-end">
        <ImagePlaceholder
          aspect="aspect-auto"
          label="Shikoku Ken — dramatic mountain portrait"
          className="absolute inset-0 h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
          <SectionLabel className="mb-4 !text-stone/70">
            The Breed
          </SectionLabel>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-stone leading-[1.05]">
            The Shikoku Ken
          </h1>
        </div>
      </section>

      {/* 2. Origins text — sticky label left, prose right */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionLabel>Origins</SectionLabel>
          </div>
          <div className="max-w-2xl text-mist leading-relaxed space-y-6">
            <p>
              The Shikoku Ken is a medium-sized, primitive hunting dog native to
              the mountainous Kochi Prefecture on the island of Shikoku — the
              smallest of Japan&apos;s four main islands. Developed over centuries by
              the Matagi (traditional hunters), the Shikoku was bred to track
              and hold wild boar in steep, densely forested mountain terrain.
            </p>
            <p>
              Designated a Living Natural Monument of Japan in 1937, the breed
              numbers fewer than 8,000 worldwide. They are one of six native
              Japanese breeds (Nihon Ken) recognized by NIPPO, sitting between
              the smaller Shiba Inu and the larger Akita Inu in size.
            </p>
            <p>
              The breed standard calls for a dog of balanced proportions,
              well-developed musculature, and clean lines — athletic without
              being heavy, elegant without being fragile. Males stand 49-55cm
              at the shoulder; females 46-52cm. Their double coat comes in
              sesame (goma), red sesame (aka-goma), and black sesame
              (kuro-goma) varieties.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Temperament — Three Virtues, each different layout */}

      {/* Kan'i — text left, image right */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-0">
          <div className="px-8 md:px-16 lg:pl-24 flex flex-col justify-center py-16 md:py-0">
            <div className="font-serif text-6xl md:text-8xl font-light text-stone-dark leading-none select-none mb-6">
              悍威
            </div>
            <SectionLabel className="mb-4">Kan&apos;i — Bold Courage</SectionLabel>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-4">
              Spirited Bravery
            </h2>
            <p className="text-sm text-mist leading-relaxed max-w-sm">
              Kan&apos;i is the bold, spirited courage that defines the Shikoku&apos;s
              character. It is not aggression — it is the quiet confidence of a
              dog that does not back down when it matters. In the mountains,
              this meant holding ground against boar. In modern life, it
              manifests as an unflappable presence and an alertness that
              misses nothing.
            </p>
          </div>
          <ImagePlaceholder
            aspect="aspect-[4/3]"
            label="Kan'i — alert, confident stance"
            className="min-h-[50vh]"
          />
        </div>
      </section>

      {/* Ryousei — image left, text right (reversed) */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-0">
          <ImagePlaceholder
            aspect="aspect-[4/3]"
            label="Ryousei — gentle, bonded moment"
            className="min-h-[50vh] order-2 md:order-1"
          />
          <div className="px-8 md:px-16 lg:pr-24 flex flex-col justify-center py-16 md:py-0 order-1 md:order-2">
            <div className="font-serif text-6xl md:text-8xl font-light text-stone-dark leading-none select-none mb-6">
              良性
            </div>
            <SectionLabel className="mb-4">Ryousei — Good Nature</SectionLabel>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-4">
              Faithful Loyalty
            </h2>
            <p className="text-sm text-mist leading-relaxed max-w-sm">
              Ryousei is the good-natured loyalty that balances the Shikoku&apos;s
              fire. These dogs form deep, singular bonds with their people.
              They are not effusive — they will not overwhelm you with
              affection. But they are always present, always watchful, always
              yours. Their loyalty is earned, not given, and all the more
              valuable for it.
            </p>
          </div>
        </div>
      </section>

      {/* Soboku — full-bleed with overlay text */}
      <section className="relative min-h-[60vh] flex items-center">
        <ImagePlaceholder
          aspect="aspect-auto"
          label="Soboku — natural, unaffected portrait"
          className="absolute inset-0 h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16 max-w-lg">
          <div className="font-serif text-6xl md:text-8xl font-light text-stone/30 leading-none select-none mb-6">
            素朴
          </div>
          <SectionLabel className="mb-4 !text-stone/70">
            Soboku — Natural Artlessness
          </SectionLabel>
          <h2 className="font-serif text-3xl font-light text-stone mb-4">
            Honest Simplicity
          </h2>
          <p className="text-sm text-stone/80 leading-relaxed">
            Soboku is the quality of being natural and unaffected — a dog
            without artifice. The Shikoku should look like what it is: a
            working dog shaped by mountains and centuries of purpose. No
            exaggeration, no refinement for its own sake. Soboku is the
            virtue that keeps the breed honest.
          </p>
        </div>
      </section>

      {/* 4. Living with a Shikoku — narrow text with breakout pull quote */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-xl">
          <SectionLabel className="mb-6">Living with a Shikoku</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-8">
            Honest expectations
          </h2>
          <div className="text-mist leading-relaxed space-y-6">
            <p>
              The Shikoku Ken is not a dog for everyone, and we believe saying
              so clearly is a form of respect — both for potential owners and
              for the breed itself.
            </p>
            <p>
              They are intelligent, athletic, and independent. They will test
              boundaries. They have prey drive. They can be selective with
              other dogs. They require consistent, patient handling from
              someone who understands that compliance is earned through
              relationship, not demanded through force.
            </p>
          </div>
        </div>

        {/* Pull quote — breaks wider than text column */}
        <div className="max-w-3xl my-16">
          <PullQuote>
            A well-raised Shikoku is one of the most rewarding companions you
            will ever know. But &ldquo;well-raised&rdquo; is the operative phrase.
          </PullQuote>
        </div>

        <div className="max-w-xl text-mist leading-relaxed space-y-6">
          <p>
            In the right home — with secure fencing, regular exercise, mental
            stimulation, and an owner who respects their nature — a Shikoku
            is a deeply loyal, endlessly interesting companion. They are quiet
            in the house, athletic on the trail, and surprisingly gentle with
            the people they trust.
          </p>
          <p>
            We are always happy to discuss whether a Shikoku might be right
            for your situation. We would rather talk honestly and determine it
            is not a fit than place a dog in a home that is not prepared.
          </p>
        </div>
      </section>

      {/* 5. In Sport — horizontal scroll strip */}
      <section className="py-16 md:py-24 border-t border-charcoal/10">
        <div className="px-8 md:px-16 lg:px-24 mb-8">
          <SectionLabel className="mb-4">In Sport</SectionLabel>
          <h2 className="font-serif text-3xl font-light text-charcoal">
            The versatile Shikoku
          </h2>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-8 md:px-16 lg:px-24 pb-4 snap-x">
            {sportCards.map((card) => (
              <div
                key={card.title}
                className="w-72 md:w-80 shrink-0 snap-start"
              >
                <ImagePlaceholder
                  aspect="aspect-[3/4]"
                  label={card.title}
                />
                <h3 className="font-serif text-xl font-light text-charcoal mt-4">
                  {card.title}
                </h3>
                <p className="text-sm text-mist mt-2">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
