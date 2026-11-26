"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/content";
import { Icon, RingBadge, ShellIcon, TideLines } from "./Decor";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} id="top" className="paper-grain relative overflow-hidden bg-paper pt-28 sm:pt-32 lg:pt-36">
      {/* sage wash behind the photo */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[120%] w-[70%] rounded-full bg-mist/70 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, rotate: -20 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1.2, ease }}>
            <ShellIcon className="mb-8 h-10 w-10 text-sand" />
          </motion.div>

          <h1 className="display text-[clamp(4rem,11vw,8.5rem)]">
            <motion.span className="block text-sea" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.1 }}>
              {profile.firstName}
            </motion.span>
            <motion.span className="block pl-[0.04em] text-sand" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.25 }}>
              {profile.lastName}
            </motion.span>
          </h1>

          <motion.p className="eyebrow mt-8 max-w-md leading-[2]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            {profile.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.65 }}>
            <div className="my-7 h-12 w-px bg-sand-300" aria-hidden="true" />
            <p className="text-[0.74rem] uppercase leading-[2] tracking-[0.28em] text-sand-700">{profile.title}</p>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.85] text-muted">{profile.intro}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary group">
                View my work
                <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={profile.cv} download className="btn-ghost">
                <Icon.Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease, delay: 0.2 }}
            className="relative"
          >
            <div className="arch absolute -inset-3 border border-sand-300" aria-hidden="true" />
            <div className="arch relative aspect-[4/5] overflow-hidden bg-sand-100 shadow-[0_30px_80px_-30px_rgba(36,64,61,0.45)]">
              <Image
                src={profile.photo}
                alt="Portrait of Descellia Ng smiling, wearing a beige jacket, on a wooden terrace with plants"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sea-800/25 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div style={{ y: lineY }} className="pointer-events-none absolute -bottom-8 -left-16 -right-10 h-40 text-paper/90" aria-hidden="true">
            <TideLines className="h-full w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -40 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.6 }}
            className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-paper/85 p-1 text-sea shadow-sm backdrop-blur sm:block lg:-left-12"
          >
            <RingBadge text="Data · AI · Design · Evaluation · " className="h-full w-full animate-[spin_40s_linear_infinite] motion-reduce:animate-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-full border border-sand-100 bg-paper/95 py-2.5 pl-3 pr-5 shadow-[0_12px_30px_-12px_rgba(36,64,61,0.35)] backdrop-blur sm:right-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sea" />
            </span>
            <span className="text-[0.8rem] text-ink">
              <span className="text-muted">Currently · </span>
              {profile.currently}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
