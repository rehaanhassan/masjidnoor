import Link from "next/link";

import { Reveal } from "~/components/Reveal";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-primary text-sm font-semibold tracking-wide uppercase">
          404
        </p>
        <h1 className="font-display text-ink mt-3 text-4xl tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="text-ink-muted mt-4 max-w-md text-base leading-relaxed">
          That page does not exist or may have moved. Return home to find
          programmes, location details, and how to get in touch.
        </p>
        <Link
          href="/"
          className="bg-primary text-surface-elevated hover:bg-primary-deep mt-8 inline-flex w-fit rounded-md px-5 py-3 text-sm font-semibold transition-colors"
        >
          Back to home
        </Link>
      </Reveal>
    </main>
  );
}
