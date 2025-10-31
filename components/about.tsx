"use client"

import { useInView } from "@/hooks/use-in-view"

export default function About() {
  const ref = useInView()

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-slide-in-up">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm an aspiring AI Engineer with a strong passion for building intelligent systems that bridge data,
              algorithms, and real-world impact. My journey in artificial intelligence has been driven by curiosity and
              a commitment to leveraging technology for meaningful change.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science and Engineering with an AI Specialization at VIT
              Chennai. My academic foundation is reinforced by hands-on experience in machine learning, deep learning,
              natural language processing, and computer vision.
            </p>
          </div>

          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="about-card-hover p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3 text-primary">Education</h3>
              <p className="text-foreground/70">Bachelor's in Computer Science and Engineering (AI Specialization)</p>
              <p className="text-sm text-foreground/50">VIT Chennai — Ongoing</p>
            </div>

            <div className="about-card-hover p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3 text-primary">Experience</h3>
              <p className="text-foreground/70">
                Hands-on learning through internships, research projects, and academic initiatives in AI/ML
              </p>
              <p className="text-sm text-foreground/50">Building real-world applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
