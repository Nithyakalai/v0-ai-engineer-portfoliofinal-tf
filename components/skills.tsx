"use client"

import SingleTextTyping from "./single-text-typing"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "NumPy"],
  },
  {
    category: "Areas of Expertise",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analysis", "Neural Networks"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Jupyter Notebook", "GitHub", "VS Code", "Google Colab", "Docker"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-slide-in-up">
          Technical{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="skill-box-hover border rounded-xl p-8 animate-slide-in-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary group-hover:text-accent transition-colors">
                <SingleTextTyping text={cat.category} startDelay={idx * 400} speed={50} />
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag-enhanced px-4 py-2 text-primary rounded-full text-sm font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
