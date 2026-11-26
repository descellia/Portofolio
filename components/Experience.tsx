"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section id="experience" className="relative bg-paper py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been working"
          intro="Two concurrent internships in AI evaluation and data, built on earlier freelance work in web development."
        />

        <ol className="relative border-l border-sand-300/70 pl-6 sm:pl-10">
          {experience.map((job, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={job.company} delay={0.06 * i}>
                <li className="relative pb-6 last:pb-0">
                  <span
                    className={`absolute -left-[calc(1.5rem+5px)] top-7 h-[9px] w-[9px] rounded-full border transition-colors sm:-left-[calc(2.5rem+5px)] ${
                      open ? "border-sea bg-sea" : "border-sand bg-paper"
                    }`}
                    aria-hidden="true"
                  />
                  <div className={`rounded-2xl border transition-colors duration-300 ${open ? "border-sand-100 bg-cream/70" : "border-transparent hover:bg-cream/40"}`}>
                    <button
                      type="button"
                      className="flex w-full flex-col gap-2 p-5 text-left sm:flex-row sm:items-start sm:justify-between sm:p-6"
                      aria-expanded={open}
                      aria-controls={`job-${i}`}
                      onClick={() => setOpenIdx(open ? -1 : i)}
                    >
                      <div>
                        <p className="text-[0.7rem] uppercase tracking-[0.24em] text-sand-700">
                          {job.period} · {job.type}
                        </p>
                        <h3 className="mt-2 font-serif text-[1.75rem] leading-tight text-sea">{job.role}</h3>
                        <p className="mt-1 text-[0.95rem] text-ink">
                          {job.company} <span className="text-muted">· {job.location}</span>
                        </p>
                      </div>
                      <span
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand-300 text-sea transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`job-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-6">
                            <p className="text-[0.92rem] italic text-muted">{job.summary}</p>
                            <ul className="mt-4 space-y-2.5">
                              {job.points.map((pt) => (
                                <li key={pt} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/85">
                                  <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-sand" aria-hidden="true" />
                                  {pt}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {job.tags.map((t) => (
                                <span key={t} className="chip !bg-paper">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
