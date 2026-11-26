"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/content";
import { Icon } from "./Decor";
import { Reveal } from "./Reveal";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [copied, setCopied] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus({ kind: "error", message: "Please fill in your name, email, and message." });
      return;
    }

    // Without a form backend, hand the message to the visitor's own email app.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({ kind: "sent", message: "Your email app should open with the message ready to send." });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      setStatus({ kind: "sent", message: "Thank you, your message has been sent. I'll get back to you soon." });
    } catch {
      setStatus({ kind: "error", message: `Something went wrong. You can email me directly at ${profile.email}.` });
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const field =
    "mt-2 w-full normal-case tracking-normal rounded-xl border border-sand-100 bg-paper px-4 py-3 text-[0.98rem] text-ink placeholder:text-muted/60 transition focus:border-sea focus:outline-none focus:ring-2 focus:ring-sage/50";

  return (
    <section id="contact" className="paper-grain relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <span className="mr-3 inline-block h-px w-8 bg-sand align-middle" aria-hidden="true" />
            Contact
          </p>
          <h2 className="display mt-5 text-[clamp(2.6rem,5.5vw,4.2rem)] text-sea">
            Let&apos;s create
            <br />
            something <em className="font-normal text-sand">meaningful</em>
          </h2>
          <p className="mt-6 max-w-md text-[1.02rem] leading-[1.85] text-muted">
            I&apos;m happy to talk about AI, data, research ideas, or a good dashboard, whether it&apos;s an internship, a collaboration, or just to say hi.
          </p>

          <ul className="mt-10 space-y-4 text-[0.98rem]">
            <li className="flex items-center gap-4">
              <Icon.Mail className="h-5 w-5 text-sand" />
              <a href={`mailto:${profile.email}`} className="text-ink underline-offset-4 hover:text-sea hover:underline">
                {profile.email}
              </a>
              <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1 rounded-full border border-sand-300 px-2.5 py-1 text-[0.72rem] text-sea hover:bg-mist" aria-label="Copy email address">
                <Icon.Copy className="h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy"}
              </button>
            </li>
            <li className="flex items-center gap-4">
              <Icon.LinkedIn className="h-5 w-5 text-sand" />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:text-sea hover:underline">
                linkedin.com/in/descellia
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Icon.GitHub className="h-5 w-5 text-sand" />
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:text-sea hover:underline">
                github.com/descellia
              </a>
            </li>
            <li className="flex items-center gap-4 text-muted">
              <Icon.Pin className="h-5 w-5 text-sand" />
              Based in {profile.location}
            </li>
          </ul>

          <a href={profile.cv} download className="btn-ghost mt-10">
            <Icon.Download className="h-4 w-4" />
            Download my CV (PDF)
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="arch pointer-events-none absolute -right-3 -top-16 hidden h-40 w-32 overflow-hidden border-4 border-paper shadow-lg lg:block" aria-hidden="true">
            <Image src={profile.photo} alt="" fill sizes="128px" className="object-cover object-[50%_25%]" />
          </div>
          <form onSubmit={onSubmit} noValidate className="rounded-[2rem] border border-sand-100 bg-paper/90 p-6 shadow-[0_30px_70px_-40px_rgba(36,64,61,0.5)] sm:p-9">
            <h3 className="font-serif text-3xl text-sea">Send a message</h3>
            <p className="mt-1 text-[0.88rem] text-muted">{FORMSPREE_ID ? "I'll reply by email." : "This opens your email app with the message ready."}</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-[0.72rem] uppercase tracking-[0.2em] text-sand-700">
                Name
                <input name="name" type="text" autoComplete="name" required className={field} placeholder="Your name" />
              </label>
              <label className="text-[0.72rem] uppercase tracking-[0.2em] text-sand-700">
                Email
                <input name="email" type="email" autoComplete="email" required className={field} placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 block text-[0.72rem] uppercase tracking-[0.2em] text-sand-700">
              Message
              <textarea name="message" rows={5} required className={`${field} resize-y`} placeholder="Tell me a little about your project or opportunity" />
            </label>
            <button type="submit" disabled={status.kind === "sending"} className="btn-primary mt-7 w-full disabled:opacity-60 sm:w-auto">
              {status.kind === "sending" ? "Sending…" : "Send message"}
              <Icon.Arrow className="h-4 w-4" />
            </button>
            <p role="status" aria-live="polite" className={`mt-4 min-h-[1.5rem] text-[0.9rem] ${status.kind === "error" ? "text-[#a14b3c]" : "text-sea"}`}>
              {status.message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
