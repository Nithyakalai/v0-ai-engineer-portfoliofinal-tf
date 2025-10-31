"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import AnimatedProjectBackground from "./animated-project-background"

const projects = [
  {
    title: "Smart Pet Adoption Recommendation System",
    description:
      "ML-powered platform that matches adopters with ideal pets using collaborative filtering and content-based recommendation algorithms.",
    technologies: ["Python", "Machine Learning", "Scikit-learn"],
    image: "/pet-adoption-recommendation-system-ai.jpg",
  },
  {
    title: "Traffic Sign Recognition using CNNs",
    description:
      "Deep learning model using Convolutional Neural Networks for accurate traffic sign classification and safer autonomous navigation.",
    technologies: ["TensorFlow", "Keras", "Computer Vision", "Deep Learning"],
    image: "/traffic-sign-recognition-cnn.jpg",
  },
  {
    title: "Sentiment Analysis on Social Media",
    description:
      "NLP project analyzing sentiment from Twitter/social media data to extract brand insights and customer feedback patterns.",
    technologies: ["Python", "NLP", "NLTK", "Data Analysis"],
    image: "/sentiment-analysis-social-media-nlp.jpg",
  },
  {
    title: "AI-Powered Health Prediction System",
    description:
      "Predictive healthcare model using machine learning to forecast disease risk and enable early intervention strategies.",
    technologies: ["PyTorch", "Healthcare AI", "Data Science", "Feature Engineering"],
    image: "/healthcare-ai-medical-prediction-system-with-digit.jpg",
    hasAnimatedBackground: true,
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="portfolio" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-slide-in-up">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                {project.hasAnimatedBackground && (
                  <div className="absolute inset-0 z-10">
                    <AnimatedProjectBackground />
                  </div>
                )}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ${
                    project.hasAnimatedBackground ? "relative z-20" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedProject(project)
                }}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group/btn"
              >
                Learn More
                <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-background/90 hover:bg-primary rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">{selectedProject.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground/70 mb-3">TECHNOLOGIES USED</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 font-semibold flex items-center justify-center gap-2 group">
                  <ExternalLink size={20} />
                  View Project
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 font-semibold flex items-center justify-center gap-2 group">
                  <Github size={20} />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
