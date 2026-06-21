"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const outerTech: string[] = [
  "React",
  ".NET Core",
  "C#",
  "SQL Server",
];

const innerTech: string[] = [
  "Tailwind",
  "JavaScript",
  "TypeScript",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="portfolio-bg min-h-screen py-12 overflow-hidden"
    >
      <div className="grid-pattern"></div>

      <div className="content px-5 pt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="order-2 lg:order-1 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              className="inline-block px-4 py-2 mb-6 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-sm"
            >
              ✨ Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-zinc-100">
                Akshita Lakhani
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="mt-5 text-xl sm:text-2xl font-semibold text-gray-300"
            >
              .NET Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-lg max-w-xl mx-auto lg:mx-0"
            >
              Passionate about building scalable web applications
              using React, .NET and SQL Server. I focus on
              creating clean UI, optimized performance and
              seamless user experiences.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .7 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={18}/>
              </a>

              <a
                href="/Akshita-resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-gray-600 hover:border-purple-500 hover:bg-white/5 transition flex items-center gap-2"
              >
                <Download size={18}/>
                Resume
              </a>
            </motion.div>

            {/* STATS */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-10 mt-12 border-t border-white/10 pt-8"
            >

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10+
                </h3>
                <p className="text-xs text-gray-400 uppercase">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  5+
                </h3>
                <p className="text-xs text-gray-400 uppercase">
                  Tech Stack
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  100%
                </h3>
                <p className="text-xs text-gray-400 uppercase">
                  Dedication
                </p>
              </div>

            </motion.div>

          </div>

          {/* RIGHT ORBIT */}

         {/* RIGHT ORBIT */}

<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="order-1 lg:order-2 flex justify-center"
>
  <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px]">

    {/* Glow */}
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[220px] h-[220px] bg-purple-500/20 rounded-full blur-[100px]" />
    </div>

    {/* OUTER RING */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[280px]
      h-[280px]
      sm:w-[360px]
      sm:h-[360px]
      lg:w-[450px]
      lg:h-[450px]
      rounded-full
      border border-purple-500/20
      "
    >
      {outerTech.map((tech, index) => {
        const angle =
          (index * 2 * Math.PI) /
          outerTech.length;

        const radius = 225;

        const x =
          radius * Math.cos(angle);

        const y =
          radius * Math.sin(angle);

        return (
          <motion.div
            key={tech}
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px - 40px)`,
              top: `calc(50% + ${y}px - 40px)`,
            }}
          >
            <div
              className="
              w-16 h-16
              sm:w-18 sm:h-18
              lg:w-20 lg:h-20
              rounded-full
              bg-purple-500/10
              border border-purple-400/30
              backdrop-blur-xl
              flex items-center justify-center
              text-[10px]
              sm:text-xs
              text-center
              p-2
              "
            >
              {tech}
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    {/* INNER RING */}

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[180px]
      h-[180px]
      sm:w-[260px]
      sm:h-[260px]
      rounded-full
      border border-cyan-500/20
      "
    >
      {innerTech.map((tech, index) => {
        const angle =
          (index * 2 * Math.PI) /
          innerTech.length;

        const radius = 130;

        const x =
          radius * Math.cos(angle);

        const y =
          radius * Math.sin(angle);

        return (
          <motion.div
            key={tech}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px - 32px)`,
              top: `calc(50% + ${y}px - 32px)`,
            }}
          >
            <div
              className="
              w-14 h-14
              sm:w-16 sm:h-16
              rounded-full
              bg-cyan-500/10
              border border-cyan-400/30
              backdrop-blur-xl
              flex items-center justify-center
              text-[10px]
              text-center
              p-2
              "
            >
              {tech}
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    {/* CENTER */}

    <div
      className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-32 h-32
      sm:w-40 sm:h-40
      rounded-full
      bg-gradient-to-br
      from-purple-600/30
      to-cyan-500/30
      border border-white/10
      backdrop-blur-xl
      flex items-center justify-center
      z-50
      "
    >
      <h2 className="font-bold text-lg">
        Tech Stack
      </h2>
    </div>

  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}











// "use client";

// import { motion } from "framer-motion";
// import { Download, ArrowRight } from "lucide-react";

// const outerTech = ["React", ".NET Core", "C#", "SQL Server"];
// const innerTech = ["Tailwind css", "JavaScript", "TypeScript"];

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className= "portfolio-bg py-12"
//     >
//     <div className="grid-pattern"></div>
//     <div className="content pt-10">
//       {/* Background Effects */}
//       {/* <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px]" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" /> */}

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10"> 
          
//         {/* Left Side */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: .5 }}
//             className="inline-block px-4 py-2 mb-6 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-sm"
//           >
//             ✨ Available for Work
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: .8 }}
//             className="text-5xl lg:text-5xl font-bold leading-tight"
//           >
//             Hi, I'm{" "}
//             <span className="text-zinc-100">
//               Akshita Lakhani
//             </span>
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: .3 }}
//             className="mt-5 text-2xl font-semibold text-gray-300"
//           >
//             .NET Full Stack Developer
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mt-6 text-gray-300 leading-relaxed text-base sm:text-lg max-w-xl"
//           >
//             Passionate about building scalable web applications
//             using React, .NET and SQL Server. I focus on creating
//             clean UI, optimized performance and seamless user
//             experiences.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: .7 }}
//             className="mt-8 flex gap-5 flex-wrap"
//           >
          
