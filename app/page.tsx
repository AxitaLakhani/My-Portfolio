// import "./globals.css"
import "./portfolio.css"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";



export default function Home() {
  return (
  //  <main >
   <main className="portfolio-bg">

      <div className="grid-pattern"></div>

      <div className="content">

      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  );
}