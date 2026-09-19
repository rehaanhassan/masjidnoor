import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "li";
  children: ReactNode;
  delayMs?: number;
  variant?: "up" | "down" | "fade";
};

export function Reveal({
  as = "div",
  children,
  className,
  delayMs = 0,
  variant = "up",
  style,
  ...props
}: RevealProps) {
  const revealClassName = ["reveal", `reveal-${variant}`, className]
    .filter(Boolean)
    .join(" ");
  const revealStyle = {
    ...style,
    "--reveal-delay": `${delayMs}ms`,
  } as CSSProperties;

  if (as === "li") {
    return (
      <li className={revealClassName} style={revealStyle} {...props}>
        {children}
      </li>
    );
  }

  return (
    <div className={revealClassName} style={revealStyle} {...props}>
      {children}
    </div>
  );
}
