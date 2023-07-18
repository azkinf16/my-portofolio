import Footer from "../components/Footer";
import About from "../components/Home/About";
import Experience from "../components/Home/Experience";
import Hero from "../components/Home/Hero";
import Project from "../components/Home/Project";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default Homepage;
