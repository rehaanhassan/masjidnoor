import Link from "next/link";

import { Reveal } from "~/components/Reveal";
import { SiteLogo } from "~/components/SiteLogo";
import { site } from "~/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-surface-elevated/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <Reveal>
          <div className="inline-flex rounded-md bg-white px-2 py-1.5">
            <SiteLogo className="h-14 w-auto max-w-[8.5rem] object-contain sm:h-16 sm:max-w-[10rem]" />
          </div>
          <p className="mt-3 text-sm text-white/80">at {site.mosqueName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
            Visit
          </p>
          <address className="mt-3 space-y-1 text-sm leading-relaxed text-white/70 not-italic">
            {site.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </Reveal>

        <Reveal delayMs={180}>
          <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a
                className="hover:text-surface-elevated transition-colors"
                href={`mailto:${site.contact.email}`}
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-surface-elevated transition-colors"
                href={`tel:${site.contact.phone}`}
              >
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="hover:text-surface-elevated transition-colors"
                href={site.contact.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp channel
              </a>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/#courses"
              className="hover:text-surface-elevated transition-colors"
            >
              Programmes
            </Link>
            <Link
              href="/#location"
              className="hover:text-surface-elevated transition-colors"
            >
              Location
            </Link>
            <Link
              href="/#contact"
              className="hover:text-surface-elevated transition-colors"
            >
              Contact
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <Reveal
          variant="fade"
          className="text-surface-elevated/50 mx-auto flex max-w-6xl px-4 py-5 text-xs sm:px-6 lg:px-8"
        >
          <p>20 Cromwell Road, Luton, LU3 1DN</p>
        </Reveal>
      </div>
    </footer>
  );
}
