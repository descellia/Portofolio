"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, profile } from "@/lib/content";
import { ShellIcon } from "./Decor";

export function Navbar({ home = true }: { home?: boolean }) {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section indicator: the section crossing the upper-middle of the viewport wins.
  useEffect(() => {
    if (!home) return;
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const top = () => window.scrollY < 200 && setActive("");
    window.addEventListener("scroll", top, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", top);
    };
  }, [home]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-sand-100/80 bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[4.5rem] items-center justify-between" aria-label="Main">
        <Link href={home ? "#top" : "/"} className="group flex items-center gap-2.5 text-sea" onClick={() => setOpen(false)}>
          <ShellIcon className="h-6 w-6 text-sand transition-transform duration-500 group-hover:-rotate-12" />
          <span className="font-serif text-[1.45rem] font-medium leading-none tracking-tight">
            {profile.firstName} <span className="text-sand">{profile.lastName}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={href(item.id)}
                className={`relative block px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors ${
                  active === item.id ? "text-sea" : "text-muted hover:text-sea"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-sea"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href={profile.cv} download className="btn-primary hidden !px-5 !py-2.5 lg:inline-flex">
          Résumé
        </a>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-sea lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pt-6">
              {navItems.map((item, i) => (
                <motion.li key={item.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                  <a
                    href={href(item.id)}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-sand-100 py-4 font-serif text-3xl ${active === item.id ? "text-sea" : "text-ink"}`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a href={profile.cv} download className="btn-primary w-full">
                  Download résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
