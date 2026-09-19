import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function SupportSection() {
  const { support } = site;

  return (
    <section
      id="support"
      className="bg-accent-soft py-20 sm:py-24"
      aria-labelledby="support-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2
            id="support-heading"
            className="font-display text-ink text-3xl tracking-tight sm:text-4xl"
          >
            {support.title}
          </h2>
          <p className="text-primary mt-3 text-lg font-medium">{support.lead}</p>
          <p className="text-ink-muted mt-3 text-base leading-relaxed">
            {support.body}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {support.methods.map((method, index) => (
            <Reveal
              key={method.title}
              as="li"
              delayMs={index * 100}
              className="border-accent/25 bg-surface-elevated/60 rounded-lg border px-5 py-5"
            >
              <h3 className="text-ink text-base font-semibold">{method.title}</h3>
              <p className="text-ink-muted mt-2 text-sm leading-relaxed">
                {method.detail}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delayMs={160}>
          <a
            href={support.cta.href}
            className="bg-primary text-surface-elevated hover:bg-primary-deep mt-10 inline-flex rounded-md px-5 py-3 text-sm font-semibold transition-colors"
          >
            {support.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
