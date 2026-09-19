import type { Metadata } from "next";

import { CourseCard } from "~/components/CourseCard";
import { Reveal } from "~/components/Reveal";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { site } from "~/content/site";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "The ʿĀlimiyyah programme and other courses for sisters at Jamiatus Salihat, Masjid Noor Luton.",
};

export default function CoursesPage() {
  const { courses, name } = site;

  return (
    <>
      <SiteHeader />

      <main id="main" className="pb-20 pt-32">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-primary text-sm font-semibold tracking-wide uppercase">
              Learning at {name}
            </p>
            <h1 className="font-display text-ink mt-3 text-4xl tracking-tight sm:text-5xl">
              {courses.title}
            </h1>
            <p className="text-ink-muted mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
              {courses.lead} Choose a course to see who it is for, how to apply,
              and how to enquire.
            </p>
          </Reveal>

          <ul className="mt-14 grid items-stretch gap-5 md:grid-cols-2">
            {courses.items.map((course, index) => (
              <Reveal
                key={course.id}
                as="li"
                delayMs={index * 90}
                className="h-full"
              >
                <CourseCard course={course} />
              </Reveal>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
