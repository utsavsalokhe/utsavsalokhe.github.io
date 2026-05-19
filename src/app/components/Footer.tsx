import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-slate-800/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-white" />
          </div>
          <span
            className="text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}
          >
            Utsav Salokhe
          </span>
        </div>

        {/* Center */}
        <p
          className="text-slate-500 text-sm flex items-center gap-1.5"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Built with{" "}
          <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" /> using
          React & TypeScript
        </p>

        {/* Social */}
        <div className="flex items-center gap-3">
          {[
            {
              icon: <Github className="w-4 h-4" />,
              href: "https://github.com/utsavsalokhe",
            },
            {
              icon: <Linkedin className="w-4 h-4" />,
              href: "https://www.linkedin.com/in/utsavsalokhe",
            },
            {
              icon: <Mail className="w-4 h-4" />,
              href: "mailto:utsavsalokhe@gmail.com",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
