import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CourseCard } from "~/components/CourseCard";
import { Reveal } from "~/components/Reveal";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { site } from "~/content/site";
import {
  courseStatusLabel,
  getCourseBySlug,
  getRelatedCourses,
} from "~/lib/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.courses.items.map((course) => ({ slug: course.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Programme" };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const related = getRelatedCourses(course.id);

  return (
    <>
      <SiteHeader />

      <main id="main" className="pb-20 pt-28">
        <article className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/courses"
              className="text-primary hover:text-primary-deep text-sm font-semibold underline-offset-4 hover:underline"
            >
              ← All programmes
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-primary bg-primary-soft rounded px-2.5 py-1 text-xs font-semibold tracking-wide uppercase">
                {courseStatusLabel[course.status]}
              </span>
              <p className="text-ink-muted text-sm">
                {course.audience} · {course.schedule}
              </p>
            </div>

            <h1 className="font-display text-ink mt-4 text-4xl tracking-tight sm:text-5xl">
              {course.title}
            </h1>
            <p className="text-ink-muted mt-5 max-w-2xl text-lg leading-relaxed">
              {course.description}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:items-start">
            <Reveal delayMs={120} className="space-y-5">
              {course.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-ink-muted max-w-2xl text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delayMs={200}>
              <aside className="border-line bg-surface-elevated rounded-2xl border p-6">
                <p className="text-ink text-sm font-semibold">What to expect</p>
                <ul className="mt-4 space-y-3">
                  {course.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-ink-muted flex gap-2 text-sm leading-relaxed"
                    >
                      <span className="text-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={course.cta.href}
                    className="bg-primary text-surface-elevated hover:bg-primary-deep inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors"
                  >
                    {course.cta.label}
                  </Link>
                  <a
                    href={site.contact.whatsappChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-line text-ink hover:bg-primary-soft inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition-colors"
                  >
                    WhatsApp channel
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
        </article>

        {related.length > 0 ? (
          <section
            className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8"
            aria-labelledby="other-programmes-heading"
          >
            <Reveal>
              <h2
                id="other-programmes-heading"
                className="font-display text-ink text-2xl tracking-tight sm:text-3xl"
              >
                Other programmes
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.id} as="li" delayMs={index * 90}>
                  <CourseCard course={item} />
                </Reveal>
              ))}
            </ul>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </>
  );
}
