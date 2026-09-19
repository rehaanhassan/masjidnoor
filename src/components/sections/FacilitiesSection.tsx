import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function FacilitiesSection() {
  const { facilities } = site;

  return (
    <section
      id="facilities"
      className="border-line bg-surface-elevated border-b py-16 sm:py-20"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h2
            id="facilities-heading"
            className="font-display text-ink max-w-md text-3xl tracking-wide sm:text-4xl"
          >
            {facilities.title}
          </h2>
          <p className="text-ink-muted max-w-md text-base leading-relaxed lg:text-right">
            {facilities.lead}
          </p>
        </Reveal>

        <ul className="divide-line border-line mt-12 divide-y border-y">
          {facilities.items.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delayMs={index * 70}
              className="grid gap-2 py-5 sm:grid-cols-[minmax(9rem,14rem)_1fr] sm:items-baseline sm:gap-8"
            >
              <h3 className="font-display text-ink text-lg tracking-wide">
                {item.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
