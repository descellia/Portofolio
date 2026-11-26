import { about, approach, education } from "@/lib/content";
import { approachIcons, CoralIcon } from "./Decor";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mist-wash relative overflow-hidden py-24 sm:py-32">
      <CoralIcon className="pointer-events-none absolute -left-10 bottom-10 hidden h-72 w-72 lg:block text-sand/25" strokeWidth={0.6} />

      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About me"
            title={
              <>
                Analytical by training,
                <br />
                <em className="font-normal text-sand">creative</em> by nature.
              </>
            }
          />
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand-100 bg-sand-100">
              {about.facts.map((f) => (
                <div key={f.label} className="bg-paper/90 p-5">
                  <dt className="text-[0.68rem] uppercase tracking-[0.24em] text-sand-700">{f.label}</dt>
                  <dd className="mt-2 font-serif text-xl text-sea">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:pt-24">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className={`leading-[1.9] text-muted ${i === 0 ? "font-serif text-[1.55rem] leading-[1.55] text-ink" : "mt-6 text-[1.02rem]"}`}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-2">
              {about.focus.map((f) => (
                <span key={f} className="chip">
                  {f}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              <span className="text-sea">{education.degree}</span> · {education.school} · {education.period}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Approach, echoing the four-step band of the visual reference */}
      <div className="container-x relative mt-24">
        <Reveal>
          <p className="eyebrow mb-10 text-center">How I work</p>
        </Reveal>
        <ol className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step, i) => {
            const IconCmp = approachIcons[step.icon];
            return (
              <Reveal key={step.no} delay={0.08 * i}>
                <li className={`group px-6 text-center lg:border-sand-300/70 ${i > 0 ? "lg:border-l" : ""}`}>
                  <span className="font-serif text-2xl text-sand">{step.no}</span>
                  <IconCmp className="mx-auto my-4 h-11 w-11 text-sea transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="text-[0.75rem] font-medium uppercase tracking-[0.26em] text-ink">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-[15rem] text-[0.92rem] leading-relaxed text-muted">{step.text}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
