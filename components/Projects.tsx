import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GrGithub } from "react-icons/gr";

export default function Projects(){

return(

<section
id="projects"
className="py-10 px-6"
>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
            My Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] border border-white/10 rounded-[24px] overflow-hidden backdrop-blur-xl hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-[200px] overflow-hidden bg-slate-950/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm mt-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-sm font-medium hover:text-white transition-all w-1/2"
                  >
                    <GrGithub size={16} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all w-1/2"
                  >
                    Live
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

</section>

)

}





// import { portfolioData } from "@/lib/data";

// const projects = portfolioData.projects;

// export default function Projects(){

// return(

// <section id="projects">

// <h2>Projects</h2>

// {projects.map((project,index)=>(

// <div key={index}>

// <h3>{project.title}</h3>

// <p>{project.description}</p>

// </div>

// ))}

// </section>

// )

// }