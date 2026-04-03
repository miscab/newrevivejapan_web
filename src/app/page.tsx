import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Process from "@/components/Process";
import Products from "@/components/Products";
import GlobalPresence from "@/components/GlobalPresence";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Process />
        <Products />
        <GlobalPresence />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
