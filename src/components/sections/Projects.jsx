import React, { useState, useRef } from "react"
import { projects, categories } from "../../data/Projects"
import {
  Briefcase,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import ProjectCard from "../ui/ProjectCard"
import FadeIn from "../animations/FadeIn"

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const filterProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  // Reset when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentIndex(0)

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      })
    }
  }

  const scrollToIndex = (index) => {
    setCurrentIndex(index)

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.offsetWidth / 3

      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    const maxIndex = Math.max(0, filterProjects.length - 3)
    const newIndex = Math.min(currentIndex + 1, maxIndex)
    scrollToIndex(newIndex)
  }

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0)
    scrollToIndex(newIndex)
  }

  // Category Icons
  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
  }

  return (
    <section id="projects" className="relative py-15 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-green-500/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">
                My Work
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
              Featured Projects
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Showcasing my best work and achievements
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const Icon = categoryIcons[category]

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-green-500/20 border border-green-500/40 shadow-[0_0_20px_rgba(0,255,128,0.4)]"
                        : "bg-white/5 border border-white/10"
                    }`}
                  />

                  <div className="relative flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    <span className="text-sm">{category}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              <div className="flex gap-6 pb-4">
                {filterProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filterProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-12 h-12 bg-green-500/20 backdrop-blur-md border border-green-500/40 rounded-full hover:bg-green-500/30 shadow-[0_0_20px_rgba(0,255,128,0.3)] transition-all duration-300 disabled:opacity-40 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filterProjects.length - 3}
                  className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-12 h-12 bg-green-500/20 backdrop-blur-md border border-green-500/40 rounded-full hover:bg-green-500/30 shadow-[0_0_20px_rgba(0,255,128,0.3)] transition-all duration-300 disabled:opacity-40 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Navigation Dots */}
            {filterProjects.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                {Array.from({
                  length: Math.max(0, filterProjects.length - 2),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-green-400 w-6 h-2 shadow-[0_0_10px_rgba(0,255,128,0.8)]"
                        : "bg-white/30 w-2 h-2 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Projects
