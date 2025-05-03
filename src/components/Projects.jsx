import { Github, ExternalLink } from "lucide-react";
import { projects } from "../constants/projects";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a1324]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Projects
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111a2e] rounded-lg overflow-hidden border border-[#1e293b] hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#0a1324] text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  {project.isDeployed && (
                    <a
                      href={project.live}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
