import React, { useState, useRef, useEffect } from "react"
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
  const [cardsPerView, setCardsPerView] = useState(3)
  const scrollContainerRef = useRef(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  /* ---------------- RESPONSIVE CARDS PER VIEW ---------------- */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  /* ---------------- CATEGORY CHANGE ---------------- */

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

  /* ---------------- SCROLL FUNCTION ---------------- */

  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const firstCard = container.querySelector(".project-slide")
    if (!firstCard) return

    const gap = 24 // gap-6 = 24px
    const cardWidth = firstCard.offsetWidth + gap

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    })

    setCurrentIndex(index)
  }

  const maxIndex = Math.max(0, filteredProjects.length - cardsPerView)

  const nextSlide = () => {
    scrollToIndex(Math.min(currentIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    scrollToIndex(Math.max(currentIndex - 1, 0))
  }

  /* ---------------- CATEGORY ICONS ---------------- */

  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
  }

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
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

        {/* CATEGORY FILTER */}
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
                        ? "bg-green-500/20 border border-green-500/40"
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

        {/* CAROUSEL */}
        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
            >
              <div className="flex gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-slide w-full md:w-1/2 lg:w-1/3 shrink-0 snap-center"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* ARROWS */}
            {filteredProjects.length > cardsPerView && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-green-500/20 backdrop-blur-md border border-green-500/40 rounded-full disabled:opacity-40"
                >
                  <ChevronLeft className="w-5 h-5 text-white mx-auto" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-green-500/20 backdrop-blur-md border border-green-500/40 rounded-full disabled:opacity-40"
                >
                  <ChevronRight className="w-5 h-5 text-white mx-auto" />
                </button>
              </>
            )}

            {/* DOTS */}
            {filteredProjects.length > cardsPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-green-400 w-6 h-2"
                        : "bg-white/30 w-2 h-2"
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