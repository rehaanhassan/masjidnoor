"use client";

import { useEffect } from "react";

export function RevealEngine() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const show = (node: Element) => {
      node.classList.add("is-inview");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const watch = (node: Element) => {
      if (!(node instanceof HTMLElement)) return;
      if (!node.classList.contains("reveal") || node.classList.contains("is-inview")) {
        return;
      }

      if (reduceMotion) {
        show(node);
        return;
      }

      observer.observe(node);
    };

    document.querySelectorAll(".reveal").forEach(watch);

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const added of record.addedNodes) {
          if (!(added instanceof HTMLElement)) continue;
          watch(added);
          added.querySelectorAll(".reveal").forEach(watch);
        }
      }
    });

    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
