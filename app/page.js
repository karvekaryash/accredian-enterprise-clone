import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Companies from "../components/Companies";
import Programs from "../components/Programs";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import AosProvider from "../components/AosProvider";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <>
      <AosProvider />

      <Navbar />
      <Hero />
      <Stats />
      <Companies />
      <Programs />
      <Benefits />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
    </>
  );
}