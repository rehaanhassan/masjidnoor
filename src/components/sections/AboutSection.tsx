import { ReadMore } from "~/components/ReadMore";
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
        <Reveal className="max-w-3xl border-accent border-l-4 pl-6 sm:pl-8">
          <h2
            id="about-heading"
            className="font-display text-ink text-3xl tracking-wide sm:text-4xl"
          >
            {about.title}
          </h2>
          <p className="text-primary mt-4 text-lg font-medium text-balance">
            {about.lead}
          </p>
          <ReadMore
            className="text-ink-muted mt-4 text-base leading-relaxed"
            clampClassName="line-clamp-5"
          >
            {about.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 first:mt-0">
                {paragraph}
              </p>
            ))}
          </ReadMore>

          <div className="mt-8 space-y-6">
            {about.hadiths.map((hadith) => (
              <figure key={hadith.arabic}>
                {hadith.attribution ? (
                  <p className="text-ink-muted text-sm">{hadith.attribution}</p>
                ) : null}
                <p className="text-primary font-display mt-2 text-xl tracking-wide">
                  {hadith.arabic}
                </p>
                <figcaption className="text-ink-muted mt-2 text-sm italic">
                  {hadith.translation}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <ul className="mt-16 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.highlights.map((value, index) => (
            <Reveal
              key={value.title}
              as="li"
              delayMs={index * 110}
              className="h-full"
            >
              <article className="border-line bg-surface-elevated flex h-full flex-col rounded-2xl border p-6">
                <p
                  className="text-accent font-display text-sm tracking-widest"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-ink mt-3 min-h-14 text-xl tracking-wide">
                  {value.title}
                </h3>
                <ReadMore
                  className="text-ink-muted mt-2 text-sm leading-relaxed"
                  clampClassName="line-clamp-4 min-h-[6.5rem]"
                >
                  <p>{value.description}</p>
                </ReadMore>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="border-line bg-surface-elevated flex h-full flex-col rounded-2xl border p-6">
              <h3 className="font-display text-ink text-2xl tracking-wide">
                {about.vision.title}
              </h3>
              <ReadMore
                className="text-ink-muted mt-3 text-sm leading-relaxed sm:text-base"
                clampClassName="line-clamp-5 min-h-[8.125rem]"
              >
                {about.vision.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </ReadMore>
            </article>
          </Reveal>
          <Reveal delayMs={110} className="h-full">
            <article className="border-line bg-surface-elevated flex h-full flex-col rounded-2xl border p-6">
              <h3 className="font-display text-ink text-2xl tracking-wide">
                {about.mission.title}
              </h3>
              <ReadMore
                className="text-ink-muted mt-3 text-sm leading-relaxed sm:text-base"
                clampClassName="line-clamp-5 min-h-[8.125rem]"
              >
                {about.mission.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </ReadMore>
            </article>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-ink text-2xl tracking-wide">
              Core values
            </h3>
          </Reveal>
          <ul className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
            {about.values.map((value, index) => (
              <Reveal
                key={value.title}
                as="li"
                delayMs={index * 90}
                className="h-full"
              >
                <article className="border-line bg-surface-elevated flex h-full flex-col rounded-2xl border p-6">
                  <h4 className="font-display text-ink min-h-14 text-xl tracking-wide">
                    {value.title}
                  </h4>
                  <ReadMore
                    className="text-ink-muted mt-3 text-sm leading-relaxed"
                    clampClassName="line-clamp-4 min-h-[6.5rem]"
                  >
                    <p>{value.description}</p>
                  </ReadMore>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
