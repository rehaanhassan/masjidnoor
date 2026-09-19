"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type ReadMoreProps = {
  children: ReactNode;
  clampClassName?: string;
  className?: string;
};

export function ReadMore({
  children,
  clampClassName = "line-clamp-4",
  className,
}: ReadMoreProps) {
  const panelId = useId();
  const textRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const measure = () => {
      if (open) return;
      setOverflows(element.scrollHeight > element.clientHeight + 2);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [open, children]);

  return (
    <div className={className}>
      <div
        id={panelId}
        ref={textRef}
        className={open ? undefined : clampClassName}
      >
        {children}
      </div>
      {overflows || open ? (
        <button
          type="button"
          className="text-primary hover:text-primary-deep mt-3 text-sm font-semibold underline-offset-4 hover:underline"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
