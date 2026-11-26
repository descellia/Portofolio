import Link from "next/link";
import { research } from "@/lib/content";
import { Icon, WaveEdge } from "./Decor";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Research() {
  const t = research.thesis;
  return (
    <section id="research" className="relative">
      <WaveEdge className="-mb-px block h-10 w-full bg-cream text-sea sm:h-16" />
      <div className="watercolor relative py-20 text-paper sm:py-28">
        <div className="container-x">
          <SectionHeading tone="dark" eyebrow="Research" title={t.title} intro={t.summary} />

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="rounded-3xl border border-paper/15 bg-paper/[0.06] p-7 backdrop-blur-sm">
                <p className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-sage">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                  {t.status}
                </p>
                <h3 className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-sage">Dataset</h3>
                <p className="mt-2 font-serif text-2xl leading-snug">{t.data}</p>
                <h3 className="mt-7 text-[0.7rem] uppercase tracking-[0.24em] text-sage">Tools</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-paper/25 px-3 py-1 text-[0.78rem] text-mist">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-7 border-t border-paper/15 pt-5 text-[0.9rem] leading-relaxed text-mist/80">{t.note}</p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-mist/80">{t.implementation}</p>
              </div>
            </Reveal>

            <ol className="space-y-px overflow-hidden rounded-3xl border border-paper/15">
              {t.steps.map((s, i) => (
                <Reveal key={s.title} delay={0.06 * i}>
                  <li className="flex gap-5 bg-paper/[0.04] p-6 transition-colors hover:bg-paper/[0.09]">
                    <span className="font-serif text-3xl leading-none text-sage">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.22em]">{s.title}</h4>
                      <p className="mt-2 text-[0.97rem] leading-relaxed text-mist/85">{s.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="mt-16">
            <h3 className="eyebrow !text-sage">Applied research from internships</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {research.reports.map((r) => (
                <Link
                  key={r.slug}
                  href={`/projects/${r.slug}/`}
                  className="group flex items-start justify-between gap-6 rounded-2xl border border-paper/15 p-6 transition-colors hover:border-paper/40 hover:bg-paper/[0.06]"
                >
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-sage">{r.context}</p>
                    <p className="mt-2 font-serif text-xl italic leading-snug">“{r.title}”</p>
                  </div>
                  <Icon.ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-sage transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <WaveEdge className="-mt-px block h-10 w-full bg-paper text-sea sm:h-16" flip />
    </section>
  );
}
