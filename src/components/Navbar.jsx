import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.9)] backdrop-blur-xs border-b border-white/5">
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex justify-between items-center h-10 md:h-12">
          <a
            href="#home"
            className="font-mono text-lg md:text-xl font-bold text-white"
          >
            Invictus<span className="text-blue-500">.MY</span>
          </a>
          <div
            className="w-5 h-4 relative cursor-pointer z-40 md:hidden text-sm"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#home"
              className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#workexp"
              className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
