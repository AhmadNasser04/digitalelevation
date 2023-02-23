import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-black w-screen min-h-screen transition-all duration-500 overflow-x-hidden scroll-smooth">
      <NavBar />

      <div className="space-y-16">
        {/* HERO */}
        <section id="hero" className="scroll-mt-24">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* PRICES */}
        <section id="pricing" className="scroll-mt-24">
          <Pricing />
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
