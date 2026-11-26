import { motto } from "@/lib/content";
import { RingBadge, ShellIcon } from "./Decor";
import { Reveal } from "./Reveal";

/** Quote band. Uses Descellia's own words (GitHub profile), not a testimonial. */
export function Motto() {
  return (
    <section aria-label="Personal note" className="watercolor relative overflow-hidden py-16 text-paper sm:py-20">
      <div className="container-x relative flex flex-col items-center gap-10 md:flex-row">
        <RingBadge text="Right for the right reasons · " className="h-28 w-28 shrink-0 text-sage" />
        <Reveal className="flex-1">
          <blockquote>
            <p className="font-serif text-[clamp(1.6rem,3vw,2.3rem)] italic leading-snug text-paper">
              <span className="mr-2 font-serif text-5xl not-italic leading-none text-sage">“</span>
              {motto.quote}
            </p>
            <footer className="mt-5 text-[0.72rem] uppercase tracking-[0.3em] text-sage"><span className="mr-3 inline-block h-px w-6 align-middle bg-sage" aria-hidden="true" />{motto.by}</footer>
          </blockquote>
        </Reveal>
        <ShellIcon className="hidden h-36 w-36 shrink-0 text-paper/40 md:block" strokeWidth={0.6} />
      </div>
    </section>
  );
}
