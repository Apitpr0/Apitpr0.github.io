export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SKLY-CMS Project */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            {/* Screenshot displayed directly */}
            <img
              src="https://i.imgur.com/ci1gXQq.png"
              alt="SKLY-CMS Screenshot"
              className="rounded-lg mb-4 border border-white/10 hover:scale-105 transition-transform duration-300"
            />

            {/* Project Title */}
            <h3 className="text-xl font-bold mb-4 text-white">
              SKLY-CMS (Counselling Management System)
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              A web-based application designed to streamline the management of
              counselling sessions and client information. It provides a
              user-friendly interface for both counsellors and clients, allowing
              for easy scheduling, session tracking, and secure communication.
              The system aims to enhance the efficiency of counselling services
              while ensuring confidentiality and data security.
            </p>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "HTML",
                "CSS",
                "Javascript",
                "PHP",
                "Tailwind CSS",
                "MySQL",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex gap-6">
              {/* YouTube Link */}
              <a
                href="https://youtu.be/qzlosrxj-B4?si=hxXEuPx99mDRaFB4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 text-3xl transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/Apitpr0/skly-cms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 text-3xl transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* WebDL Script Project */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            {/* Placeholder Image */}
            <img
              src="https://i.imgur.com/7bPggFV.png" // Reuse the same image or replace with another
              alt="WebDL Script Screenshot"
              className="rounded-lg mb-4 border border-white/10 hover:scale-105 transition-transform duration-300"
            />

            {/* Project Title */}
            <h3 className="text-xl font-bold mb-4 text-white">WebDL Script</h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              A command-line script for downloading videos and files from
              various websites efficiently. Supports multiple platforms and
              offers customizable download options for users who prefer
              terminal-based solutions. The script is designed to be lightweight
              and easy to use, making it a valuable tool for users who
              frequently download media content. It leverages the power of
              existing tools like youtube-dl and FFmpeg to provide a seamless
              experience. It also allows users to download videos in different
              formats and resolutions, catering to various needs and
              preferences.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "Youtube-DL", "FFmpeg", "CLI Tool"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Icons */}
            <div className="flex gap-6">
              {/* GitHub Link */}
              <a
                href="https://github.com/Apitpr0/webdl-script"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 text-3xl transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
