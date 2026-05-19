import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDown,
  Sparkles,
} from "lucide-react";

const roles = [
  "Frontend Engineer",
  "React.js Specialist",
  "Next.js Developer",
  "TypeScript Expert",
  "UI/UX Craftsman",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a12]">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan-500/10 via-violet-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-[15%] w-72 h-72 rounded-full bg-violet-500/5 blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm mb-8"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl text-white mb-4 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Utsav Salokhe
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-10 mb-6 flex items-center justify-center"
        >
          <span
            className="text-2xl md:text-3xl text-slate-300"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-cyan-400">{">"}</span>{" "}
            <span>{displayed}</span>
            <span className="inline-block w-0.5 h-7 bg-cyan-400 ml-1 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Frontend Engineer with{" "}
          <span className="text-white">3+ years of experience</span> building
          scalable SaaS applications with{" "}
          <span className="text-cyan-400">React.js, Next.js & TypeScript</span>.
          Passionate about performance, clean architecture & great UX.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-cyan-500/20"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:text-white transition-all duration-200"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
            }}
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            {
              icon: <Github className="w-5 h-5" />,
              href: "https://github.com/utsavsalokhe",
              label: "GitHub",
            },
            {
              icon: <Linkedin className="w-5 h-5" />,
              href: "https://linkedin.com/in/utsavsalokhe",
              label: "LinkedIn",
            },
            {
              icon: <Mail className="w-5 h-5" />,
              href: "mailto:utsavsalokhe@gmail.com",
              label: "Email",
            },
            {
              icon: <Phone className="w-5 h-5" />,
              href: "tel:+917745052993",
              label: "Phone",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 group"
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
