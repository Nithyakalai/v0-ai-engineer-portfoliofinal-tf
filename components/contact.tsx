"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-slide-in-up">
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Collaborate
          </span>
        </h2>

        <p className="text-center text-foreground/70 text-lg mb-12 max-w-2xl mx-auto animate-slide-in-up">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-up">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input-enhanced w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input-enhanced w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="form-input-enhanced w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="button-glow-hover w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="contact-card-hover rounded-xl p-6 border border-border group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-all duration-300 mt-1">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:nithyakalaichelvan907@gmail.com"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    nithyakalaichelvan907@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-hover rounded-xl p-6 border border-border group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-all duration-300 mt-1">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:9876789564" className="text-primary hover:text-accent transition-colors">
                    9876789564
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-hover rounded-xl p-6 border border-border group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-all duration-300 mt-1">
                  <Linkedin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/k-nithya-44b89031b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    @k.Nithya
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-hover rounded-xl p-6 border border-border group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-all duration-300 mt-1">
                  <Github size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                  <a
                    href="https://github.com/Nithyakalai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    @nithyak
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
