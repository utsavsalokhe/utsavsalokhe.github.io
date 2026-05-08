import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";

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

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "utsavsalokhe@gmail.com",
    href: "mailto:utsavsalokhe@gmail.com",
    color: "text-cyan-400",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 77450 52993",
    href: "tel:+917745052993",
    color: "text-violet-400",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/utsav-salokhe",
    href: "https://linkedin.com/in/utsav-salokhe",
    color: "text-cyan-400",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/Utsav-git",
    href: "https://github.com/Utsav-git",
    color: "text-violet-400",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
    color: "text-cyan-400",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a12] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {/* <p
            className="text-cyan-400 text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // contact
          </p> */}
          <h2
            className="text-4xl text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
            }}
          >
            Let's Work Together
          </h2>
          <p
            className="text-slate-400 mt-3 max-w-lg mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            I'm currently open to new opportunities. Whether it's a full-time
            role, freelance project, or just a chat — my inbox is always open.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact info */}
          <FadeIn delay={0.1}>
            <div>
              <h3
                className="text-white mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                }}
              >
                Get In Touch
              </h3>
              <div className="flex flex-wrap gap-4">
                {contactLinks.map((item) => (
                  <div key={item.label} className="flex-1 min-w-[220px]">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-700/50 bg-[#0d0d1a] hover:border-cyan-500/30 transition-all duration-200 group"
                      >
                        <div
                          className={`${item.color} group-hover:scale-110 transition-transform`}
                        >
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p
                            className="text-slate-500 text-xs"
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="text-slate-300 text-sm group-hover:text-white transition-colors truncate"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-700/50 bg-[#0d0d1a]">
                        <div className={item.color}>{item.icon}</div>
                        <div className="min-w-0">
                          <p
                            className="text-slate-500 text-xs"
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="text-slate-300 text-sm truncate"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
