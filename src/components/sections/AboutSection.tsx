import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function AboutSection() {
  const { about } = site;

  return (
    <section
      id="about"
      className="arch-pattern border-line border-b py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl border-accent border-l-4 pl-6 sm:pl-8">
          <h2
            id="about-heading"
            className="font-display text-ink text-3xl tracking-wide sm:text-4xl"
          >
            {about.title}
          </h2>
          <p className="text-primary mt-4 text-lg font-medium text-balance">
            {about.lead}
          </p>
          <p className="text-ink-muted mt-4 text-base leading-relaxed">
            {about.body}
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {about.values.map((value, index) => (
            <Reveal
              key={value.title}
              as="li"
              delayMs={index * 110}
              className="border-accent/40 border-t pt-6"
            >
              <p
                className="text-accent font-display text-sm tracking-widest"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-ink mt-3 text-xl tracking-wide">
                {value.title}
              </h3>
              <p className="text-ink-muted mt-2 text-sm leading-relaxed">
                {value.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
