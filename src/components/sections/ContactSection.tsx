import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function ContactSection() {
  const { contactSection, contact } = site;

  const methods = [
    {
      label: "Telephone",
      value: contact.phoneDisplay,
      href: `tel:${contact.phone}`,
      hint: "Call the mosque office",
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      hint: "Write to us anytime",
    },
    {
      label: "WhatsApp",
      value: contact.whatsappChannelLabel,
      href: contact.whatsappChannelUrl,
      hint: "Official updates and reminders",
      external: true,
    },
  ] as const;

  return (
    <section
      id="contact"
      className="py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2
            id="contact-heading"
            className="font-display text-ink text-3xl tracking-tight sm:text-4xl"
          >
            {contactSection.title}
          </h2>
          <p className="text-ink-muted mt-3 text-base leading-relaxed">
            {contactSection.lead}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {methods.map((method, index) => (
            <Reveal key={method.label} as="li" delayMs={index * 100}>
              <a
                href={method.href}
                {...("external" in method && method.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="border-line bg-surface-elevated hover:border-primary/40 group flex h-full flex-col rounded-2xl border p-6 transition-colors"
              >
                <p className="text-ink-muted text-xs font-semibold tracking-[0.16em] uppercase">
                  {method.label}
                </p>
                <p className="font-display text-ink group-hover:text-primary mt-4 text-xl tracking-tight">
                  {method.value}
                </p>
                <p className="text-ink-muted mt-2 text-sm">{method.hint}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
