export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20"
    >
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto space-y-8 md:flex-row md:space-y-0 md:space-x-8 pt-16 md:pt-24">
        {/* Image from Imgur (on top) */}
        <div className="w-40 h-40 md:w-96 md:h-96 flex justify-center">
          <img
            src="https://i.imgur.com/hqEqTat.jpeg"
            alt="Afiq"
            className="w-full h-full rounded-full object-cover shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-center z-10 md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
            Hi, I'm Afiq
          </h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto md:text-justify leading-relaxed">
            I'm a second-year degree student at the Technical University of
            Malacca specializing in IT Security. I am passionate about
            cybersecurity and have a keen interest in ethical hacking and
            penetration testing. I am always eager to learn and grow in this
            field.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-foreground px-6 py-3 rounded font-medium transition-transform duration-200 ease-in-out relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              View Project
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-16 flex flex-col items-center animate-bounce cursor-pointer w-full">
        <a
          href="#about"
          className="text-blue-500 font-medium text-base md:text-lg"
        >
          ↓ Scroll Down
        </a>
      </div>
    </section>
  );
};
