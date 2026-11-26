import { awards, certifications, organizations } from "@/lib/content";
import { ShellIcon, SunIcon } from "./Decor";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="mist-wash relative overflow-hidden py-24 sm:py-32">
      <SunIcon className="pointer-events-none absolute -right-16 top-16 h-72 w-72 text-sand/20" strokeWidth={0.5} />
      <div className="container-x relative">
        <SectionHeading eyebrow="Achievements" title="Awards, certifications & leadership" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="eyebrow mb-6">Competitions</h3>
            </Reveal>
            <ul className="space-y-4">
              {awards.map((a, i) => (
                <Reveal key={a.event} delay={0.05 * i}>
                  <li className="flex gap-5 rounded-2xl border border-sand-100 bg-paper/80 p-5">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${i === 0 ? "bg-sea text-paper" : "bg-mist text-sea"}`}>
                      <ShellIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-serif text-xl text-sea">{a.title}</p>
                      <p className="text-[0.95rem] text-ink">{a.event}</p>
                      <p className="mt-1 text-[0.84rem] text-muted">{a.by}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

          </div>

          <div>
            <Reveal>
              <h3 className="eyebrow mb-6">Certifications & courses</h3>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {certifications.map((c, i) => (
                <Reveal key={c.name} delay={0.05 * i}>
                  <li className="group h-full rounded-2xl border border-sand-100 bg-paper/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-sage hover:shadow-[0_20px_40px_-30px_rgba(36,64,61,0.6)]">
                    <p className="font-serif text-3xl text-sand">{c.year}</p>
                    <p className="mt-2 font-medium leading-snug text-sea">{c.name}</p>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{c.note}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
        <Reveal className="mt-16">
          <h3 className="eyebrow mb-6">Organizations & leadership</h3>
        </Reveal>
        <ul className="grid gap-4 md:grid-cols-2">
          {organizations.map((o, i) => (
            <Reveal key={o.org} delay={0.05 * i}>
              <li className="h-full rounded-2xl border border-sand-100 bg-paper/80 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-serif text-2xl text-sea">{o.role}</p>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-sand-700">{o.period}</p>
                </div>
                <p className="mt-1 text-[0.95rem] text-ink">{o.org}</p>
                <p className="mt-2 text-[0.9rem] text-muted">{o.highlight}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
