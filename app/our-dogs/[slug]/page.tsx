import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dogs, getDogBySlug, getAllDogSlugs } from "@/lib/data/dogs";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllDogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dog = getDogBySlug(slug);
  if (!dog) return { title: "Dog Not Found" };
  return {
    title: `${dog.callName} — ${dog.registeredName}`,
    description: dog.bio.slice(0, 160),
  };
}

export default async function DogProfilePage({ params }: Props) {
  const { slug } = await params;
  const dog = getDogBySlug(slug);
  if (!dog) notFound();

  return (
    <>
      {/* 1. Portrait + info */}
      <section className="grid grid-cols-1 md:grid-cols-[5fr_4fr] min-h-screen">
        <ImagePlaceholder
          aspect="aspect-auto"
          label={`${dog.callName} — portrait`}
          className="min-h-[60vh] md:min-h-screen"
        />
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <SectionLabel className="mb-4">
            {dog.sex} &middot; {dog.color}
          </SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
            {dog.callName}
          </h1>
          {dog.japaneseName && (
            <p className="font-serif text-2xl text-charcoal/20 mt-1">
              {dog.japaneseName}
            </p>
          )}
          <p className="text-sm text-mist mt-2">{dog.registeredName}</p>

          {dog.titles.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {dog.titles.map((title) => (
                <span
                  key={title}
                  className="text-xs border border-bronze/30 text-bronze px-3 py-1"
                >
                  {title}
                </span>
              ))}
            </div>
          )}

          {/* Stats micro-grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8 pt-8 border-t border-charcoal/10">
            <div>
              <SectionLabel>Date of Birth</SectionLabel>
              <p className="text-sm text-charcoal mt-1">{dog.dateOfBirth}</p>
            </div>
            <div>
              <SectionLabel>Kennel</SectionLabel>
              <p className="text-sm text-charcoal mt-1">{dog.kennel}</p>
            </div>
            <div>
              <SectionLabel>Sire</SectionLabel>
              <p className="text-sm text-charcoal mt-1">{dog.sire}</p>
            </div>
            <div>
              <SectionLabel>Dam</SectionLabel>
              <p className="text-sm text-charcoal mt-1">{dog.dam}</p>
            </div>
          </div>

          {/* Health tests */}
          {dog.healthTests.length > 0 && (
            <div className="mt-8 pt-8 border-t border-charcoal/10">
              <SectionLabel className="mb-4">Health Testing</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {dog.healthTests.map((test) => (
                  <span
                    key={test.name}
                    className="text-xs border border-charcoal/10 text-mist px-3 py-1"
                  >
                    {test.name}: {test.result}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bio */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-mist leading-relaxed text-lg">{dog.bio}</p>
        </div>
      </section>

      {/* 2. Achievements — sticky heading left, timeline right */}
      {dog.achievements.length > 0 && (
        <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24 border-t border-charcoal/10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <div className="md:sticky md:top-32 md:self-start">
              <SectionLabel className="mb-4">Achievements</SectionLabel>
              <h2 className="font-serif text-3xl font-light text-charcoal">
                Record
              </h2>
            </div>
            <div className="border-l-2 border-bronze/30 pl-8 space-y-8">
              {dog.achievements.map((achievement, i) => (
                <div key={i}>
                  <p className="text-charcoal">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Gallery — contact sheet grid */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24 border-t border-charcoal/10">
        <SectionLabel className="mb-8">Gallery</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="col-span-2 row-span-2">
            <ImagePlaceholder
              aspect="aspect-square"
              label={`${dog.callName} — feature`}
            />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <ImagePlaceholder
                aspect="aspect-square"
                label={`${dog.callName} — ${i}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="px-8 md:px-16 lg:px-24 pb-24">
        <Link
          href="/our-dogs"
          className="link-underline text-sm text-bronze"
        >
          Back to The Pack
        </Link>
      </section>
    </>
  );
}
