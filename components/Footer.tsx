import { navItems, profile } from "@/lib/content";
import { Icon, ShellIcon } from "./Decor";

export function Footer({ home = true }: { home?: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-sea-800 text-mist">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
        <div>
          <a href={home ? "#top" : "/"} className="flex items-center gap-3 text-paper">
            <ShellIcon className="h-8 w-8 text-sand-300" />
            <span className="font-serif text-3xl">
              {profile.firstName} <span className="text-sand-300">{profile.lastName}</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-mist/70">{profile.shortTitle}. Based in {profile.location}.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-[0.85rem]">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={home ? `#${n.id}` : `/#${n.id}`} className="text-mist/75 transition-colors hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          {[
            { href: `mailto:${profile.email}`, label: "Email", I: Icon.Mail },
            { href: profile.linkedin, label: "LinkedIn", I: Icon.LinkedIn },
            { href: profile.github, label: "GitHub", I: Icon.GitHub },
          ].map(({ href, label, I }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/25 text-mist transition-colors hover:border-paper hover:bg-paper hover:text-sea-800"
            >
              <I className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-mist/10">
        <p className="container-x py-5 text-[0.75rem] tracking-wide text-mist/55">
          © {year} {profile.name}. Designed and built with Next.js.
        </p>
      </div>
    </footer>
  );
}
