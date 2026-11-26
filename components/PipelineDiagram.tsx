"use client";

import { motion } from "framer-motion";

const flows = {
  rag: {
    title: "Pipeline architecture",
    steps: [
      { t: "Vendor master", d: "Excel input" },
      { t: "Web search", d: "Tavily" },
      { t: "Enrich", d: "Translate + LLM description" },
      { t: "Keywords", d: "5 industry terms" },
      { t: "Hybrid retrieval", d: "TF-IDF · SBERT/FAISS · BM25 · KG" },
      { t: "Re-rank", d: "LLM picks from top 25" },
      { t: "Export", d: "KBLI + confidence label" },
    ],
  },
  judge: {
    title: "How it works",
    steps: [
      { t: "Dialogues", d: "One row per turn" },
      { t: "Group & resume", d: "Skip scored dialogues" },
      { t: "Transcript", d: "Rebuild turn order" },
      { t: "Judge", d: "Rubric score + issues" },
      { t: "Enrich", d: "Severity · category · confidence" },
      { t: "Report", d: "Excel saved per dialogue" },
      { t: "Human review", d: "Validate first pass" },
    ],
  },
} as const;

export function PipelineDiagram({ kind }: { kind: keyof typeof flows }) {
  const flow = flows[kind];
  return (
    <figure className="watercolor overflow-hidden rounded-[2rem] p-6 text-paper sm:p-10">
      <figcaption className="eyebrow !text-sage">{flow.title}</figcaption>
      <motion.ol
        className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {flow.steps.map((s, i) => (
          <motion.li
            key={s.t}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="relative rounded-2xl border border-paper/20 bg-paper/[0.07] p-4"
          >
            <span className="font-serif text-2xl text-sage">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-[0.8rem] font-medium uppercase tracking-[0.14em]">{s.t}</p>
            <p className="mt-1 text-[0.82rem] leading-snug text-mist/80">{s.d}</p>
            {i < flow.steps.length - 1 && (
              <span className="absolute -right-2.5 top-1/2 z-10 hidden h-px w-2 bg-sage lg:block" aria-hidden="true" />
            )}
          </motion.li>
        ))}
      </motion.ol>
    </figure>
  );
}
