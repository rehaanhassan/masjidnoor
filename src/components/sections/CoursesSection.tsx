import Link from "next/link";

import { CourseCard } from "~/components/CourseCard";
import { Reveal } from "~/components/Reveal";
import { site } from "~/content/site";

export function CoursesSection() {
  const { courses } = site;

  return (
    <section
      id="courses"
      className="bg-primary-soft py-20 sm:py-24"
      aria-labelledby="courses-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="courses-heading"
              className="font-display text-ink text-3xl tracking-tight sm:text-4xl"
            >
              {courses.title}
            </h2>
            <p className="text-ink-muted mt-3 text-base leading-relaxed">
              {courses.lead}
            </p>
          </div>
          <Link
            href="/courses"
            className="text-primary hover:text-primary-deep text-sm font-semibold underline-offset-4 hover:underline"
          >
            View all courses
          </Link>
        </Reveal>

        <ul className="mt-12 grid items-stretch gap-5 md:grid-cols-2">
          {courses.items.map((course, index) => (
            <Reveal key={course.id} as="li" delayMs={index * 90} className="h-full">
              <CourseCard course={course} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
