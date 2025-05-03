import { Hero, Projects, Skills, useScrollToSection } from '@/components';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useScrollToSection;

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