//           <a
//           href="#projects"
//           className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2"
//           >
//             View Projects
//             <ArrowRight size={18} />
//           </a>
//           <a
//             href="/Akshita-resume.pdf"
//             download
//             className="px-6 py-3 rounded-xl border border-gray-600 hover:border-purple-500 hover:bg-white/5 transition flex items-center gap-2"
//           >
//             <Download size={18} />
//             Resume
//           </a>

//           </motion.div>

//           {/* Stats */}
//                    <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex gap-8 sm:gap-12 mt-12 border-t border-white/5 pt-8 w-full"
//           >
//             <div>
//               <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 10+
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">
//                 Projects Completed
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
//                 5+
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">
//                 Key Tech Stacks
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                 100%
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">
//                 Dedication
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Right Side Card */}
//         {/* <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="relative"
//         >
//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

//             <h3 className="text-xl font-semibold mb-6">
//               Tech Stack
//             </h3>

//             <div className="flex flex-wrap gap-4">
//               {[
//                 "React",
//                 ".NET",
//                 "C#",
//                 "SQL Server",
//                 "Tailwind",
//                 "JavaScript",
//                 "TypeScript"
//               ].map((tech, index) => (
//                 <div
//                   key={index}
//                   className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20"
//                 >
//                   {tech}
//                 </div>
//               ))}
//             </div>

//           </div>
//         </motion.div> */}




// {/* Right Side Orbit */}
// <motion.div
//   initial={{ opacity: 0, x: 100 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 1 }}
//   className="flex justify-center items-center"
// >
//   <div className="relative w-[450px] h-[450px]">

//     {/* Glow */}
//     <div className="absolute inset-0 flex items-center justify-center">
//       <div className="w-[280px] h-[280px] bg-purple-500/20 rounded-full blur-[100px]" />
//     </div>

//     {/* Outer Ring */}
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{
//         duration: 30,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//       className="
//       absolute
//       left-1/2
//       top-1/2
//       -translate-x-1/2
//       -translate-y-1/2
//       w-[480px]
//       h-[480px]
//       rounded-full
//       border border-purple-500/20
//       "
//     >
//       {outerTech.map((tech, index) => {
//         const angle =
//           (index * 2 * Math.PI) / outerTech.length;

//         const radius = 230;

//         const x = radius * Math.cos(angle);
//         const y = radius * Math.sin(angle);

//         return (
//           <motion.div
//             key={tech}
//             animate={{ rotate: -360 }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute"
//             style={{
//               left: `calc(50% + ${x}px - 40px)`,
//               top: `calc(50% + ${y}px - 40px)`,
//             }}
//           >
//             <div
//               className="
//               w-20 h-20
//               rounded-full
//               bg-purple-500/10
//               border border-purple-400/30
//               backdrop-blur-xl
//               shadow-lg
//               flex items-center justify-center
//               text-sm
//               "
//             >
//               {tech}
//             </div>
//           </motion.div>
//         );
//       })}
//     </motion.div>

//     {/* Inner Ring */}
//     <motion.div
//       animate={{ rotate: -360 }}
//       transition={{
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//       className="
//       absolute
//       left-1/2
//       top-1/2
//       -translate-x-1/2
//       -translate-y-1/2
//       w-[300px]
//       h-[300px]
//       rounded-full
//       border border-cyan-500/20
//       "
//     >
//       {innerTech.map((tech, index) => {
//         // const angle =
//         //   (index * 2 * Math.PI) / innerTech.length;

//         const angle =
// (index * 2 * Math.PI) / innerTech.length + Math.PI / 2;

//         const radius = 150;

//         const x = radius * Math.cos(angle);
//         const y = radius * Math.sin(angle);
        

//         return (
//           <motion.div
//             key={tech}
//             animate={{ rotate: -360 }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute"
//             style={{
//               left: `calc(50% + ${x}px - 32px)`,
//               top: `calc(50% + ${y}px - 32px)`,
            
//             }}
//           >
//             <div
//               className="
//               w-20 h-20
//               rounded-full
//               bg-cyan-500/10
//               border border-cyan-400/30
//               backdrop-blur-xl
//               flex items-center justify-center
//               text-[11px]
//               "
//             >
//               {tech}
//             </div>
//           </motion.div>
//         );
//       })}
//     </motion.div>

//     {/* Center */}
//     <div
//       className="
//       absolute
//       left-1/2
//       top-1/2
//       -translate-x-1/2
//       -translate-y-1/2
//       w-40
//       h-40
//       rounded-full
//       bg-gradient-to-br
//       from-purple-600/30
//       to-cyan-500/30
//       border border-white/10
//       backdrop-blur-xl
//       flex items-center justify-center
//       z-50
//       "
//     >
//       <h2 className="font-bold text-xl">
//         Tech Stack
//       </h2>
//     </div>

//   </div>
// </motion.div>

//       </div>
//       </div>
//     </section>
//   );
// }















// // "use client"

// // import {motion} from "framer-motion"

// // export default function Hero(){

// // return(

// // <section
// // id="home"
// // className="min-h-screen flex items-center"
// // >

// // <div>

// // <motion.h1
// // initial={{opacity:0,y:20}}
// // animate={{opacity:1,y:0}}
// // >

// // Hi, I'm Akshita Lakhani

// // </motion.h1>

// // <h2 className="text-purple-500">

// // .NET Full Stack Developer

// // </h2>

// // <p>

// // Building scalable web applications using
// // React, .NET and SQL Server.

// // </p>

// // <div className="mt-5 flex gap-5">

// // <button>
// // View Projects
// // </button>

// // <button>
// // Download Resume
// // </button>

// // </div>

// // </div>

// // </section>

// // )

// // }
