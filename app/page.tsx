import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Motto } from "@/components/Motto";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { ViewWorkTab } from "@/components/ViewWorkTab";

export default function Home() {
  return (
    <>
      <Navbar />
      <ViewWorkTab />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Motto />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
