import Image from "next/image";

import { site } from "~/content/site";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Image
      src={site.logo.src}
      alt={site.logo.alt}
      width={320}
      height={400}
      priority={priority}
      className={className}
    />
  );
}
