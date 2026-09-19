import { ReadMore } from "~/components/ReadMore";
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

        <ul className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal
              key={item.name}
              as="li"
              delayMs={index * 110}
              className="h-full"
            >
              <article className="border-line bg-surface-elevated flex h-full flex-col rounded-2xl border p-6">
                <blockquote className="text-ink flex-1 text-sm leading-relaxed sm:text-base">
                  <ReadMore clampClassName="line-clamp-6 min-h-[9.75rem]">
                    <p>
                      <span aria-hidden className="text-accent font-display mr-1 text-xl">
                        “
                      </span>
                      {item.quote}
                      <span aria-hidden className="text-accent font-display text-xl">
                        ”
                      </span>
                    </p>
                  </ReadMore>
                </blockquote>
                <footer className="mt-6">
                  <p className="text-ink text-sm font-semibold">{item.name}</p>
                  <p className="text-ink-muted text-xs">{item.role}</p>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
