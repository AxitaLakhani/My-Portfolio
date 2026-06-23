"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Contact"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-950/60 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="#home" className="relative group">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition duration-300">
            Akshita Lakhani
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300 relative py-1 group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white p-1 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {links.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors py-2 border-b border-white/5 last:border-0"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}





// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const links = [
//   "Home",
//   "About",
//   "Projects",
//   "Experience",
//   "Skills",
//   "Contact",
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header
//       className="
//       fixed top-0 left-0 w-full z-[999]
//         backdrop-blur-xl
//         bg-black/60
//         supports-[backdrop-filter]:bg-black/30
//         border-b border-white/10
//       "
//     >
//       <nav className="max-w-7xl mx-auto px-5 py-5">

//         <div className="flex items-center justify-between">

//           {/* Logo */}

//           <h1 className="font-bold text-xl sm:text-2xl">
//             Akshita Lakhani
//           </h1>

//           {/* Desktop menu */}

//           <div className="hidden md:flex gap-8">
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className="
//                 hover:text-purple-500
//                 transition
//                 "
//               >
//                 {link}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Toggle */}

//           <button
//             onClick={() => setOpen(!open)}
//             className="
//             md:hidden
//             p-2
//             rounded-lg
//             border border-white/10
//             "
//           >
//             {open ? (
//               <X size={24} />
//             ) : (
//               <Menu size={24} />
//             )}
//           </button>

//         </div>

//         {/* Mobile Menu */}

// <div
//   className={`
//   md:hidden
//   overflow-hidden
//   transition-all
//   duration-300
//   ${
//     open
//       ? "max-h-[500px] opacity-100 mt-5"
//       : "max-h-0 opacity-0"
//   }
//   `}
// >
//   <div
//     className="
//     flex flex-col
//     gap-2
//     py-4
//     rounded-2xl
//     border border-white/10
//     mt-3
//     bg-zinc-900/95
//     shadow-xl
//     "
//   >
//     {links.map((link) => (
//       <Link
//         key={link}
//         href={`#${link.toLowerCase()}`}
//         onClick={() => setOpen(false)}
//         className="
//         px-5
//         py-3
//         text-white
//         hover:text-purple-500
//         hover:bg-white/5
//         rounded-lg
//         transition
//         "
//       >
//         {link}
//       </Link>
//     ))}
//   </div>
// </div>

//       </nav>
//     </header>
//   );
// }
