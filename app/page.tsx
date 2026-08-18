import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Hero name="Hayden" />
      <FeaturedProject />
    </main>
  );
}