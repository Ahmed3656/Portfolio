import { FloatingNavbar } from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNavbar />
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
