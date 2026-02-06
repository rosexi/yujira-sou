import Link from "next/link";
import { Dog } from "@/lib/types";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionLabel from "./SectionLabel";

interface DogCardProps {
  dog: Dog;
  featured?: boolean;
}

export default function DogCard({ dog, featured = false }: DogCardProps) {
  return (
    <Link
      href={`/our-dogs/${dog.slug}`}
      className="group block"
    >
      <div className="overflow-hidden">
        <ImagePlaceholder
          aspect={featured ? "aspect-[4/3]" : "aspect-[3/4]"}
          label={dog.callName}
          className="transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4">
        <SectionLabel>
          {dog.sex} &middot; {dog.color}
        </SectionLabel>
        <h3 className="font-serif text-2xl font-light text-charcoal mt-1">
          {dog.callName}
        </h3>
        <p className="text-sm text-mist mt-1">{dog.registeredName}</p>
        {dog.titles.length > 0 && (
          <p className="text-xs text-bronze mt-2">
            {dog.titles.join(" / ")}
          </p>
        )}
      </div>
    </Link>
  );
}
