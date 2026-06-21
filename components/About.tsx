import Image from "next/image";
import { portfolioData } from "@/lib/data";

export default function About() {
  const allSkills = portfolioData.skills.flatMap((s) => s.items);
  return (
    <section
      id="about"
      className="portfolio-bg py-10 px-6"
    >
      <div className="grid-pattern"></div>

      <div className="content max-w-7xl mx-auto">

        <div className="text-center mb-16">
         <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
            Get To Know Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-[35px]
          p-8
          md:p-12
          shadow-2xl
          "
        >

          {/* Left */}

          <div className="flex justify-center">

            <div
              className="
              relative
              w-[280px]
              md:w-[350px]
              h-[350px]
              md:h-[430px]
              rounded-[30px]
              overflow-hidden
              border
              border-white/10
              shadow-xl
              hover:scale-105
              transition-all
              duration-500

              "
            >

              <Image
                src="/Profile.jpg"
                alt="Akshita"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Right */}

           <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
              Passionate Developer & <br />
              <span className="text-purple-400">Lifelong Learner</span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-6">
              {portfolioData.description}
            </p>

            {/* Mini cards */}

              <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors duration-300">
                <h4 className="text-cyan-400 text-xl font-bold">10+</h4>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  Academic & Personal Projects
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors duration-300">
                <h4 className="text-purple-400 text-xl font-bold">5+</h4>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  Core Technologies
                </p>
              </div>
            </div>


            {/* Skills */}

              <div className="mt-8">
              <h4 className="font-semibold text-white text-lg mb-4">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {allSkills.slice(0, 10).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm text-purple-200 hover:bg-purple-500/25 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}







// import { portfolioData } from "@/lib/data";
// import Image from "next/image";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-24 px-6"
//     >
//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl font-bold text-center mb-16">
//           About Me
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           {/* Image */}

//           <div className="flex justify-center">

//             <div
//               className="
//               relative
//               w-[280px]
//               h-[350px]
//               rounded-3xl
//               overflow-hidden
//               border
//               border-white/10
//               bg-white/5
//               backdrop-blur-lg
//               shadow-xl
//               hover:scale-105
//               transition-all
//               duration-500
//               "
//             >

//               <Image
//                 src="/Profile.jpg"
//                 alt="Akshita Lakhani"
//                 fill
//                 className="object-cover"
//               />

//             </div>

//           </div>

//           {/* Content */}

//           <div>

//             <p className="text-purple-400 font-medium mb-4">
//               Get To Know Me
//             </p>

//             <h3 className="text-3xl font-bold mb-6">
//               Passionate Developer & Lifelong Learner
//             </h3>

//             <p className="text-gray-300 leading-8 mb-6">

//               I’m passionate about building modern web experiences
//               and continuously learning new technologies.
//               I enjoy solving problems, creating responsive
//               applications, and turning ideas into clean,
//               functional, and meaningful digital solutions.

//             </p>

//             <div className="grid grid-cols-2 gap-4">

//               <div
//                 className="
//                 p-4
//                 rounded-xl
//                 border
//                 border-white/10
//                 bg-white/5
//                 "
//               >
//                 <h4 className="font-bold">
//                   Experience
//                 </h4>

//                 <p className="text-gray-400">
//                   Full Stack Development
//                 </p>

//               </div>

//               <div
//                 className="
//                 p-4
//                 rounded-xl
//                 border
//                 border-white/10
//                 bg-white/5
//                 "
//               >
//                 <h4 className="font-bold">
//                   Focus
//                 </h4>

//                 <p className="text-gray-400">
//                   Web Applications
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }