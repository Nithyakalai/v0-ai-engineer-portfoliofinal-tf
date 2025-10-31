"use client"

import { Brain, Database, Zap, BookOpen } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Model Development",
    description: "Designing and optimizing ML/DL models for real-world applications and business solutions",
  },
  {
    icon: Database,
    title: "Data Analysis & Insights",
    description: "Building data pipelines and uncovering actionable insights from complex datasets",
  },
  {
    icon: Zap,
    title: "Intelligent System Integration",
    description: "Integrating AI solutions into web and mobile platforms for enhanced functionality",
  },
  {
    icon: BookOpen,
    title: "Research Collaboration",
    description: "Exploring innovative AI-driven technologies and publishing research findings",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-slide-in-up">
          What I <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Do</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-card/50 border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
