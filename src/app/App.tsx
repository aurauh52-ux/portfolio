import { useEffect, useRef, useState } from "react";
import profileImage from "../assets/mypicture.png";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Code2,
  Rocket,
  MapPin,
  Headphones,
  BriefcaseBusiness,
  Phone,
  CheckCircle,
  Clock,
} from "lucide-react";

// ─── EDIT YOUR CONTENT HERE ────────────────────────────────────────────────────

const PERSONAL = {
  name: "Muhammad Usama Abbasi",
  role: "Front-End Developer",
  tagline: "Building Modern, Responsive & User-Friendly Web Experiences",
  intro:
    "A passionate Computer Science graduate from Sindh Agriculture University, Tando Jam. I specialize in crafting modern, responsive, and user-friendly web applications using cutting-edge frontend technologies. Currently expanding my expertise into Back-End Development, working toward becoming a Full-Stack Developer.",
  profileImage,
  email: "usamakhan58461@gmail.com",
  github: "https://github.com/usama-abbasi0001",
  linkedin: "https://www.linkedin.com/in/usama-khan-0291272b4",
  education: {
    degree: "Computer Science Graduate",
    institution: "Sindh Agriculture University, Tando Jam",
  },
};

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];
const WHATSAPP_URL = "https://wa.me/923304180777";

interface Skill {
  name: string;
  level: number;
  color: string;
  badge?: string;
  abbr: string;
}

const SKILLS: Record<string, Skill[]> = {
  Frontend: [
    { name: "JavaScript", abbr: "JS", level: 85, color: "#f7df1e" },
    { name: "React.js", abbr: "Re", level: 80, color: "#61dafb" },
    { name: "Next.js", abbr: "Nx", level: 70, color: "#e2eaf5" },
    { name: "HTML5", abbr: "H5", level: 95, color: "#e34f26" },
    { name: "CSS3", abbr: "CS", level: 90, color: "#264de4" },
    { name: "Bootstrap", abbr: "Bs", level: 85, color: "#7952b3" },
    { name: "Tailwind CSS", abbr: "Tw", level: 80, color: "#38bdf8" },
  ],
  "Backend & Services": [
    { name: "Firebase", abbr: "Fb", level: 65, color: "#ffca28" },
    { name: "Back-End Dev", abbr: "BE", level: 30, color: "#68d391", badge: "Learning" },
  ],
  "Tools & Other": [
    { name: "Git", abbr: "Gt", level: 80, color: "#f05032" },
    { name: "GitHub", abbr: "GH", level: 80, color: "#c9d1d9" },
    { name: "MS Office", abbr: "Ms", level: 90, color: "#d83b01" },
    { name: "Responsive Design", abbr: "RD", level: 88, color: "#00d4ff" },
    { name: "Front-End Dev", abbr: "FE", level: 82, color: "#a78bfa" },
  ],
};

interface Project {
  name: string;
  tech: string[];
  desc: string;
  url: string;
  github: string | null;
  image: string;
}

const PROJECTS: Project[] = [
  {
    name: "WealthNest — Trading Website",
    tech: ["React.js"],
    desc: "A modern trading and finance website built with React.js.",
    url: "https://usama-website.netlify.app/",
    github: null,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=360&fit=crop&auto=format",
  },
  {
    name: "Netflix UI Clone",
    tech: ["React.js"],
    desc: "A Netflix-inspired streaming platform UI built with React.js.",
    url: "https://netfixus.netlify.app/",
    github: null,
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=360&fit=crop&auto=format",
  },
  {
    name: "E-Commerce Website",
    tech: ["HTML", "CSS", "Bootstrap"],
    desc: "A responsive e-commerce shopping website with product listings and modern shopping UI.",
    url: "https://usama-abbasi0001.github.io/E-commers-bootstrap/",
    github: null,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=360&fit=crop&auto=format",
  },
  {
    name: "Rolex Watch UI",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A modern luxury watch e-commerce interface featuring products, featured collections and shopping UI.",
    url: "https://rolex-web.netlify.app/",
    github: null,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=360&fit=crop&auto=format",
  },
  {
    name: "COVID-19 Vaccination UI",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive COVID-19 vaccination information and registration interface with vaccination scheduling and result checking UI.",
    url: "https://corona-web-page.netlify.app/",
    github: null,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=600&h=360&fit=crop&auto=format",
  },
];

interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  desc: string;
  status: "Completed" | "Active" | "In Progress";
  icon: React.ReactNode;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "5 Years",
    title: "Customer Service Representative (CSR)",
    org: "Ufone Franchise · Telecom / Customer Service",
    desc: "Worked at a Ufone Franchise handling customer dealing, customer support, queries, issue resolution, and telecom-related services.",
    status: "Completed",
    icon: <Headphones size={18} />,
  },
  {
    period: "6 Months",
    title: "Web Development Intern",
    org: "Gexton · Hyderabad Road / Autobahn Road, Hyderabad",
    desc: "Unpaid internship focused on real-world web development projects and practical frontend/web development experience.",
    status: "Completed",
    icon: <Code2 size={18} />,
  },
  {
    period: "1 Year",
    title: "Web Development Intern",
    org: "Apex Software House · Tando Allahyar",
    desc: "Paid internship working on real-world client projects and gaining professional web development experience.",
    status: "Completed",
    icon: <BriefcaseBusiness size={18} />,
  },
  {
    period: "Freelance / Client Projects",
    title: "Freelance Web Developer",
    org: "Independent Client Work",
    desc: "Worked independently with multiple clients to develop projects for them. This work was completed separately from the Apex internship.",
    status: "Active",
    icon: <Rocket size={18} />,
  },
];

