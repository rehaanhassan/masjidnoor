import { site, type Course } from "~/content/site";

export const courseStatusLabel = {
  open: "Enrolment open",
  waitlist: "Waitlist",
} as const;

export function getCourseBySlug(slug: string): Course | undefined {
  return site.courses.items.find((course) => course.id === slug);
}

export function coursePath(slug: string) {
  return `/courses/${slug}` as const;
}

export function getRelatedCourses(slug: string): Course[] {
  return site.courses.items.filter((course) => course.id !== slug);
}
