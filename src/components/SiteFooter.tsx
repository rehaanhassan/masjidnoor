import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-surface-elevated/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <Reveal>
          <p className="font-display text-surface-elevated text-2xl">
            {site.name}
          </p>
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
            <a
              href="/#courses"
              className="hover:text-surface-elevated transition-colors"
            >
              Programmes
            </a>
            <a
              href="/#location"
              className="hover:text-surface-elevated transition-colors"
            >
              Location
            </a>
            <a
              href="/#contact"
              className="hover:text-surface-elevated transition-colors"
            >
              Contact
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <Reveal
          variant="fade"
          className="text-surface-elevated/50 mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
        >
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>20 Cromwell Road, Luton, LU3 1DN</p>
        </Reveal>
      </div>
    </footer>
  );
}
