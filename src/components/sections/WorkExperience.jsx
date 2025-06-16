import React from "react";
import TM from "../../assets/tm.webp";
import Intern from "../../assets/intern.jpg";

export const WorkExperience = () => {
  return (
    <section
      id="workexp"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="w-full px-4">
        <h2 className="text-3xl font-bold mb-8 leading-tight text-neutral-900 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Telekom Malaysia */}
          <div className="w-full p-6 rounded-xl border border-white/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 bg-background/80">
            <img
              src={TM}
              alt="Telekom Malaysia logo"
              className="h-24 mb-4 rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300 bg-white p-2"
            />
            <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-foreground">
              Technical Assistant
            </h3>
            <p className="text-neutral-800 dark:text-muted-foreground mb-1">
              Telekom Malaysia · Contract
            </p>
            <p className="text-neutral-800 dark:text-muted-foreground mb-1">
              Feb 2024 – Oct 2024 · 9 mos
            </p>
            <p className="text-neutral-800 dark:text-muted-foreground mb-2">
              Langkawi, Kedah, Malaysia · On-site
            </p>
            <p className="text-neutral-800 dark:text-foreground mb-2">
              Government Specialized Services (GSS)
            </p>
            <ul className="text-neutral-800 dark:text-foreground space-y-2 mb-4 leading-relaxed list-disc list-outside pl-6">
              <li>
                <span className="font-medium">
                  Civil Aviation Authority Malaysia (CAAM)
                </span>
                <div className="text-muted-foreground dark:text-muted-foreground">
                  Instrument Landing System (ILS) Maintenance and Support
                </div>
              </li>
              <li>
                <span className="font-medium">
                  NG999 Malaysia's New Generation 999 services
                </span>
                <div className="text-muted-foreground dark:text-muted-foreground">
                  Emergency services communication system
                </div>
              </li>
              <li>
                <span className="font-medium">
                  Ministry of Defense Malaysia (MINDEF)
                </span>
                <div className="text-muted-foreground dark:text-muted-foreground">
                  Automated Messaging Switching System (AMSS) and Network
                  Convergence Center (NWC)
                </div>
              </li>
            </ul>
          </div>

          {/* Internship */}
          <div className="w-full p-6 rounded-xl border border-white/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 bg-background/80">
            <img
              src={Intern}
              alt="Internship logo"
              className="h-24 mb-4 rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300 bg-white p-2"
            />
            <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-foreground">
              Junior IT Support Engineer
            </h3>
            <p className="text-neutral-800 dark:text-muted-foreground mb-1">
              Triodynamics Tech Venture · Internship
            </p>
            <p className="text-neutral-800 dark:text-muted-foreground mb-1">
              Aug 2023 – Feb 2024 · 7 mos
            </p>
            <p className="text-neutral-800 dark:text-muted-foreground mb-2">
              Penang, Malaysia · On-site
            </p>
            <ul className="text-neutral-800 dark:text-foreground space-y-2 mb-4 leading-relaxed list-disc list-outside pl-6">
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
