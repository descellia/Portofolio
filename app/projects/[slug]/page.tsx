import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Decor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: {
      title: `${p.title} · Descellia Ng`,
      description: p.summary,
      images: [{ url: p.cover ?? "/og-image.jpg" }],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Navbar home={false} />
      <main id="main" className="bg-paper">
        <section className="mist-wash pb-16 pt-32 sm:pt-40">
          <div className="container-x">
            <Link href="/#projects" className="group inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-sea">
              <Icon.Arrow className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              All projects
            </Link>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <Reveal>
                <p className="eyebrow">
                  {p.category}
                  {p.year ? ` · ${p.year}` : ""}
                </p>
                <h1 className="display mt-5 text-[clamp(2.8rem,7vw,5.4rem)] text-sea">{p.title}</h1>
                <p className="mt-4 font-serif text-2xl italic text-sand-700">{p.subtitle}</p>
                <p className="mt-6 max-w-2xl text-[1.08rem] leading-[1.85] text-muted">{p.summary}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <dl className="divide-y divide-sand-100 rounded-2xl border border-sand-100 bg-paper/85 px-6">
                  <div className="py-4">
                    <dt className="text-[0.68rem] uppercase tracking-[0.24em] text-sand-700">Role</dt>
                    <dd className="mt-1 text-ink">{p.role}</dd>
                  </div>
                  <div className="py-4">
                    <dt className="text-[0.68rem] uppercase tracking-[0.24em] text-sand-700">Context</dt>
                    <dd className="mt-1 text-ink">{p.context}</dd>
                  </div>
                  <div className="py-4">
                    <dt className="text-[0.68rem] uppercase tracking-[0.24em] text-sand-700">Stack</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="chip !bg-cream">
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                  {p.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 py-4">
                      {p.links.map((l, i) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`${i === 0 ? "btn-primary" : "btn-ghost"} !px-4 !py-2.5 !text-[0.7rem]`}>
                          {l.label}
                          <Icon.ArrowUpRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="container-x py-16 sm:py-20">
          {p.diagram ? (
            <Reveal>
              <PipelineDiagram kind={p.diagram} />
            </Reveal>
          ) : p.gallery ? (
            <div className="space-y-8">
              {p.gallery.map((g, i) => (
                <Reveal key={g.src} delay={i * 0.05}>
                  <figure className="overflow-hidden rounded-[1.75rem] border border-sand-100 bg-cream p-3 sm:p-5">
                    <Image src={g.src} alt={g.alt} width={1600} height={1000} sizes="(min-width: 1152px) 1100px, 95vw" className="h-auto w-full rounded-2xl" priority={i === 0} />
                    <figcaption className="px-1 pt-3 text-[0.82rem] text-muted">{g.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="arch relative mx-auto aspect-[10/11] w-full max-w-md overflow-hidden border-8 border-paper shadow-[0_30px_70px_-40px_rgba(36,64,61,0.55)]">
              <ProjectVisual project={p} sizes="768px" />
            </div>
          )}
        </section>

        <section className="container-x grid gap-14 pb-20 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h2 className="eyebrow mb-6">Overview</h2>
            <div className="space-y-5 text-[1.04rem] leading-[1.9] text-ink/85">
              {p.description.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="eyebrow mb-6">Highlights</h2>
            <ul className="space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-xl border border-sand-100 bg-cream/60 p-4 text-[0.97rem] leading-relaxed text-ink/85">
                  <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sea" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {p.metrics && (
          <section className="container-x pb-20">
            <Reveal>
              <h2 className="eyebrow mb-6">Results</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-sand-100 bg-cream/70 p-6">
                    <p className="font-serif text-5xl text-sea">{m.value}</p>
                    <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
              {p.metricsNote && <p className="mt-5 max-w-3xl text-[0.85rem] italic leading-relaxed text-muted">{p.metricsNote}</p>}
            </Reveal>
          </section>
        )}

        <section className="border-t border-sand-100 bg-cream">
          <Link href={`/projects/${next.slug}/`} className="group container-x flex items-center justify-between gap-6 py-12">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-3 font-serif text-[clamp(2rem,4vw,3rem)] text-sea transition-colors group-hover:text-sand-700">{next.title}</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sand-300 text-sea transition-all group-hover:bg-sea group-hover:text-paper">
              <Icon.Arrow className="h-5 w-5" />
            </span>
          </Link>
        </section>
      </main>
      <Footer home={false} />
    </>
  );
}
