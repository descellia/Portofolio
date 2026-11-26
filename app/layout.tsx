import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { profile, siteUrl } from "@/lib/content";

const description =
  "Portfolio of Descellia Ng, Informatics student at Universitas Multimedia Nusantara working on LLM evaluation, RAG pipelines, data analytics, and UI/UX design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} · Portfolio`, template: `%s · ${profile.name}` },
  description,
  keywords: ["Descellia Ng", "portfolio", "LLM evaluation", "LLM-as-a-Judge", "RAG", "data analytics", "UI/UX", "Universitas Multimedia Nusantara"],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} · Portfolio`,
    title: `${profile.name} · Portfolio`,
    description,
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Descellia Ng portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Portfolio`,
    description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f5",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/images/descellia.jpg`,
  email: `mailto:${profile.email}`,
  jobTitle: "LLM & Data Evaluation Intern",
  worksFor: { "@type": "Organization", name: "AI Rudder" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Multimedia Nusantara" },
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sea focus:px-5 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
