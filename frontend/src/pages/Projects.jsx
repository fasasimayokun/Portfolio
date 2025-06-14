import projects from "../utils/data/projectsData";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-10">
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="font-semibold text-gray-700">Tech Stack:</span>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-green-600 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
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
};

export default Projects;
