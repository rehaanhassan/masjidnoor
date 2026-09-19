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
    return { title: "Course" };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <section>
      <h2 className="font-display text-ink text-2xl tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-ink-muted flex gap-2 text-sm leading-relaxed sm:text-base"
          >
            <span className="text-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const related = getRelatedCourses(course.id);
  const applyHref = course.applyUrl ?? course.cta.href;

  return (
    <>
      <SiteHeader />

      <main id="main" className="pb-20 pt-32">
        <article className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/courses"
              className="text-primary hover:text-primary-deep text-sm font-semibold underline-offset-4 hover:underline"
            >
              ← All courses
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
            <Reveal delayMs={120} className="space-y-10">
              <div className="space-y-5">
                {course.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-ink-muted max-w-2xl text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {course.format ? (
                <p className="text-ink border-accent max-w-2xl border-l-4 pl-4 text-sm leading-relaxed">
                  {course.format}
                </p>
              ) : null}

              {course.fees ? (
                <section>
                  <h2 className="font-display text-ink text-2xl tracking-tight">
                    Fees
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {course.fees.items.map((item) => (
                      <li
                        key={item.label}
                        className="text-ink flex max-w-2xl items-baseline justify-between gap-6 text-sm sm:text-base"
                      >
                        <span className="text-ink-muted">{item.label}</span>
                        <span className="font-semibold">{item.amount}</span>
                      </li>
                    ))}
                  </ul>
                  {course.fees.notes?.map((note) => (
                    <p
                      key={note}
                      className="text-ink-muted mt-3 max-w-2xl text-sm leading-relaxed"
                    >
                      {note}
                    </p>
                  ))}
                </section>
              ) : null}

              {course.forWhom ? (
                <section>
                  <h2 className="font-display text-ink text-2xl tracking-tight">
                    {course.id === "alimiyyah"
                      ? "Who is the 'Ālimah Course For?"
                      : "Who this course is for"}
                  </h2>
                  <p className="text-ink-muted mt-3 max-w-2xl text-base leading-relaxed">
                    {course.forWhom.intro}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {course.forWhom.items.map((item) => (
                      <li
                        key={item}
                        className="text-ink-muted flex gap-2 text-sm leading-relaxed sm:text-base"
                      >
                        <span className="text-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {course.outcomes ? (
                <DetailList
                  title="What students will gain"
                  items={course.outcomes}
                />
              ) : null}

              {course.requirements ? (
                <DetailList
                  title="Entry requirements"
                  items={course.requirements}
                />
              ) : null}

              {course.admissions ? (
                <DetailList title="Admissions process" items={course.admissions} />
              ) : null}

              {course.curriculum ? (
                <section>
                  <h2 className="font-display text-ink text-2xl tracking-tight">
                    Year-by-year syllabus
                  </h2>
                  <p className="text-ink-muted mt-3 max-w-2xl text-sm leading-relaxed">
                    Weekday ʿĀlimiyyah syllabus review, July 2026. Lesson order
                    follows the published timetable.
                  </p>
                  <div className="mt-6 space-y-5">
                    {course.curriculum.map((year) => (
                      <div
                        key={year.year}
                        className="border-line bg-surface-elevated overflow-hidden rounded-xl border"
                      >
                        <h3 className="text-ink border-line border-b px-5 py-3 text-sm font-semibold tracking-wide uppercase">
                          {year.year}
                        </h3>
                        <ol className="divide-line divide-y">
                          {year.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={`${year.year}-${lessonIndex}-${lesson}`}
                              className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 px-5 py-2.5 text-sm"
                            >
                              <span className="text-ink-muted font-medium">
                                Lesson {lessonIndex + 1}
                              </span>
                              <span className="text-ink">{lesson}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </Reveal>

            <Reveal delayMs={200}>
              <aside className="border-line bg-surface-elevated rounded-2xl border p-6 lg:sticky lg:top-28">
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
                  <a
                    href={applyHref}
                    {...(applyHref.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="bg-primary text-surface-elevated hover:bg-primary-deep inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors"
                  >
                    {course.applyUrl ? "Apply online" : course.cta.label}
                  </a>
                  <Link
                    href="/#contact"
                    className="border-line text-ink hover:bg-primary-soft inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition-colors"
                  >
                    Contact the department
                  </Link>
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
                Other courses
              </h2>
            </Reveal>
            <ul className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal
                  key={item.id}
                  as="li"
                  delayMs={index * 90}
                  className="h-full"
                >
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
