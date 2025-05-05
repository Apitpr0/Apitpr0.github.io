import React from "react";
import TM from "../../assets/tm.webp";
import Intern from "../../assets/intern.jpg";

export const WorkExperience = () => {
  return (
    <section
      id="workexp"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Telekom Malaysia */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <img
              src={TM}
              alt="Telekom Malaysia logo"
              className="h-16 mb-4 rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300 bg-white p-2"
            />
            <h3 className="text-xl font-bold mb-2 text-white">
              Technical Assistant
            </h3>
            <p className="text-gray-400 mb-1">Telekom Malaysia · Contract</p>
            <p className="text-gray-400 mb-1">Feb 2024 – Oct 2024 · 9 mos</p>
            <p className="text-gray-400 mb-2">
              Langkawi, Kedah, Malaysia · On-site
            </p>
            <p className="text-gray-300 mb-2">
              Government Specialized Services (GSS)
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                Civil Aviation Authority Malaysia (CAAM) - Instrument Landing
                System (ILS) Maintenance and Support
              </li>
              <li>
                NG999 Malaysia's New Generation 999 services for emergency
                services
              </li>
              <li>
                Ministry of Defense Malaysia (MINDEF) Automated Messaging
                Switching System (AMSS) and Network Convergence Center (NWC)
              </li>
            </ul>
          </div>

          {/* Internship */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <img
              src={Intern}
              alt="Internship logo"
              className="h-16 mb-4 rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold mb-2 text-white">
              Information Technology Intern
            </h3>
            <p className="text-gray-400 mb-1">
              Triodynamics Tech Venture · Internship
            </p>
            <p className="text-gray-400 mb-1">Aug 2023 – Feb 2024 · 7 mos</p>
            <p className="text-gray-400 mb-2">Penang, Malaysia · On-site</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                Led the successful deployment of multiple government agencies
                (LHDN, POJ, JPJ, SSM).
              </li>
              <li>
                Performed regular hardware maintenance, software updates, and
                implemented preventive measures to enhance system reliability.
              </li>
              <li>
                Executed corrective maintenance procedures to address hardware
                and software issues promptly, minimizing disruptions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
