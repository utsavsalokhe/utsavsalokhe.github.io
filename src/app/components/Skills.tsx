import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    color: "cyan",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    color: "violet",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "Stencil JS",
      "Lit JS",
    ],
  },
  {
    category: "Styling",
    color: "pink",
    skills: ["SASS/SCSS", "Material UI", "Styled Components", "Tailwind CSS"],
  },
  {
    category: "State Management",
    color: "cyan",
    skills: ["Redux Toolkit", "Context API", "React Query"],
  },
  {
    category: "Testing",
    color: "violet",
    skills: ["Jest", "React Testing Library"],
  },
  {
    category: "Database & Cloud",
    color: "pink",
    skills: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & Collaboration",
    color: "cyan",
    skills: ["Git", "GitHub", "GitLab", "JIRA", "Figma", "Agile/Scrum"],
  },
];

const coreSkills = [
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Redux Toolkit", level: 88 },
  { name: "REST APIs", level: 90 },
  { name: "Component Libraries", level: 92 },
];

const colorMap: Record<
  string,
  { border: string; bg: string; text: string; bar: string }
> = {
  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    text: "text-cyan-400",
    bar: "from-cyan-400 to-cyan-600",
  },
  violet: {
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    text: "text-violet-400",
    bar: "from-violet-400 to-violet-600",
  },
  pink: {
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    text: "text-pink-400",
    bar: "from-pink-400 to-pink-600",
  },
};

function SkillBar({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-slate-300 text-sm"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {name}
        </span>
        <span
          className="text-cyan-400 text-sm"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
        />
      </div>
    </div>
  );
}

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

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#0a0a12] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {/* <p
            className="text-cyan-400 text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // technical skills
          </p> */}
          <h2
            className="text-4xl text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            My Tech Stack
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <FadeIn delay={0.1}>
            <div className="p-6 rounded-2xl border border-slate-700/50 bg-[#0d0d1a]">
              <h3
                className="text-white mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                }}
              >
                Core Proficiency
              </h3>
              {coreSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={i}
                />
              ))}
            </div>
          </FadeIn>

          {/* Skill categories */}
          <div className="flex flex-col gap-4">
            {skillGroups.map((group, i) => {
              const colors = colorMap[group.color] || colorMap.cyan;
              return (
                <FadeIn key={group.category} delay={0.05 * i}>
                  <div
                    className={`p-4 rounded-xl border ${colors.border} ${colors.bg}`}
                  >
                    <p
                      className={`text-xs tracking-widest uppercase mb-3 ${colors.text}`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-slate-800/60 text-slate-300 text-sm border border-slate-700/50 hover:border-slate-500/50 transition-colors cursor-default"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

          <FadeIn delay={0.3}>
            <div className="mt-8">
              <h3
                className="text-white mb-4 text-center"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                }}
              >
                Achievements
              </h3>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                { label: "Years of Experience", value: "3+" },
                { label: "Projects Shipped", value: "10+" },
                { label: "Technologies", value: "15+" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-slate-700/50 bg-[#12121f] text-center flex flex-col items-center justify-center"
                >
                  <p
                    className="text-3xl text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-slate-500 text-xs"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
</div>
            </div>
          </FadeIn>
      </div>
    </section>
  );
}
