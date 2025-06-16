import "./index.css";
import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { WorkExperience } from "./components/sections/WorkExperience";
import { ThemeProvider } from "@/components/theme-provider";

// Hook to detect if dark mode is active (works in Vite)
function useIsDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    check(); // initial check

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = useIsDarkMode();

  // Smooth scrolling logic
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) scrollToSection(target);
    };

    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  const scrollToSection = (target) => {
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    const duration = 1000;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run =
        easeOutCubic(Math.min(timeElapsed / duration, 1)) * distance +
        startPosition;
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {!isLoaded ? (
        // ⬛ Loading screen with plain background
        <div className="min-h-screen bg-white dark:bg-black">
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        </div>
      ) : (
        // 🌄 Main site content with light-mode background image only
        <div
          className={`min-h-screen bg-fixed bg-cover bg-center bg-no-repeat ${
            isDark ? "dark:bg-background" : ""
          }`}
          style={
            !isDark
              ? {
                  backgroundImage: `url("https://i.imgur.com/oJaYmnd.jpeg")`,
                }
              : {}
          }
        >
          <div
            className={`container mx-auto transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <WorkExperience />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
