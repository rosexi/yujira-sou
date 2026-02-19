import Link from "next/link";
import { KENNEL_NAME, KENNEL_NAME_JP, SOCIAL_LINKS } from "@/lib/constants";
import SectionLabel from "./SectionLabel";

export default function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10">
      <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8">
          {/* Kennel name */}
          <div>
            <p className="font-serif text-3xl font-light text-charcoal">
              {KENNEL_NAME}
            </p>
            <p className="font-serif text-lg text-charcoal/30 mt-1">
              {KENNEL_NAME_JP}
            </p>
            <p className="text-sm text-mist mt-4 max-w-xs">
              Shikoku Ken breeder and preservation kennel in San Francisco, California.
            </p>
          </div>

          {/* Pages */}
          <div>
            <SectionLabel className="mb-4">Pages</SectionLabel>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-mist hover:text-bronze transition-colors">
                Our Kennel
              </Link>
              <Link href="/the-breed" className="text-sm text-mist hover:text-bronze transition-colors">
                The Shikoku Ken
              </Link>
              <Link href="/puppies" className="text-sm text-mist hover:text-bronze transition-colors">
                Puppies
              </Link>
              <Link href="/contact" className="text-sm text-mist hover:text-bronze transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <SectionLabel className="mb-4">Connect</SectionLabel>
            <nav className="flex flex-col gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-mist hover:text-bronze transition-colors"
              >
                Instagram
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-sm text-mist hover:text-bronze transition-colors"
              >
                Email
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/5">
          <p className="text-xs text-mist/50">
            &copy; {new Date().getFullYear()} {KENNEL_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
