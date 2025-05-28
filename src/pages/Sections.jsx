import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Experience from "../components/Home/Experience";
import Project from "../components/Home/Project";

export function HeroPage() {
  return (
    <>
      <Navbar />
      <div className="my-10">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-3">
        <About />
      </div>
      <Footer />
    </>
  );
}

export function ExperiencePage() {
  return (
    <>
      <Navbar />
      <Experience />
      <Footer />
    </>
  );
}

export function ProjectPage() {
  return (
    <>
      <Navbar />
      <Project />
      <Footer />
    </>
  );
}
