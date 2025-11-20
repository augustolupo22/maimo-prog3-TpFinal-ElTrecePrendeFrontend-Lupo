import Hero from "./component/Hero/Hero";
import ProgramasSection from "./component/ProgramasSection/ProgramasSection";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <ProgramasSection />
    </main>
  );
}
