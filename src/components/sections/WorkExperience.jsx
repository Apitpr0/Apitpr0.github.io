import React from "react";
import TM from "../../assets/tm.svg";
import Intern from "../../assets/intern.jpg";

export const WorkExperience = () => {
  return (
    <section
      id="workexp"
      className="min-h-screen py-16 px-4 max-w-5xl mx-auto scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        <div>
          <img src={TM} alt="Telekom Malaysia logo" className="h-10 mb-2" />
          <h3 className="text-2xl font-semibold">Technical Assistant</h3>
          <p className="text-gray-400">Telekom Malaysia · Contract</p>
          <p className="text-gray-400">Feb 2024 – Oct 2024 · 9 mos</p>
          <p className="text-gray-400">Langkawi, Kedah, Malaysia · On-site</p>
          <p className="mt-2">Government Specialized Services (GSS)</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
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
        <div>
          <img src={Intern} alt="Internship logo" className="h-10 mb-2" />

          <h3 className="text-2xl font-semibold">
            Information Technology Intern
          </h3>
          <p className="text-gray-400">
            Triodynamics Tech Venture · Internship
          </p>
          <p className="text-gray-400">Aug 2023 – Feb 2024 · 7 mos</p>
          <p className="text-gray-400">Penang, Malaysia · On-site</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Led the successful deployment of multiple government agencies
              (LHDN, POJ, JPJ, SSM).
            </li>
            <li>
              Performed regular hardware maintenance, software updates, and
              implemented preventive measures to enhance system reliability.
            </li>
            <li>
              Executed corrective maintenance procedures to address hardware and
              software issues promptly, minimizing disruptions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
