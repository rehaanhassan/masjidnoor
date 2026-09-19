import Link from "next/link";

import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

const navLinks = [
  { label: "Programmes", href: "/#courses" },
  { label: "Community", href: "/#testimonials" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <a
        href="#main"
        className="bg-primary text-surface-elevated sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Reveal
        variant="down"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="font-display text-primary text-xl tracking-tight sm:text-2xl"
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-muted hover:text-ink text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#support"
            className="bg-accent text-ink hover:bg-accent-hover rounded-md px-4 py-2 text-sm font-semibold transition-colors"
          >
            Support
          </Link>
        </nav>

        <MobileNav links={navLinks} />
      </Reveal>
    </header>
  );
}

function MobileNav({
  links,
}: {
  links: readonly { label: string; href: string }[];
}) {
  return (
    <details className="group relative md:hidden">
      <summary
        className="text-ink border-line hover:bg-primary-soft flex cursor-pointer list-none items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors [&::-webkit-details-marker]:hidden"
        aria-label="Open menu"
      >
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">Close</span>
        <span aria-hidden className="flex flex-col gap-1">
          <span className="bg-ink block h-0.5 w-4 group-open:translate-y-1.5 group-open:rotate-45 transition-transform" />
          <span className="bg-ink block h-0.5 w-4 group-open:opacity-0 transition-opacity" />
          <span className="bg-ink block h-0.5 w-4 group-open:-translate-y-1.5 group-open:-rotate-45 transition-transform" />
        </span>
      </summary>
      <div className="border-line bg-surface-elevated absolute right-0 mt-3 w-56 overflow-hidden rounded-lg border shadow-lg">
        <nav className="flex flex-col py-2" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink hover:bg-primary-soft px-4 py-3 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#support"
            className="text-primary border-line hover:bg-primary-soft border-t px-4 py-3 text-sm font-semibold transition-colors"
          >
            Support the mosque
          </Link>
        </nav>
      </div>
    </details>
  );
}
