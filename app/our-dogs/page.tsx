import type { Metadata } from "next";
import { dogs } from "@/lib/data/dogs";
import SectionLabel from "@/components/SectionLabel";
import DogCard from "@/components/DogCard";

export const metadata: Metadata = {
  title: "The Pack",
  description:
    "Meet the Shikoku Ken of Yujira Sou — our foundation dogs, imports, and the next generation.",
};

export default function OurDogsPage() {
  const featured = dogs.filter((d) => d.featured);
  const remaining = dogs.filter((d) => !d.featured);

  return (
    <>
      <section className="px-8 md:px-16 lg:px-24 pt-32 md:pt-40 pb-16">
        <SectionLabel className="mb-6">Our Dogs</SectionLabel>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
          The Pack
        </h1>
        <p className="text-mist mt-4 max-w-xl leading-relaxed">
          Each dog at Yujira Sou has been selected for breed type, health,
          and temperament. They are family first, show dogs second, and
          kennel stock by careful intention.
        </p>
      </section>

      <section className="px-8 md:px-16 lg:px-24 pb-24 md:pb-32">
        {/* Featured dogs — asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {featured[0] && (
            <div className="md:col-span-7">
              <DogCard dog={featured[0]} featured />
            </div>
          )}
          {featured[1] && (
            <div className="md:col-span-5">
              <DogCard dog={featured[1]} />
            </div>
          )}
        </div>

        {/* Remaining dogs */}
        {remaining.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
            {remaining.map((dog) => (
              <div key={dog.slug} className="md:col-span-4">
                <DogCard dog={dog} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
