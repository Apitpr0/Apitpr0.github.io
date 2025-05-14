import { useEffect } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="container mx-auto fixed top-0 w-full z-40  backdrop-blur-xs border-b border-white/5">
      <div className=" mx-auto px-3">
        <div className="flex justify-between items-center h-10 md:h-12">
          <a
            href="#home"
            className="font-mono text-lg md:text-xl font-bold text-foreground"
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
              className="text-xs md:text-sm text-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xs md:text-sm text-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#workexp"
              className="text-xs md:text-sm text-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-xs md:text-sm text-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xs md:text-sm text-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
