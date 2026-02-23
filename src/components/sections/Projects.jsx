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

  const filterProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  // 🔥 Detect screen size
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
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = container.offsetWidth / cardsPerView

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    })

    setCurrentIndex(index)
  }

  const maxIndex = Math.max(0, filterProjects.length - cardsPerView)

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex)
    scrollToIndex(newIndex)
  }

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0)
    scrollToIndex(newIndex)
  }

  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
  }

  return (
    <section id="projects" className="relative py-15 bg-black overflow-hidden">
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

        {/* Carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden scroll-smooth"
            >
              <div className="flex gap-6">
                {filterProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            {filterProjects.length > cardsPerView && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-green-500/20 rounded-full disabled:opacity-40"
                >
                  <ChevronLeft className="w-5 h-5 text-white mx-auto" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-green-500/20 rounded-full disabled:opacity-40"
                >
                  <ChevronRight className="w-5 h-5 text-white mx-auto" />
                </button>
              </>
            )}

            {/* Dots */}
            {filterProjects.length > cardsPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`rounded-full transition-all ${
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