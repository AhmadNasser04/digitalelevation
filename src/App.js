import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-black w-screen min-h-screen transition-all duration-500 scroll-smooth">
      {/* NAVBAVR */}
      <section>
        <NavBar />
      </section>

      <div className="space-y-16">
        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* PRICES */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* FOOTER */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
