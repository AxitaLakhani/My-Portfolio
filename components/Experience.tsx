import { portfolioData } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience(){

return(

<section
id="experience"
className="portfolio-bg py-10 px-6"
>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
            My Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-10 space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <span className="absolute -left-[41px] md:-left-[49px] top-1.5 flex items-center justify-center w-7 h-7 rounded-full bg-slate-950 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Briefcase size={12} className="text-purple-400" />
              </span>

              {/* Experience Card */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.05)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-gray-300 w-fit">
                    {exp.duration}
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-sm sm:text-base text-gray-400">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

</section>

)

}