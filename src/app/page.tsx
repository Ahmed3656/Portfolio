import {FloatingNavbar, Hero, Projects, Skills, useScrollToSection } from '@/components';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useScrollToSection;

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
