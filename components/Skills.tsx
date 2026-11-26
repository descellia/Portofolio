"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative bg-paper py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Skills & tools" title="What I work with" align="center" intro="Grouped by where I use them most. Taken from my CV, internship work, and project repositories." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: gi * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-sand-100 bg-cream/60 p-7 transition-colors duration-500 hover:bg-cream"
            >
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="font-serif text-[1.6rem] text-sea">{g.group}</h3>
                <span className="font-serif text-lg text-sand">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <motion.ul
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 + gi * 0.05 } } }}
              >
                {g.items.map((s) => (
                  <motion.li
                    key={s}
                    variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-sand-100 bg-paper px-3.5 py-1.5 text-[0.86rem] text-ink/85 transition-colors hover:border-sage hover:text-sea"
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-mist opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
