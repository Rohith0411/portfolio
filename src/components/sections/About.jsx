import React from "react";
import FadeIn from "../animations/FadeIn";
import { Code2, GraduationCap, Briefcase } from "lucide-react";
import { skills } from "../../data/Skills";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black py-15 scroll-mt-20"
    >
      {/* Green Ring Background */}
      <div
        className="absolute top-1/2 right-[-120px] -translate-y-1/2 
        w-[380px] h-[380px] rounded-full 
        border-[35px] border-green-500/20 
        blur-sm pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full 
              border border-green-500/30 bg-green-500/10 
              text-green-400 text-sm"
            >
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Fresher MERN Stack Developer
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              A motivated developer focused on building modern, responsive,
              and real-world web applications.
            </p>
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <FadeIn delay={150}>
            <div className="space-y-6 text-white/70 text-base leading-relaxed max-w-xl">
              <p>
                I’m a passionate{" "}
                <span className="text-white">
                  Fresher MERN Stack Developer
                </span>{" "}
                focused on building clean and scalable applications.
              </p>

              <p>
                I specialize in{" "}
                <span className="text-white">
                  MongoDB, Express, React, Node
                </span>{" "}
                and enjoy turning ideas into functional products.
              </p>

              <p>
                I’m actively looking for an{" "}
                <span className="text-white">
                  entry-level developer role
                </span>{" "}
                to grow and contribute to impactful projects.
              </p>
            </div>
          </FadeIn>

          {/* Right Cards */}
          <FadeIn delay={250}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl ml-auto">

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 ">
                <Code2 className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-white text-lg mb-2">Technical Skills</h4>
                <p className="text-white/60 text-sm">
                  MERN Stack, REST APIs, Tailwind CSS, Git
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <GraduationCap className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-white text-lg mb-2">Learning Mindset</h4>
                <p className="text-white/60 text-sm">
                  Always improving and adapting to new technologies
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2">
                <Briefcase className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-white text-lg mb-2">Career Goal</h4>
                <p className="text-white/60 text-sm">
                  To start my career as a full-stack developer and grow in a
                  professional environment
                </p>
              </div>

            </div>
          </FadeIn>

        </div>

        {/* Skills Section */}
        <FadeIn delay={400}>
          <div className="flex flex-col items-center gap-8 mt-16">

            <div className="text-center">
              <h3 className="text-2xl font-normal text-white mb-2">
                Tech Stack & Expertise
              </h3>
              <p className="text-sm text-white/60">
                Technologies I use to build applications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.id}
                    className="group relative bg-white/5 hover:bg-white/10 
                    border border-white/10 hover:border-green-500/50 
                    rounded-2xl p-6 flex flex-col items-center 
                    justify-center gap-3 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-8 h-8 text-green-400" />

                    <div className="text-sm text-white/80 font-medium text-center">
                      {skill.name}
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl 
                      bg-gradient-to-r from-green-500/0 to-green-500/0 
                      group-hover:from-green-500/10 group-hover:to-green-500/10 
                      transition-all duration-300">
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;
