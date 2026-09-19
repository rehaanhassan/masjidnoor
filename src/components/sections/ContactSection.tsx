import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function ContactSection() {
  const { contactSection, contact } = site;

  const methods = [
    {
      label: "Telephone",
      value: contact.phoneDisplay,
      hint: contact.department,
      action: { href: `tel:${contact.phone}`, label: "Call" },
    },
    {
      label: "Email",
      value: contact.email,
      hint: "Alimiyyah Girls Department",
      action: { href: `mailto:${contact.email}`, label: "Email" },
    },
    {
      label: "Apply",
      value: "ʿĀlimiyyah application",
      hint: "Online admissions form",
      action: {
        href: contact.applyUrl,
        label: "Apply",
        external: true,
      },
    },
    {
      label: "WhatsApp",
      value: "Official channel",
      hint: "Updates and reminders",
      action: {
        href: contact.whatsappChannelUrl,
        label: "Channel",
        external: true,
      },
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

        <ul className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, index) => (
            <Reveal
              key={method.label}
              as="li"
              delayMs={index * 100}
              className="h-full"
            >
              <article className="border-line bg-surface-elevated flex h-full min-h-[17rem] flex-col rounded-2xl border p-6">
                <p className="text-ink-muted text-xs font-semibold tracking-[0.16em] uppercase">
                  {method.label}
                </p>
                <p className="font-display text-ink mt-4 min-h-14 text-lg leading-snug tracking-tight wrap-break-word">
                  {method.value}
                </p>
                <p className="text-ink-muted mt-2 min-h-10 text-sm">
                  {method.hint}
                </p>
                <a
                  href={method.action.href}
                  {...("external" in method.action && method.action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="bg-primary text-surface-elevated hover:bg-primary-deep mt-auto inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  {method.action.label}
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
