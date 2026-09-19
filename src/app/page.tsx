import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { AboutSection } from "~/components/sections/AboutSection";
import { ContactSection } from "~/components/sections/ContactSection";
import { CoursesSection } from "~/components/sections/CoursesSection";
import { FacilitiesSection } from "~/components/sections/FacilitiesSection";
import { HeroSection } from "~/components/sections/HeroSection";
import { LocationSection } from "~/components/sections/LocationSection";
import { SupportSection } from "~/components/sections/SupportSection";
import { TestimonialsSection } from "~/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <FacilitiesSection />
        <TestimonialsSection />
        <LocationSection />
        <SupportSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
