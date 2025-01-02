import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
      <div className="container mx-auto px-12 py-6">
        <HeroSection />
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
