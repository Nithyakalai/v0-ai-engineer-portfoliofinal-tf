"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"
import StarfieldBackground from "@/components/starfield-background"

export default function Home() {
  return (
    <main className="bg-background relative">
      <StarfieldBackground />
      <div className="relative z-10">
        <ScrollIndicator />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
