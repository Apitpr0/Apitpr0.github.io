export const About = () => {
  const OSProficiency = [
    { name: "Windows", level: "Expert" },
    { name: "Linux", level: "Intermediate" },
    { name: "Android", level: "Beginner" },
  ];

  const ProgrammingLanguages = [
    { name: "Python", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "PowerShell", level: "Intermediate" },
    { name: "Bash", level: "Intermediate" },
  ];

  const SecurityTools = [
    { name: "Burp Suite", level: "Beginner" },
    { name: "Metasploit", level: "Beginner" },
    { name: "CyberChef", level: "Intermediate" },
    { name: "Kali Linux", level: "Beginner" },
  ];

  const MonitoringTools = [
    { name: "Nmap", level: "Intermediate" },
    { name: "Nessus", level: "Beginner" },
    { name: "Wireshark", level: "Intermediate" },
  ];

  const getBadgeClass = (level) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-800 dark:text-green-300";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-800 dark:text-yellow-300";
      case "Beginner":
        return "bg-red-500/20 text-red-800 dark:text-red-300";
      default:
        return "bg-gray-500/20 text-gray-800 dark:text-gray-300";
    }
  };

  const SkillBadge = ({ name, level }) => (
    <div className="relative group">
      <span
        className={`px-3 py-1 rounded-full text-sm cursor-default ${getBadgeClass(
          level
        )}`}
      >
        {name}
      </span>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap shadow">
        {level}
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="w-full px-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-foreground mb-10 leading-relaxed text-justify">
          Passionate IT security student with a strong interest in ethical
          hacking and real-world network defense. Skilled in Python, C++, and
          Java, with hands-on experience using tools like Burp Suite,
          Metasploit, and Wireshark. Actively exploring penetration testing,
          firewalls, and secure network architecture to prepare for a future in
          cybersecurity engineering.
        </p>

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-10 mb-10">
          {/* OS Proficiency */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Operating Systems
            </h3>
            <div className="flex flex-wrap gap-2">
              {OSProficiency.map(({ name, level }) => (
                <SkillBadge key={name} name={name} level={level} />
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {ProgrammingLanguages.map(({ name, level }) => (
                <SkillBadge key={name} name={name} level={level} />
              ))}
            </div>
          </div>

          {/* Security Tools */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Security Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {SecurityTools.map(({ name, level }) => (
                <SkillBadge key={name} name={name} level={level} />
              ))}
            </div>
          </div>

          {/* Monitoring Tools */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Monitoring Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {MonitoringTools.map(({ name, level }) => (
                <SkillBadge key={name} name={name} level={level} />
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Diploma */}
          <div className="bg-background rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="bg-white p-2 rounded-lg mb-4">
              <img
                src="https://i.imgur.com/8DlhGEG.jpeg"
                alt="Diploma"
                className="w-full h-35 object-contain rounded-lg"
              />
            </div>
            <h3 className="flex items-start gap-2 text-xl font-bold mb-4 text-foreground">
              <span>🎓</span>
              <span>
                Diploma in Information Technology (Digital Technology) in
                Cybersecurity
              </span>
            </h3>
            <ul className="list-disc list-outside pl-6 text-foreground space-y-2 mb-4 leading-relaxed">
              <li>Tasek Gelugor Metro Polytechnic (Jan 2021 - Jan 2024)</li>
              <li>
                This program focuses on Computing with an emphasis on
                Information Technology...
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Ethical Hacking", level: "Intermediate" },
                { name: "Web Security", level: "Intermediate" },
                { name: "Security Audit", level: "Intermediate" },
                { name: "Security Operation Center", level: "Intermediate" },
                { name: "Python", level: "Intermediate" },
              ].map(({ name, level }) => (
                <div key={name} className="relative group">
                  <span
                    className={`px-3 py-1 rounded-full text-sm cursor-default ${getBadgeClass(
                      level
                    )}`}
                  >
                    {name}
                  </span>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap shadow">
                    {level}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Degree */}
          <div className="bg-background rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="bg-white p-2 rounded-lg mb-4">
              <img
                src="https://i.imgur.com/qgP4BHh.png"
                alt="Degree"
                className="w-full h-35 object-contain rounded-lg"
              />
            </div>
            <h3 className="flex items-start gap-2 text-xl font-bold mb-4 text-foreground">
              <span>🎓</span>
              <span>
                Bachelor's Degree in Computer Science (Computer Security) with
                Honours
              </span>
            </h3>
            <ul className="list-disc list-outside pl-6 text-foreground space-y-2 mb-4">
              <li>Technical University of Malacca (Oct 2024 - Oct 2027)</li>
              <li>
                This course is aimed to produce highly knowledgeable and
                skillful graduates...
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Physical Security", level: "Intermediate" },
                { name: "Networking", level: "Intermediate" },
                { name: "Computer Network", level: "Intermediate" },
                { name: "Malware Analysis", level: "Beginner" },
                { name: "Cloud Computing", level: "Beginner" },
              ].map(({ name, level }) => (
                <div key={name} className="relative group">
                  <span
                    className={`px-3 py-1 rounded-full text-sm cursor-default ${getBadgeClass(
                      level
                    )}`}
                  >
                    {name}
                  </span>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap shadow">
                    {level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <h2 className="text-3xl font-bold mb-8 mt-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 mt-10">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            🎖️ Certificates
          </h3>
          <ul className="list-disc list-outside pl-6 text-foreground space-y-2">
            <li>
              <strong>Certified Penetration Tester</strong> - Cyber Security
              Malaysia
            </li>
            <li>
              <strong>Participant</strong> - ASEAN Student Contest in
              Information Security (ASCIS 2022)
            </li>
            <li>
              <strong>Participant</strong> - PMTG InnoMetro 2023 – 2nd Place
              Best Project for IT, SKLY-CMS
            </li>
            <li>
              <strong>Participant</strong> - PMTG Innotech – Amalan Baik
              Pendigitalan Pendidikan
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
