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
        <div className="p-6 rounded-xl border border-white/40 bg-background/80 dark:bg-transparent dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 mb-10">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-foreground leading-relaxed text-justify">
            Passionate IT security student with a strong interest in ethical
            hacking and real-world network defense. Skilled in Python, C++, and
            Java, with hands-on experience using tools like Burp Suite,
            Metasploit, and Wireshark. Actively exploring penetration testing,
            firewalls, and secure network architecture to prepare for a future
            in cybersecurity engineering.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-10 mb-10">
          {/* OS Proficiency */}
          <div className="rounded-xl p-6 border border-white/40 bg-background/80 dark:bg-transparent dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
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
          <div className="rounded-xl p-6 border border-white/40 bg-background/80 dark:bg-transparent dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
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
          <div className="rounded-xl p-6 border border-white/40 bg-background/80 dark:bg-transparent dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
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
          <div className="rounded-xl p-6 border border-white/40 bg-background/80 dark:bg-transparent dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
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
          <div className="p-6 rounded-xl border border-white/40 bg-background/80 dark:bg-transparent dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
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
              <li>Tasek Gelugor Metro Polytechnic (Jan 2021 – Jan 2024)</li>
              <li>
                This diploma program introduced me to the foundations of
                cybersecurity, computer systems, and network infrastructure. It
                emphasized practical skills in configuring secure environments,
                threat analysis, and system hardening.
              </li>
              <li>
                I developed a strong understanding of ethical hacking
                principles, web security techniques, and the operational role of
                a Security Operation Center (SOC), enabling me to assess
                vulnerabilities and defend against common cyber threats.
              </li>
              <li>
                In addition to core IT subjects, I actively engaged in
                real-world simulations and group-based security audits, which
                honed my problem-solving and teamwork capabilities.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {/* Badges */}
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
          <div className="p-6 rounded-xl border border-white/40 bg-background/80 dark:bg-transparent dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
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
              <li>Technical University of Malacca (Oct 2024 – Oct 2027)</li>
              <li>
                This degree program focuses on advanced cybersecurity
                methodologies, secure system development, and digital forensics.
                It provides theoretical grounding and hands-on practice in
                defending enterprise systems and conducting penetration testing.
              </li>
              <li>
                I expect to dive deeper into malware behavior, risk management,
                compliance, and cloud security while working on capstone
                projects that simulate real-world threat environments.
              </li>
              <li>
                The curriculum also emphasizes research-based learning and
                critical thinking, preparing me to adapt to rapidly evolving
                attack vectors and security trends in the cybersecurity
                industry.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {/* Badges */}
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

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Certificates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certified Penetration Tester */}
            <div className="p-6 rounded-xl border border-white/40 bg-background/80 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                🎖️ Certified Penetration Tester
              </h3>
              <img
                src="https://i.imgur.com/WIcwwXC.png"
                alt="Certified Penetration Tester"
                className="rounded-lg border-0 shadow-md hover:scale-105 transition-transform duration-300 w-full h-48 object-contain bg-white dark:bg-transparent"
              />
              <p className="text-foreground mt-4">
                Issued by <strong>Cyber Security Malaysia</strong>
              </p>
              <p className="text-foreground mt-2 text-justify leading-relaxed">
                This certificate validates hands-on expertise in ethical hacking
                and offensive security. The training included real-world
                penetration testing scenarios, vulnerability assessment, exploit
                development, and post-exploitation activities. Participants
                demonstrated proficiency in using industry-standard tools like
                Metasploit, Nmap, and Burp Suite to simulate attacks on
                networked systems in a controlled lab environment. It emphasizes
                practical defense evasion, exploitation techniques, and red
                teaming.
              </p>
            </div>

            {/* ASCIS 2022 */}
            <div className="p-6 rounded-xl border border-white/40 bg-background/80 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-foreground">
                🎖️ ASEAN Student Contest in Information Security (ASCIS 2022)
              </h3>
              <img
                src="https://i.imgur.com/RKBOnG1.png"
                alt="ASCIS 2022 Certificate"
                className="rounded-lg border border-white/10 shadow-md hover:scale-105 transition-transform duration-300 w-full h-48 object-contain bg-white dark:bg-transparent rotate-0"
              />
              <p className="text-foreground mt-4">
                Role: <strong>Participant</strong>
              </p>
              <p className="text-foreground mt-2 text-justify leading-relaxed">
                Participated in a highly competitive regional Capture The Flag
                (CTF) contest hosted by ASCIS, where teams solve challenges in
                cryptography, forensics, reverse engineering, web exploitation,
                and binary exploitation. The competition nurtures both technical
                acumen and collaboration under pressure, simulating real-world
                adversarial problem-solving and teamwork in time-critical
                environments.
              </p>
            </div>

            {/* PMTG InnoMetro 2023 */}
            <div className="p-6 rounded-xl border border-white/40 bg-background/80 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-foreground">
                🎖️ PMTG InnoMetro 2023
              </h3>
              <img
                src="https://i.imgur.com/lk2mLrc.jpeg"
                alt="PMTG InnoMetro 2023 Certificate"
                className="rounded-lg border border-white/10 shadow-md hover:scale-105 transition-transform duration-300 w-full h-48 object-contain bg-white dark:bg-transparent rotate-0"
              />
              <p className="text-foreground mt-4">
                <strong>2nd Place – Best Project for IT</strong> (SKLY-CMS)
              </p>
              <p className="text-foreground mt-2 text-justify leading-relaxed">
                Earned second place for developing <strong>SKLY-CMS</strong>, a
                smart Counseling Management System designed to streamline
                scheduling, case tracking, and communication between counselors
                and students. The system featured secure login, encrypted data
                storage, and real-time updates, evaluated for technical
                innovation, usability, and relevance to educational improvement.
              </p>
            </div>

            {/* PMTG Innotech */}
            <div className="p-6 rounded-xl border border-white/40 bg-background/80 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-foreground">
                🎖️ PMTG Innotech
              </h3>
              <img
                src="https://i.imgur.com/g9e2x5d.png"
                alt="PMTG Innotech Certificate"
                className="rounded-lg border border-white/10 shadow-md hover:scale-105 transition-transform duration-300 w-full h-48 object-contain bg-white dark:bg-transparent rotate-0"
              />
              <p className="text-foreground mt-4">
                <strong>Participant</strong> – Amalan Baik Pendigitalan
                Pendidikan
              </p>
              <p className="text-foreground mt-2 text-justify leading-relaxed">
                Represented a digital innovation project under the theme of
                <strong> Best Practices in Digital Education</strong>.
                Demonstrated how modern technologies can enhance accessibility,
                engagement, and outcomes in educational environments. The
                exhibition emphasized practical implementation and digital
                transformation in classroom settings, promoting tech-based
                education reforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
