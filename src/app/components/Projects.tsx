import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, ExternalLink, MessageSquare, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Socio Vert",
    subtitle: "Real-time Chat Platform",
    icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
    description:
      "A real-time chat platform with topic-based rooms, secure authentication, and live messaging. Built with centralized Redux state management and real-time Firebase synchronization.",
    features: [
      "Topic-based chat rooms with real-time sync",
      "Secure user authentication & authorization",
      "Redux-powered centralized state management",
      "Responsive Material UI with optimized rendering",
    ],
    tags: ["React", "Redux", "Firebase", "Material UI"],
    github: "https://github.com/Utsav-git",
    color: "cyan",
    gradient: "from-cyan-500/10 to-blue-500/5",
    border: "border-cyan-500/20",
  },
  {
    title: "Book Recommender App",
    subtitle: "Full-Stack Recommendation Platform",
    icon: <BookOpen className="w-6 h-6 text-violet-400" />,
    description:
      "A full-stack platform delivering personalized book suggestions and favorites management. React frontend integrated with a Python Flask REST API backend.",
    features: [
      "Personalized book recommendation engine",
      "Favorites management & user preferences",
      "Context API for global state management",
      "Flask REST API backend integration via Axios",
    ],
    tags: ["React", "Python", "Flask", "Axios", "Material UI", "Context API"],
    github: "https://github.com/Utsav-git",
    color: "violet",
    gradient: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
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
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0a0a12] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Decorative bg elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-500/3 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-cyan-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {/* <p
            className="text-cyan-400 text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // personal projects
          </p> */}
          <h2
            className="text-4xl text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            Things I've Built
          </h2>
          <p
            className="text-slate-400 mt-3 max-w-xl mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Side projects where I explore new technologies and build tools I
            care about.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div
                className={`relative p-6 rounded-2xl border ${project.border} bg-gradient-to-br ${project.gradient} bg-[#0d0d1a] hover:scale-[1.02] transition-transform duration-300 group h-full flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm ${project.color === "cyan" ? "text-cyan-400" : "text-violet-400"}`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors p-1"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p
                  className="text-slate-400 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 text-xs shrink-0 ${project.color === "cyan" ? "text-cyan-400" : "text-violet-400"}`}
                      >
                        ▹
                      </span>
                      <span
                        className="text-slate-400 text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-slate-800/80 text-slate-400 text-xs border border-slate-700/50"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* More projects CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/Utsav-git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Github className="w-4 h-4" />
              View All on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
