import React from 'react'
import { ChevronDown, Star } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si'

import { PERSONAL_INFO, STATS } from '../../utilis/Constants'
import { scrollToSection } from '../../hooks/UseScrollSpy'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black scroll-mt-24"
    >
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 
                bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10
                border border-primary/20 rounded-full backdrop-blur">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm text-white/90 tracking-wide">
                  {PERSONAL_INFO.title} | based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                {PERSONAL_INFO.role}
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-xl mb-10">
                {PERSONAL_INFO.description}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black px-7 py-3 rounded-xl font-medium
                hover:bg-white/90 transition"
              >
                Get In Touch
              </button>
            </FadeIn>

            {/* STATS */}
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
                {STATS.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl text-primary font-mono mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT IMAGE */}
          <FadeIn delay={200}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[430px] h-[540px] rounded-2xl overflow-hidden">

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r
                  from-primary/40 via-primary/10 to-primary/30 animate-spin-slow" />

                {/* Image */}
                <div className="relative m-[3px] rounded-2xl overflow-hidden h-full">
                  <img
                    src="/Images/Projects/Developer image.jpg"
                    alt="Developer at work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tech Stack */}
                <div className="absolute bottom-5 left-5 flex items-center gap-4 
                  bg-black/50 backdrop-blur px-5 py-3 rounded-full border border-white/10">
                  <SiReact className="text-primary w-5 h-5" />
                  <SiNextdotjs className="text-primary w-5 h-5" />
                  <SiNodedotjs className="text-primary w-5 h-5" />
                  <SiTailwindcss className="text-primary w-5 h-5" />
                  <SiMongodb className="text-primary w-5 h-5" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        aria-label="Scroll to about"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
    </section>
  )
}

export default Hero
