import React from "react"
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden pt-20">

      {/* Glow Background */}
      <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">

        {/* Top Border */}
        <div className="border-t border-white/10 pt-16 grid md:grid-cols-3 gap-12">

          {/* LEFT SECTION */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Rohith
            </h2>

            <p className="text-white/60 mb-6">
              Crafting seamless digital experiences with modern web technologies.
            </p>

            {/* Email Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 mb-4 hover:border-green-500/40 transition">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Mail size={18} className="text-green-400" />
              </div>
              <span className="text-sm">rohithar0411@gmail.com</span>
            </div>

            {/* Location Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-green-500/40 transition">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <MapPin size={18} className="text-green-400" />
              </div>
              <span className="text-sm">India</span>
            </div>
          </div>

          {/* MIDDLE SECTION */}
<div>
  <h3 className="text-lg font-semibold mb-6">
    Quick Links
  </h3>

  <ul className="space-y-3 text-white/60">

    <li>
      <a
        href="#home"
        className="hover:text-green-400 transition"
      >
        Home
      </a>
    </li>

    <li>
      <a
        href="#about"
        className="hover:text-green-400 transition"
      >
        About
      </a>
    </li>

    <li>
      <a
        href="#skills"
        className="hover:text-green-400 transition"
      >
        Skills
      </a>
    </li>

    <li>
      <a
        href="#projects"
        className="hover:text-green-400 transition"
      >
        Projects
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="hover:text-green-400 transition"
      >
        Contact
      </a>
    </li>

  </ul>
</div>


          {/* RIGHT SECTION */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect With Me
            </h3>

            <p className="text-white/60 mb-6">
              Let’s connect and create something amazing together.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Rohith0411"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-green-500/20 hover:border-green-500/40 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/rohith-a-6a254120a/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-green-500/20 hover:border-green-500/40 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://x.com/RohithAr04"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-green-500/20 hover:border-green-500/40 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-16 py-6 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">

          <p>
            © {new Date().getFullYear()} Rohith A. All rights reserved.
          </p>

          <p>
            Built with <span className="text-green-400">❤</span> using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer
