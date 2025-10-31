"use client"

import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import TypingAnimation from "./typing-animation"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 animate-float">
            <div className="absolute inset-0 rounded-full border-2 border-primary animate-glow-pulse" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-b from-card to-card/80 flex items-center justify-center overflow-hidden">
              <img
                src="/images/design-mode/WhatsApp%20Image%202025-10-31%20at%2015.50.24.jpeg"
                alt="Nithya K"
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I am
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Nithya. K
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-foreground/70 mb-4 max-w-2xl mx-auto leading-relaxed animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <TypingAnimation
            texts={["AI Engineer", "Machine Learning Developer", "Deep Learning Enthusiast"]}
            delay={80}
          />
        </p>

        <p
          className="text-base md:text-lg text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Turning data into intelligent solutions through advanced machine learning, deep learning, and NLP technologies
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <Download size={20} />
            Download CV
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
