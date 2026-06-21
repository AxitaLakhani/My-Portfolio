"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      fixed top-0 left-0 w-full z-[999]
        backdrop-blur-xl
        bg-black/60
        supports-[backdrop-filter]:bg-black/30
        border-b border-white/10
      "
    >
      <nav className="max-w-7xl mx-auto px-5 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <h1 className="font-bold text-xl sm:text-2xl">
            Akshita Lakhani
          </h1>

          {/* Desktop menu */}

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                hover:text-purple-500
                transition
                "
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setOpen(!open)}
            className="
            md:hidden
            p-2
            rounded-lg
            border border-white/10
            "
          >
            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

<div
  className={`
  md:hidden
  overflow-hidden
  transition-all
  duration-300
  ${
    open
      ? "max-h-[500px] opacity-100 mt-5"
      : "max-h-0 opacity-0"
  }
  `}
>
  <div
    className="
    flex flex-col
    gap-2
    py-4
    rounded-2xl
    border border-white/10
    mt-3
    bg-zinc-900/95
    shadow-xl
    "
  >
    {links.map((link) => (
      <Link
        key={link}
        href={`#${link.toLowerCase()}`}
        onClick={() => setOpen(false)}
        className="
        px-5
        py-3
        text-white
        hover:text-purple-500
        hover:bg-white/5
        rounded-lg
        transition
        "
      >
        {link}
      </Link>
    ))}
  </div>
</div>

      </nav>
    </header>
  );
}






// "use client"

// import Link from "next/link"

// const links=[
// "Home",
// "About",
// "Projects",
// "Experience",
// "Skills",
// "Contact"
// ]

// export default function Navbar(){

// return(

// <header className="fixed top-0 z-50 w-full backdrop-blur-lg border-b">

// <nav className="container mx-auto flex justify-between p-5">

// <h1 className="font-bold text-xl">
// Akshita Lakhani
// </h1>

// <div className="hidden md:flex gap-8">

// {links.map(link=>(

// <Link
// key={link}
// href={`#${link.toLowerCase()}`}
// className="hover:text-purple-500 transition"
// >

// {link}

// </Link>

// ))}

// </div>

// </nav>

// </header>

// )

// }