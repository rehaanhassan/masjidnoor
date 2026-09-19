import Link from "next/link";

import { type Course } from "~/content/site";
import { coursePath, courseStatusLabel } from "~/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={coursePath(course.id)}
      className="border-line bg-surface-elevated hover:border-primary/40 group flex flex-col rounded-lg border p-6 shadow-sm transition-colors"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-ink text-2xl tracking-tight">
          {course.title}
        </h3>
        <span className="text-primary bg-primary-soft rounded px-2 py-0.5 text-xs font-semibold tracking-wide uppercase">
          {courseStatusLabel[course.status]}
        </span>
      </div>
      <p className="text-ink-muted mt-2 text-sm">
        {course.audience} · {course.schedule}
      </p>
      <p className="text-ink-muted mt-3 flex-1 text-sm leading-relaxed">
        {course.description}
      </p>
      <span className="text-primary group-hover:text-primary-deep mt-5 inline-flex items-center text-sm font-semibold">
        View programme
        <span
          aria-hidden
          className="ml-1 transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}
