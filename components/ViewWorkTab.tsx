"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/** Vertical "View work" tab pinned to the right edge on large screens, like the side tab in the visual reference. */
export function ViewWorkTab() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300, 900], [0, 1, 1]);
  return (
    <motion.a
      href="#projects"
      style={{ opacity }}
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-l-2xl bg-sage/90 px-3 py-6 text-sea-800 shadow-md backdrop-blur transition-colors hover:bg-sage xl:flex"
    >
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.35em] [writing-mode:vertical-rl]">View work</span>
      <span className="h-8 w-px bg-sea-800/60" aria-hidden="true" />
    </motion.a>
  );
}
