import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="container max-w-6xl p-5 mx-auto">
      <Hero/>
      <About />
      <Projects />
    </main>
  );
}
