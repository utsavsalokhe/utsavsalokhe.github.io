import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

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

export function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-[#0d0d1a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {/* <p
            className="text-cyan-400 text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // education
          </p> */}
          <h2
            className="text-4xl text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            Academic Background
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative p-8 rounded-2xl border border-cyan-500/20 bg-[#12121f] overflow-hidden group hover:border-cyan-500/40 transition-colors duration-300">
            {/* Decorative corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/3 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-start gap-6 flex-wrap">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>

              <div className="flex-1 min-w-[200px]">
                <h3
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                  }}
                >
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p
                  className="text-violet-400 mb-4"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Shivaji University, Kolhapur
                </p>

                <div className="flex flex-wrap gap-4 mb-5">
                  <span
                    className="flex items-center gap-1.5 text-slate-400 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <CalendarDays className="w-3.5 h-3.5 text-cyan-400" />
                    July 2018 – July 2022
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-slate-400 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Kolhapur, MH, India
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Computer Science",
                    "Engineering",
                    "Data Structures",
                    "Algorithms",
                    "Web Development",
                    "Databases",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs border border-slate-700/50"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      {/* </div> */}
      //{" "}
    </section>
  );
}
