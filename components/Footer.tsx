"use client";

import { portfolioData } from "@/lib/data";
import { ArrowUp, Mail } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/40 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Copyright */}
        <div className="text-center md:text-left">
          <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Akshita Lakhani
          </span>
          <p className="text-gray-500 text-xs sm:text-sm mt-1.5">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${portfolioData.email}`}
            aria-label="Email"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 text-gray-400 hover:text-purple-400 transition-all duration-300"
          >
            <Mail size={18} />
          </a>
          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 text-gray-400 hover:text-white transition-all duration-300"
          >
            <GrGithub size={18} />
          </a>
          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 text-gray-400 hover:text-cyan-400 transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Right: Scroll to Top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group flex items-center justify-center p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowUp size={18} className="group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
