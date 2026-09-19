import { HeroSlider } from "~/components/HeroSlider";
import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function HeroSection() {
  const { hero, name } = site;

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 pt-28 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end lg:gap-16 lg:px-8 lg:pt-36 lg:pb-24">
        <div>
          <Reveal>
            <p className="text-primary text-sm font-semibold tracking-[0.22em] uppercase">
              {name} · {hero.kicker}
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <h1
              id="hero-heading"
              className="font-display text-ink mt-5 max-w-xl text-[2.65rem] leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.15rem]"
            >
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal delayMs={220}>
            <p className="text-ink-muted mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
              {hero.supporting}
            </p>
          </Reveal>

          <Reveal delayMs={320}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={hero.primaryCta.href}
                className="bg-accent text-ink hover:bg-accent-hover inline-flex min-h-12 items-center justify-center rounded-md px-7 py-3.5 text-base font-semibold transition-colors"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="border-primary text-primary hover:bg-primary-soft inline-flex min-h-12 items-center justify-center rounded-md border px-7 py-3.5 text-base font-semibold transition-colors"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={180}>
          <HeroSlider slides={hero.slides} />
        </Reveal>
      </div>
    </section>
  );
}
