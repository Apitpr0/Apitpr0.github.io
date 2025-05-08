export const About = () => {
  const OSProficiency = ["Windows", "Linux", "Android"];
  const ProgrammingLanguages = [
    "Python",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Tailwind CSS",
    "MySQL",
    "PowerShell",
    "Bash",
  ];
  const SecurityTools = ["Burp Suite", "Metasploit", "CyberChef", "Kali Linux"];
  const MonitoringTools = ["Nmap", "Nessus", "Wireshark"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <p className="text-gray-300 mb-6 leading-relaxed text-justify">
            IT security enthusiast with skills in Python, C++, and Java.
            Familiar with networking, operating systems, and security tools like
            Burp Suite and Metasploit. Currently learning and aiming to grow as
            a future security engineer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OS Proficiency */}
            <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">
                Operating Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {OSProficiency.map((os) => (
                  <span
                    key={os}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {os}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {ProgrammingLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Security Tools */}
            <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">
                Security Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {SecurityTools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Monitoring Tools */}
            <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">
                Monitoring Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {MonitoringTools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-white flex items-start">
              <span className="mr-2">📚</span>
              <span>
                Diploma in Information Technology, Digital Technology in
                Cybersecurity
              </span>
            </h3>
            <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2">
              <li>
                Tasek Gelugor Metro Polytechnic (January 2021 - January 2024)
              </li>
            </ul>
            <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2 mt-2">
              <li>
                Relevant Coursework: Ethical Hacking, Security in Web
                Application, Security Audit, Security Operation Center,
                Programming in Python.
              </li>
            </ul>
          </div>

          {/* Degree Education */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-white flex items-start">
              <span className="mr-2">🎓</span>
              <span>Bachelor’s Degree in Computer Science (Cybersecurity)</span>
            </h3>
            <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2">
              <li>
                Technical University of Malacca, Currently enrolled, October
                2024 - October 2027
              </li>
            </ul>
            <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2 mt-2">
              <li>
                Relevant Coursework: Physical Security and Electronic
                Surveillance, Data Communication and Networking, Computer
                Network, Malware Analysis.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Certificates */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">
              🎖️ Certificates
            </h3>
            <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2">
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
                Best Project for IT, SKLY-CMS (Counselling Management System)
              </li>
              <li>
                <strong>Participant</strong> - PMTG Innotech – Amalan Baik
                Pendigitalan Pendidikan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
