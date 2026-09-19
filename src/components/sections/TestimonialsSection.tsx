import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function TestimonialsSection() {
  const { testimonials } = site;

  return (
    <section
      id="testimonials"
      className="bg-primary-soft py-20 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2
            id="testimonials-heading"
            className="font-display text-ink text-3xl tracking-tight sm:text-4xl"
          >
            {testimonials.title}
          </h2>
          <p className="text-ink-muted mt-3 text-base leading-relaxed">
            {testimonials.lead}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal
              key={item.name}
              as="li"
              delayMs={index * 110}
              className="flex flex-col"
            >
              <blockquote className="font-display text-ink text-xl leading-snug text-balance sm:text-[1.35rem]">
                <span aria-hidden className="text-accent mr-1">
                  “
                </span>
                {item.quote}
                <span aria-hidden className="text-accent">
                  ”
                </span>
              </blockquote>
              <footer className="mt-6">
                <p className="text-ink text-sm font-semibold">{item.name}</p>
                <p className="text-ink-muted text-xs">{item.role}</p>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
