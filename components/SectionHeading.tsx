import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 sm:mb-16 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className={`eyebrow ${tone === "dark" ? "!text-sage" : ""}`}>
        <span className={`mr-3 inline-block h-px w-8 align-middle ${tone === "dark" ? "bg-sage" : "bg-sand"}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={`display mt-5 text-[clamp(2.4rem,5vw,3.75rem)] ${tone === "dark" ? "text-paper" : "text-sea"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-[1.02rem] leading-[1.85] ${tone === "dark" ? "text-mist/85" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}
