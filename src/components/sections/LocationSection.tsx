import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function LocationSection() {
  const { contact, location, mosqueName } = site;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapsEmbedQuery)}&output=embed`;

  return (
    <section
      id="location"
      className="border-line border-b py-20 sm:py-24"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <h2
            id="location-heading"
            className="font-display text-ink text-3xl tracking-tight sm:text-4xl"
          >
            {location.title}
          </h2>
          <p className="text-ink-muted mt-3 text-base leading-relaxed">
            {location.lead}
          </p>

          <address className="text-ink mt-8 space-y-1 text-base leading-relaxed not-italic">
            {contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-surface-elevated hover:bg-primary-deep rounded-md px-5 py-3 text-sm font-semibold transition-colors"
            >
              Open in maps
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="border-line text-ink hover:bg-primary-soft rounded-md border px-5 py-3 text-sm font-semibold transition-colors"
            >
              Call {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={140} variant="fade">
          <div className="border-line relative aspect-4/3 overflow-hidden rounded-lg border">
            <iframe
              title={`Map showing ${mosqueName} at ${contact.addressLines.slice(1).join(", ")}`}
              src={embedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
