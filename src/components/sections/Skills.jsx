import React from "react"
import { skills } from "../../data/Skills"
import FadeIn from "../animations/FadeIn"

const Skills = () => {

  const getProficiency = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    }
    return levels[level] || 50
  }

  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20",
      Advanced: "text-cyan-400 bg-cyan-500/20",
      Intermediate: "text-emerald-400 bg-emerald-500/20",
    }
    return colors[level] || "text-gray-400 bg-gray-500/20"
  }

  const categories = ["Frontend", "Backend", "Tools"]

  return (
    <section id="skills" className="py-15 bg-black relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-white/60">
              Technologies I use to build scalable modern applications.
            </p>
          </div>
        </FadeIn>

        {/* CATEGORY SECTIONS */}
        <div className="grid lg:grid-cols-3 gap-10">

          {categories.map((category, catIndex) => (

            <FadeIn key={category} delay={catIndex * 150}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md 
              hover:border-green-500/40 transition-all duration-500 
              shadow-[0_0_30px_rgba(0,255,128,0.05)] hover:shadow-[0_0_40px_rgba(0,255,128,0.15)]">

                {/* Category Title */}
                <h3 className="text-white text-lg mb-8 font-medium border-l-4 border-green-500 pl-3">
                  {category}
                </h3>

                <div className="space-y-6">

                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => {

                      const Icon = skill.icon
                      const percentage = getProficiency(skill.level)

                      return (
                        <div key={skill.id}>

                          {/* Top Row */}
                          <div className="flex justify-between items-center mb-2">

                            <div className="flex items-center gap-3">
                              {Icon && (
                                <Icon className="w-5 h-5 text-green-400" />
                              )}
                              <div>
                                <p className="text-white text-sm">
                                  {skill.name}
                                </p>
                                <p className="text-xs text-white/50">
                                  {skill.years}
                                </p>
                              </div>
                            </div>

                            <span
                              className={`text-xs px-3 py-1 rounded-full ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </span>

                          </div>

                          {/* Progress Bar */}
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary/0 to-primary/100 rounded-full
                              transition-all duration-700 shadow-[0_0_10px_rgba(0,255,128,0.6)]"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>

                        </div>
                      )
                    })}
                </div>

              </div>
            </FadeIn>

          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
