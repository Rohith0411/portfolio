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
    category
  } = project

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 backdrop-blur-md">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />

      {/* Category */}
      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-white text-lg mt-3 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/60 text-sm mb-4">
        {description}
      </p>

      {/* Technologies */}
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

      {/* Metrics */}
      {metrics && (
        <div className="flex items-center gap-2 text-green-400 text-sm mb-4">
          <TrendingUp size={16} />
          <p>{metrics}</p>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            <ExternalLink size={18} />
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            <Github size={18} />
          </a>
        )}
      </div>

    </div>
  )
}

export default ProjectCard
