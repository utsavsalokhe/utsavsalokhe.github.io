import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Rahi Platform Technologies",
    period: "October 2024 – Present",
    location: "Pune, MH, India",
    type: "current",
    highlights: [
      "Engineered scalable React + Next.js with TypeScript interfaces for a vertical SaaS platform supporting multiple business workflows.",
      "Architected a reusable component library (checkbox, dropdown, typography, grid inputs), accelerating frontend feature delivery by 20–25%.",
      "Owned end-to-end configuration-driven UI for the Collections module, delivering 80% of screens using an internal UI Configurator.",
      "Implemented complex validation systems with configuration rules and custom interceptors across Loan Management, Collections, and MDM modules.",
      "Designed advanced form UX patterns: scroll-to-error navigation, contextual validation messaging, and collapsible sections.",
      "Optimized performance using lazy loading, code splitting, and React memoization (useMemo/useCallback).",
      "Contributed to Agile/Scrum delivery via sprint planning, backlog refinement, and peer code reviews.",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "SaaS", "Performance"],
  },
  {
    role: "Software Engineer – Dev",
    company: "Zymr Inc",
    period: "August 2022 – September 2024",
    location: "Pune, MH, India",
    type: "past",
    highlights: [
      "Delivered scalable React + TypeScript web applications with reusable UI components for enterprise SaaS clients.",
      "Built an Employee Feedback Portal and HR Analytics Dashboard, improving employee engagement metrics by 20%.",
      "Developed a cross-framework web component library using Stencil JS and Lit JS, enabling UI reuse across React, Angular, and Vue.",
      "Integrated RESTful APIs and schema-driven JSON Forms, reducing frontend validation defects by 15%.",
      "Collaborated with designers and backend engineers in Agile cycles, contributing to sprint planning and iterative delivery.",
    ],
    tags: ["React.js", "TypeScript", "Stencil JS", "Lit JS", "REST APIs"],
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#0d0d1a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {/* <p
            className="text-cyan-400 text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // work experience
          </p> */}
          <h2
            className="text-4xl text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            Where I've Worked
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:left-[50%]" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-[50%] top-8 w-3 h-3 rounded-full -translate-x-1/2 z-10 bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/30" />

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-2xl border border-slate-700/50 bg-[#12121f] hover:border-cyan-500/30 transition-all duration-300 group ${
                      i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
                      <div>
                        <h3
                          className="text-white group-hover:text-cyan-400 transition-colors"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-violet-400 mt-0.5"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      {exp.type === "current" && (
                        <span
                          className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 mt-2">
                      <span
                        className="flex items-center gap-1.5 text-slate-500 text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        <CalendarDays className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-slate-500 text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5 shrink-0 text-xs">
                            ▹
                          </span>
                          <span
                            className="text-slate-400 text-sm leading-relaxed"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-xs border border-slate-700/50"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
