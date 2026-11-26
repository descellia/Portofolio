"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, projects, type Category } from "@/lib/projects";
import { Icon } from "./Decor";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);
  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c, c === "All" ? projects.length : projects.filter((p) => p.category === c).length])),
    [],
  );

  return (
    <section id="projects" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-20 h-[32rem] w-[32rem] rounded-full bg-mist blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Featured work" title="Selected projects" intro="From AI pipelines built during my internships to mobile apps, web platforms, and app designs. Open any card for the full story." />
        </div>

        <Reveal>
          <div role="group" aria-label="Filter projects by category" className="-mt-4 mb-12 flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  aria-pressed={active}
                  className={`relative rounded-full px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-paper" : "border border-sand-300 text-sea hover:border-sea"
                  }`}
                >
                  {active && (
                    <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-sea" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                  )}
                  <span className="relative">
                    {c} <span className={active ? "text-sage" : "text-sand"}>{counts[c]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.ul layout className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/projects/${p.slug}/`} className="group block focus-visible:outline-offset-8">
                  <div className="arch relative aspect-[4/4.4] overflow-hidden border border-sand-100 bg-paper p-2 shadow-[0_20px_50px_-30px_rgba(36,64,61,0.5)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_60px_-28px_rgba(36,64,61,0.55)]">
                    <div className="arch relative h-full w-full overflow-hidden bg-sand-50">
                      <ProjectVisual project={p} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
                    </div>
                    <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-paper text-sea opacity-0 shadow transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon.ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="mt-5 px-1">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-sand-700">
                      {p.category}
                      {p.year ? ` · ${p.year}` : ""}
                    </p>
                    <h3 className="mt-2 font-serif text-[1.65rem] leading-tight text-sea transition-colors group-hover:text-sea-800">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-[0.94rem] leading-relaxed text-muted">{p.summary}</p>
                    <p className="mt-3 text-[0.78rem] tracking-wide text-sand-700">{p.role}</p>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
