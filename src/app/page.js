import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-6">
        <Navbar />
        <HeroSection />
        <About />
        <Project />
      </div>
    </main>
  );
}
