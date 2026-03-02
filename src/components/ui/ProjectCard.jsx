import React from "react"
import { ExternalLink, Github, TrendingUp } from "lucide-react"

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    metrics,
    demoUrl,
    githubUrl,
    category,
  } = project

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300 backdrop-blur-md">

      {/* Image Section */}
      <div className="relative group overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
        />

        {/* Light Dark Overlay (Always Visible) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Category Badge (Improved Bold Style) */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold tracking-wide bg-green-500 text-black px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        </div>

        {/* Icons (Always Visible) */}
        <div className="absolute bottom-3 right-3 flex gap-3">

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-green-500 hover:text-black transition"
            >
              <ExternalLink size={18} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-green-500 hover:text-black transition"
            >
              <Github size={18} />
            </a>
          )}

        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-white text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-white/60 text-sm mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-white/10 text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics && (
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <TrendingUp size={16} />
            <p>{metrics}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard