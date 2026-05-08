import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Layers, Zap, Users, Code } from "lucide-react";

const highlights = [
  {
    icon: <Code className="w-5 h-5 text-cyan-400" />,
    title: "Component Architecture",
    desc: "Designing reusable, scalable component libraries and design systems from the ground up.",
  },
  {
    icon: <Zap className="w-5 h-5 text-violet-400" />,
    title: "Performance Optimization",
    desc: "Lazy loading, code splitting, memoization — squeezing every bit of rendering efficiency.",
  },
  {
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    title: "Full-Stack Exposure",
    desc: "NestJS, PostgreSQL & MongoDB knowledge enabling seamless collaboration with backend teams.",
  },
  {
    icon: <Users className="w-5 h-5 text-violet-400" />,
    title: "Agile Delivery",
    desc: "Sprint planning, backlog refinement, and peer code reviews in fast-paced Scrum teams.",
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {/* <p
            className="text-cyan-400 text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // about me
          </p> */}
          <h2
            className="text-4xl text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            Crafting Digital Experiences
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <FadeIn delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />
                <p
                  className="text-slate-300 leading-relaxed mb-6 text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  I'm a{" "}
                  <span className="text-white font-medium">
                    Frontend Engineer
                  </span>{" "}
                  with over{" "}
                  <span className="text-cyan-400 font-medium">
                    3 years of experience
                  </span>{" "}
                  building scalable and high-performance SaaS web applications.
                  I specialise in
                  <span className="text-white">
                    {" "}
                    React.js, Next.js, and TypeScript
                  </span>
                  , with a strong focus on component-based architectures and
                  reusable design systems.
                </p>
                <p
                  className="text-slate-400 leading-relaxed mb-6 text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  My work spans complex domains like{" "}
                  <span className="text-slate-300">
                    Loan Management, Collections
                  </span>
                  , and <span className="text-slate-300">HR Analytics</span>,
                  where I've delivered configuration-driven UIs, advanced form
                  validation, and cross-framework web component libraries.
                </p>
                <p
                  className="text-slate-400 leading-relaxed text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Beyond the frontend, I have practical backend knowledge with{" "}
                  <span className="text-slate-300">
                    NestJS, PostgreSQL, MongoDB
                  </span>
                  , and <span className="text-slate-300">Firebase</span> —
                  giving me the full-stack perspective to collaborate
                  effectively with any engineering team.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Pune, MH, India", "Open to Remote", "3+ Years Exp"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-slate-700 text-slate-400 text-sm"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </FadeIn>
          </div>

          {/* Right: Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={0.1 + i * 0.1}>
                <div className="p-5 rounded-xl border border-slate-700/50 bg-[#12121f] hover:border-cyan-500/30 transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-3 group-hover:bg-slate-700/80 transition-colors">
                    {item.icon}
                  </div>
                  <h4
                    className="text-white mb-2"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-slate-400 text-sm leading-relaxed"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
