import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <TechStack />
      </main>
      <Contact />
    </>
  );
}