// ─── PARTICLE CANVAS ────────────────────────────────────────────────────────────

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const COUNT = isMobile ? 55 : 145;
    const LINK_DIST = isMobile ? 95 : 138;
    const MOUSE_R = 135;
    const MAX_SPEED = 0.75;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number };

    const particles: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: Math.random() * 1.3 + 0.4,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    if (!isMobile) window.addEventListener("mousemove", onMouseMove);

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Gentle mouse repulsion
        if (!isMobile) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_R * MOUSE_R && d2 > 1) {
            const d = Math.sqrt(d2);
            const force = ((MOUSE_R - d) / MOUSE_R) * 0.022;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        // Dampen velocity
        p.vx *= 0.992;
        p.vy *= 0.992;

        // Clamp speed
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED;
          p.vy = (p.vy / spd) * MAX_SPEED;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -5) p.x = canvas.width + 5;
        else if (p.x > canvas.width + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.height + 5;
        else if (p.y > canvas.height + 5) p.y = -5;

        // Draw glow halo
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grd.addColorStop(0, "rgba(0,212,255,0.18)");
        grd.addColorStop(0.5, "rgba(0,212,255,0.06)");
        grd.addColorStop(1, "rgba(0,212,255,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Draw core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,212,255,0.82)";
        ctx.fill();
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          // Fast bounding box skip
          if (Math.abs(dx) > LINK_DIST || Math.abs(dy) > LINK_DIST) continue;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      window.removeEventListener("resize", resize);
      if (!isMobile) window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

// ─── NAVIGATION ─────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <nav
      style={{ zIndex: 50 }}
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d1a]/90 backdrop-blur-xl border-b border-[#00d4ff]/10 shadow-[0_4px_32px_rgba(0,212,255,0.06)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="font-mono text-base font-bold tracking-[0.2em] text-[#00d4ff] hover:text-white transition-colors"
          >
            MUA<span className="text-white/60">.</span>dev
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-[11px] font-mono font-medium text-[#7da8cc] hover:text-[#00d4ff] transition-colors tracking-[0.15em] uppercase"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={openWhatsApp}
            className="hidden md:flex items-center gap-2 px-4 py-2 text-[11px] font-mono font-semibold text-[#050d1a] bg-[#00d4ff] rounded-lg hover:bg-white transition-colors tracking-[0.12em] uppercase"
          >
            Let&apos;s Talk
            <ArrowRight size={12} />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#7da8cc] hover:text-[#00d4ff] transition-colors p-1"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#050d1a]/97 backdrop-blur-xl border-b border-[#00d4ff]/10">
          <div className="px-4 py-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left text-xs font-mono font-medium text-[#7da8cc] hover:text-[#00d4ff] transition-colors tracking-[0.15em] uppercase py-1.5 border-b border-[#00d4ff]/05"
              >
                {link}
              </button>
            ))}
            <button
              onClick={openWhatsApp}
              className="mt-2 px-4 py-2.5 text-xs font-mono font-semibold text-[#050d1a] bg-[#00d4ff] rounded-lg hover:bg-white transition-colors tracking-wider uppercase"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Radial glow behind hero content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,212,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(124,58,237,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1 min-w-0 space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/08 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="text-[10px] font-mono text-[#00d4ff] tracking-[0.2em] uppercase">
                Available for work
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="text-xs font-mono text-[#7da8cc] tracking-[0.3em] uppercase mb-3">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white leading-[1.1] tracking-tight break-words">
                {PERSONAL.name.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "text-[#00d4ff]" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-px w-8 bg-[#00d4ff]/60" />
                <h2 className="text-sm font-mono text-[#00d4ff] tracking-[0.25em] uppercase">
                  {PERSONAL.role}
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-mono font-medium text-white/80 leading-relaxed max-w-lg">
              {PERSONAL.tagline}
            </p>

            {/* Intro */}
            <p className="text-sm text-[#7da8cc] leading-relaxed max-w-lg font-light">
              {PERSONAL.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 font-mono font-semibold text-sm text-[#050d1a] bg-[#00d4ff] rounded-xl hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] tracking-wider"
              >
                View My Projects
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 font-mono font-semibold text-sm text-[#00d4ff] border border-[#00d4ff]/40 rounded-xl hover:bg-[#00d4ff]/08 transition-all tracking-wider"
              >
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-[#7da8cc] hover:text-[#00d4ff] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-[#7da8cc] hover:text-[#00d4ff] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="p-2 -m-2 text-[#7da8cc] hover:text-[#00d4ff] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile image side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #00d4ff)",
                  padding: "2px",
                  borderRadius: "50%",
                  filter: "blur(1px)",
                  transform: "scale(1.02)",
                }}
              />
              {/* Animated ring */}
              <div
                aria-hidden="true"
                className="absolute inset-[-6px] rounded-full border border-[#00d4ff]/20 animate-spin"
                style={{ animationDuration: "12s" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-[-14px] rounded-full border border-[#7c3aed]/10 animate-spin"
                style={{ animationDuration: "20s", animationDirection: "reverse" }}
              />

              {/* Image container */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[#00d4ff]/30"
                style={{
                  boxShadow:
                    "0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(0,212,255,0.08), inset 0 0 30px rgba(0,212,255,0.05)",
                }}
              >
                <img
                  src={PERSONAL.profileImage}
                  alt="Muhammad Usama Abbasi — Front-End Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay tint */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, transparent 50%, rgba(124,58,237,0.1) 100%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-3 -right-3 bg-[#0a1832] border border-[#00d4ff]/25 rounded-xl px-3 py-2 backdrop-blur-sm"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <p className="text-[10px] font-mono text-[#7da8cc] tracking-wider">CS Graduate</p>
                <p className="text-xs font-mono font-semibold text-[#00d4ff]">Full-Stack Journey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo("about")}
            className="text-[#7da8cc]/50 hover:text-[#00d4ff] transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 10% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-14">
          <p className="text-[10px] font-mono text-[#00d4ff] tracking-[0.4em] uppercase mb-2">
            01 — About
          </p>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white">
            Who I Am
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#00d4ff] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Main text */}
          <div className="lg:col-span-3 min-w-0 space-y-5">
            <p className="text-[#e2eaf5] leading-relaxed text-base">
              I&apos;m <span className="text-[#00d4ff] font-semibold">Muhammad Usama Abbasi</span>, a dedicated
              Front-End Developer with a strong foundation in Computer Science. I graduated from{" "}
              <span className="text-white font-medium">Sindh Agriculture University, Tando Jam</span>, where I
              built expertise in software engineering, data structures, and web technologies.
            </p>
            <p className="text-[#7da8cc] leading-relaxed text-base">
              I specialize in creating modern, responsive, and user-friendly websites using the latest
              frontend technologies — from pixel-perfect UI implementations to complex interactive applications.
              My work combines clean code practices with an eye for design.
            </p>
            <p className="text-[#7da8cc] leading-relaxed text-base">
              Currently, I&apos;m actively learning Back-End Development — exploring Node.js, REST APIs, and
              databases — working toward becoming a proficient Full-Stack Developer. I believe in continuous
              growth and building things that matter.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: "5+", label: "Live Projects" },
                { val: "14+", label: "Skills Mastered" },
                { val: "2+", label: "Years Building" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#00d4ff]/12 rounded-xl p-4 bg-[#0a1832]/50 backdrop-blur-sm text-center"
                >
                  <p className="text-2xl font-mono font-bold text-[#00d4ff]">{stat.val}</p>
                  <p className="text-[11px] font-mono text-[#7da8cc] tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education card + info */}
          <div className="lg:col-span-2 min-w-0 space-y-4">
            {/* Education card */}
            <div
              className="border border-[#00d4ff]/15 rounded-2xl p-6 bg-[#0a1832]/60 backdrop-blur-sm"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(0,212,255,0.08)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0 text-[#00d4ff]">
                  <GraduationCap size={18} />
                </div>
                  <div className="min-w-0">
                  <p className="text-[10px] font-mono text-[#7da8cc] tracking-[0.2em] uppercase mb-1">
                    Education
                  </p>
                  <h3 className="text-sm font-mono font-semibold text-white">
                    {PERSONAL.education.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <MapPin size={11} className="text-[#00d4ff]" />
                    <p className="text-xs text-[#7da8cc] break-words">{PERSONAL.education.institution}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently learning card */}
            <div
              className="border border-[#7c3aed]/20 rounded-2xl p-6 bg-[#7c3aed]/05 backdrop-blur-sm"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(124,58,237,0.1)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/15 border border-[#7c3aed]/25 flex items-center justify-center flex-shrink-0 text-[#a78bfa]">
                  <Rocket size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#a78bfa] tracking-[0.2em] uppercase mb-1">
                    Currently Learning
                  </p>
                  <h3 className="text-sm font-mono font-semibold text-white">Back-End Development</h3>
                  <p className="text-xs text-[#7da8cc] mt-1 leading-relaxed">
                    Working toward Full-Stack expertise with Node.js, APIs & databases.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech focus */}
            <div
              className="border border-[#00d4ff]/12 rounded-2xl p-5 bg-[#0a1832]/50 backdrop-blur-sm"
            >
              <p className="text-[10px] font-mono text-[#7da8cc] tracking-[0.2em] uppercase mb-3">
                Primary Focus
              </p>
              {["React.js", "Next.js", "Tailwind CSS", "Firebase"].map((tech) => (
                <div key={tech} className="flex items-center gap-2 py-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#00d4ff]" />
                  <span className="text-xs font-mono text-[#e2eaf5]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────────

function SkillBar({ skill }: { skill: Skill }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          {/* Skill badge */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-mono font-bold text-[#050d1a] flex-shrink-0"
            style={{ backgroundColor: skill.color, boxShadow: `0 2px 10px ${skill.color}40` }}
          >
            {skill.abbr}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#e2eaf5] font-medium">{skill.name}</span>
            {skill.badge && (
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#68d391]/15 text-[#68d391] border border-[#68d391]/20 tracking-wider">
                {skill.badge}
              </span>
            )}
          </div>
        </div>
        <span className="text-[11px] font-mono text-[#7da8cc]">{skill.level}%</span>
      </div>
      {/* Progress bar */}
      <div className="h-1 bg-[#0f2040] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: animated ? `${skill.level}%` : "0%",
            transitionDuration: "1.2s",
            transitionDelay: "0.1s",
            background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(0,212,255,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-[10px] font-mono text-[#00d4ff] tracking-[0.4em] uppercase mb-2">
            02 — Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white">
            Technical Expertise
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#00d4ff] to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div
              key={category}
              className="border border-[#00d4ff]/12 rounded-2xl p-6 bg-[#0a1832]/50 backdrop-blur-sm hover:border-[#00d4ff]/22 transition-all duration-300"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(0,212,255,0.06)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-5 rounded-full bg-[#00d4ff]" />
                <h3 className="text-xs font-mono font-semibold text-[#00d4ff] tracking-[0.2em] uppercase">
                  {category}
                </h3>
              </div>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative border border-[#00d4ff]/10 rounded-2xl overflow-hidden bg-[#0a1832]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#00d4ff]/25 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#091425]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(180deg, rgba(5,13,26,0) 40%, rgba(5,13,26,0.9) 100%)",
            opacity: hovered ? 1 : 0.6,
          }}
        />
        {/* Tech tags on image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#050d1a]/80 text-[#00d4ff] border border-[#00d4ff]/25 backdrop-blur-sm tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-sm font-mono font-bold text-white mb-2 tracking-wide">{project.name}</h3>
        <p className="text-xs text-[#7da8cc] leading-relaxed mb-4">{project.desc}</p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-mono font-semibold text-[#050d1a] bg-[#00d4ff] rounded-lg hover:bg-white transition-colors tracking-wider"
          >
            Live Demo
            <ExternalLink size={11} />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-mono font-semibold text-[#7da8cc] border border-[#00d4ff]/20 rounded-lg hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-colors"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 80%, rgba(124,58,237,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-[10px] font-mono text-[#00d4ff] tracking-[0.4em] uppercase mb-2">
            03 — Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white">
            Featured Work
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#00d4ff] to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  Completed: { color: "#68d391", bg: "rgba(104,211,145,0.1)", icon: <CheckCircle size={12} /> },
  Active: { color: "#00d4ff", bg: "rgba(0,212,255,0.1)", icon: <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse block" /> },
  "In Progress": { color: "#a78bfa", bg: "rgba(167,139,250,0.1)", icon: <Clock size={12} /> },
};

function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-[10px] font-mono text-[#00d4ff] tracking-[0.4em] uppercase mb-2">
            04 — Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white">
            My Journey
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#00d4ff] to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, #00d4ff 0%, rgba(0,212,255,0.2) 80%, transparent 100%)",
            }}
          />

          <div className="space-y-8">
            {EXPERIENCE.map((item, idx) => {
              const status = STATUS_CONFIG[item.status];
              return (
                <div key={idx} className="flex min-w-0 gap-4 sm:gap-6 pl-0">
                  {/* Node */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0a1832] border border-[#00d4ff]/25 flex items-center justify-center text-[#00d4ff] relative z-10">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div
                    className="min-w-0 flex-1 border border-[#00d4ff]/10 rounded-2xl p-4 sm:p-5 bg-[#0a1832]/50 backdrop-blur-sm hover:border-[#00d4ff]/20 transition-all"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-sm font-mono font-bold text-white break-words">{item.title}</h3>
                        <p className="text-xs text-[#7da8cc] mt-0.5 flex items-center gap-1.5">
                          <MapPin size={10} className="text-[#00d4ff]" />
                          <span className="break-words">{item.org}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span
                          className="inline-flex items-center gap-1.5 text-[9px] font-mono px-2 py-1 rounded-full border tracking-wider"
                          style={{ color: status.color, backgroundColor: status.bg, borderColor: `${status.color}30` }}
                        >
                          {status.icon}
                          {item.status}
                        </span>
                        <span className="text-[10px] font-mono text-[#7da8cc]">{item.period}</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#7da8cc] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <p className="text-[10px] font-mono text-[#00d4ff] tracking-[0.4em] uppercase mb-2">
            05 — Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white leading-tight">
            Let&apos;s Build Something
            <br />
            <span className="text-[#00d4ff]">Together</span>
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
        </div>

        <p className="text-[#7da8cc] text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          I&apos;m currently available for freelance projects and open to full-time opportunities. Whether
          you have a project in mind or just want to say hello — I&apos;d love to hear from you.
        </p>

        {/* Contact card */}
        <div
          className="border border-[#00d4ff]/15 rounded-3xl p-8 bg-[#0a1832]/60 backdrop-blur-sm mb-8"
          style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0,212,255,0.08)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 bg-[#050d1a]/50 transition-all hover:bg-[#00d4ff]/05"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#7da8cc] tracking-wider uppercase">Email</p>
                <p className="text-xs font-mono text-white mt-0.5 break-all">{PERSONAL.email}</p>
              </div>
            </a>

            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 bg-[#050d1a]/50 transition-all hover:bg-[#00d4ff]/05">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-mono text-[#7da8cc] tracking-wider uppercase">Phone</p>
                <a href="tel:03304180777" className="block text-xs font-mono text-white mt-0.5 hover:text-[#00d4ff] transition-colors">
                  03304180777
                </a>
                <a href="tel:03173509636" className="block text-xs font-mono text-white mt-0.5 hover:text-[#00d4ff] transition-colors">
                  03173509636
                </a>
              </div>
            </div>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 bg-[#050d1a]/50 transition-all hover:bg-[#00d4ff]/05"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                <Github size={18} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#7da8cc] tracking-wider uppercase">GitHub</p>
                <p className="text-xs font-mono text-white mt-0.5">usama-abbasi0001</p>
              </div>
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 bg-[#050d1a]/50 transition-all hover:bg-[#00d4ff]/05"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#7da8cc] tracking-wider uppercase">LinkedIn</p>
                <p className="text-xs font-mono text-white mt-0.5">Muhammad Usama Abbasi</p>
              </div>
            </a>
          </div>
        </div>

        <a
          href={`mailto:${PERSONAL.email}`}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 font-mono font-bold text-sm text-[#050d1a] bg-[#00d4ff] rounded-xl hover:bg-white transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] tracking-wider"
        >
          Send a Message
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative border-t border-[#00d4ff]/08 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-mono font-bold text-[#00d4ff] tracking-wider">Muhammad Usama Abbasi</p>
            <p className="text-xs font-mono text-[#7da8cc] tracking-wider mt-0.5">Front-End Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 -m-2 text-[#7da8cc] hover:text-[#00d4ff] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 -m-2 text-[#7da8cc] hover:text-[#00d4ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="p-2 -m-2 text-[#7da8cc] hover:text-[#00d4ff] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-[10px] font-mono text-[#7da8cc]/50 tracking-wider">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="relative min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Particle network — fixed behind all content */}
      <ParticleCanvas />

      {/* All page content sits above the canvas */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
