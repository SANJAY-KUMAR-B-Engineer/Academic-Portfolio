import React, { useState } from "react";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Download, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Trophy, 
  Layers, 
  Languages, 
  Radio, 
  CheckCircle2, 
  ExternalLink,
  FileText,
  Menu,
  X,
  Send,
  Calendar,
  Sparkles
} from "lucide-react";
import { 
  profileData, 
  education, 
  internships, 
  projects, 
  skillsCategories, 
  certifications, 
  achievements, 
  interests, 
  languages 
} from "./constants";
import { generateResumePdf } from "./utils/generateResumePdf";

export default function App() {
  const [downloading, setDownloading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const bsnl = internships[0];

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateResumePdf();
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 4000);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-200 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Background Decorative Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] bg-sky-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Sticky Header Navigation (Navy Dark Mode) */}
      <nav className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/10 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo / Name - SK Box Removed! */}
            <div 
              onClick={() => scrollToSection("home")}
              className="flex items-center cursor-pointer font-extrabold text-lg text-white tracking-tight hover:text-blue-400 transition-colors"
            >
              <span>SANJAY KUMAR B</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-150"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="h-4 w-px bg-slate-800 mx-2" />

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-150 shadow-sm cursor-pointer"
              >
                <Download size={13} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-850 bg-[#0b101e] shadow-xl">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800/40 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-800 px-4">
                <button
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                >
                  <Download size={16} />
                  <span>Download Resume PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero / Introduction Section (Navy Dark Mode & Centered Layout) */}
      <header id="home" className="relative border-b border-slate-800/60 overflow-hidden py-16 sm:py-20 lg:py-24">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111726_1px,transparent_1px),linear-gradient(to_bottom,#111726_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="flex flex-wrap gap-2.5 justify-center items-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              IET Student Member
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-200 border border-slate-700">
              <GraduationCap size={13} className="text-blue-400" />
              B.Tech ECE (2025–2029)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              ECE Association Member
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-white leading-none">
              {profileData.name}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-blue-400 tracking-tight">
              B.Tech Electronics & Communication Engineering
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-medium">
              SRM Institute of Science and Technology, Tiruchirappalli
            </p>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            An Electronics and Communication Engineering student passionately bridging hardware design, embedded IoT networks, and AI study platforms. Specialized in developing reliable, cloud-integrated engineering solutions.
          </p>

          {/* Connected LinkedIn and GitHub directly at Home/Hero */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all shadow-sm active:scale-[0.98]"
            >
              View Projects
            </button>
            
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-150 shadow-md shadow-blue-600/20"
            >
              <Download size={15} className={downloading ? "animate-bounce" : ""} />
              <span>{downloading ? "Preparing PDF..." : "Download Resume"}</span>
            </button>
          </div>

          {/* Social Profiles & Key Contact Links right at home */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 pt-4 border-t border-slate-800/60 max-w-xl mx-auto">
            <a 
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={14} className="text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>

            <a 
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              <Github size={14} className="text-slate-200" />
              <span>GitHub Profile</span>
            </a>

            <a 
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-blue-400" />
              <span>{profileData.email}</span>
            </a>
          </div>

          {/* Quick Info Chips */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1">
              <MapPin size={13} className="text-slate-500" />
              <span>{profileData.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={13} className="text-slate-500" />
              <span>{profileData.phone}</span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Sections - Dark Navy Theme */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 relative z-10">
        
        {/* SECTION: EDUCATION */}
        <section id="education" className="scroll-mt-20">
          <div className="section-title-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">
            Education / Academic Status
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div 
                key={idx}
                className={`bg-[#111726]/80 border p-6 rounded-xl shadow-lg shadow-black/20 card-hover relative flex flex-col justify-between ${
                  idx === 0 ? "border-blue-500 ring-1 ring-blue-500/15" : "border-slate-800/80"
                }`}
              >
                {idx === 0 && (
                  <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-600 text-white shadow-sm">
                    Current Study
                  </span>
                )}
                
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    {edu.major && (
                      <p className="text-xs sm:text-sm font-semibold text-blue-400 mt-0.5">
                        {edu.major}
                      </p>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {edu.institution}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin size={12} className="text-slate-500" />
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: ABOUT ME */}
        <section id="about" className="scroll-mt-20 bg-[#111726]/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="section-title-badge">
                <FileText size={14} />
                <span>About Me</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                Connecting Hardware with Software
              </h2>
              <p className="text-sm sm:text-base text-slate-400">
                Electronics undergraduate at SRMIST, exploring Embedded Systems, IoT, Networks, Cybersecurity, and VLSI.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                As an engineering student pursuing my Bachelor of Technology in Electronics and Communication Engineering at SRM Institute of Science and Technology, Tiruchirappalli (2025–2029), I design functional prototypes that bridge hardware sensors with digital environments.
              </p>
              <p>
                My projects reflect an authentic desire to gain practical, industry-aligned training. During my telecommunications training internship at BSNL, I covered radio frequency operations, base stations, switching routing systems, and CPAN architectures. I apply these structured insights directly into local embedded engineering, hardware hackathons, and software platform development.
              </p>
              <div className="pt-3 flex flex-wrap gap-2.5">
                <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  IET Student Member
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Hackathon Finalist at SRMIST
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Hardware Workshop – NIT Trichy
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: PROJECTS (Responsive grid) */}
        <section id="projects" className="scroll-mt-20">
          <div className="section-title-badge">
            <Cpu size={14} />
            <span>Project Portfolio</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Academic & Engineering Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Real hardware designs, automation solutions, and study assistance systems.
              </p>
            </div>
          </div>

          {/* Main 3-Project Grid (Equal card widths and spacing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-[#111726]/80 border border-slate-800/80 rounded-xl p-5 shadow-lg shadow-black/20 card-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Category Badge & Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {proj.status}
                    </span>
                  </div>

                  {/* Title & Branding */}
                  <div>
                    <h3 className="text-lg font-extrabold text-white tracking-tight hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    {proj.title === "Study at Ease" && (
                      <p className="text-[11px] italic font-semibold text-slate-400 mt-0.5">
                        "Where Learning Meets Ease"
                      </p>
                    )}
                  </div>

                  {/* Professional Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4">
                    {proj.description}
                  </p>

                  {/* Problem & Role */}
                  <div className="space-y-2 pt-2 text-xs border-t border-slate-800/80">
                    <div>
                      <span className="font-bold text-slate-200">Problem Addressed:</span>{" "}
                      <span className="text-slate-400 line-clamp-2">{proj.problemSolved}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-200">My Contribution:</span>{" "}
                      <span className="text-slate-400 line-clamp-2">{proj.myRole}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  {proj.highlights && (
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Features:</div>
                      <ul className="space-y-1">
                        {proj.highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="flex items-start gap-1.5 text-xs text-slate-300 leading-snug">
                            <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Footer Technologies Tags & Links */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors border border-slate-700"
                      >
                        <Github size={12} />
                        <span>Code</span>
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-colors"
                      >
                        <ExternalLink size={12} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* SECTION: EXPERIENCE (BSNL) */}
        <section id="experience" className="scroll-mt-20">
          <div className="section-title-badge">
            <Briefcase size={14} />
            <span>Industrial Exposure</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">
            Industrial Training & Internship
          </h2>

          <div className="bg-[#111726]/80 border border-slate-800/80 rounded-xl p-6 sm:p-8 shadow-lg shadow-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{bsnl.company}</h3>
                <p className="text-sm font-semibold text-blue-400 mt-0.5">{bsnl.role}</p>
              </div>
              <span className="self-start sm:self-center text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
                {bsnl.type}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {bsnl.description}
            </p>

            {/* BSNL domains grid (dark blocks) */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Radio size={13} className="text-blue-400" />
                <span>Understood Carrier-Grade Network & Switching Infrastructure:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {bsnl.learnings.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900 hover:border-blue-500/30 hover:shadow-md transition-all animate-fadeIn"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                        {item.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-200 truncate">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: SKILLS */}
        <section id="skills" className="scroll-mt-20">
          <div className="section-title-badge">
            <Code size={14} />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">
            Categorized Engineering Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsCategories.map((group, idx) => (
              <div 
                key={idx} 
                className="bg-[#111726]/80 border border-slate-800/80 rounded-xl p-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3 mb-4">
                  {group.category === "Programming" && <Code size={16} className="text-blue-400" />}
                  {group.category === "Engineering / Hardware" && <Cpu size={16} className="text-blue-400" />}
                  {group.category === "Software / Tools" && <Wrench size={16} className="text-blue-400" />}
                  <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wide">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-medium transition-colors cursor-default hover:bg-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-20">
          <div className="section-title-badge">
            <ShieldCheck size={14} />
            <span>Credential Verification</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">
            Professional Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-[#111726]/80 border border-slate-800/80 p-5 rounded-xl shadow-lg shadow-black/20 card-hover flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {cert.issuer}
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">
                    Issued: {cert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TWO BOTTOM CARDS: ACHIEVEMENTS & METAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Achievements & Leadership */}
          <section className="lg:col-span-8 bg-[#111726]/80 border border-slate-800/80 rounded-xl p-6 sm:p-7 shadow-lg shadow-black/20">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-3">
              <Trophy size={15} />
              <span>Achievements, Activities & Leadership</span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {achievements.map((item, idx) => (
                <li 
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-snug p-2.5 rounded-lg border border-slate-800 bg-slate-900/40"
                >
                  <Trophy size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interests & Languages Known */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Areas of Interest Card */}
            <section className="bg-[#111726]/80 border border-slate-800/80 rounded-xl p-5 shadow-lg shadow-black/20">
              <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-3.5">
                <Layers size={13} />
                <span>Areas of Interest</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((interest, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-850 text-slate-300 font-medium hover:border-slate-700 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages Known Card */}
            <section className="bg-[#111726]/80 border border-slate-800/80 rounded-xl p-5 shadow-lg shadow-black/20">
              <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-3.5">
                <Languages size={13} />
                <span>Languages Known</span>
              </div>
              <div className="space-y-2">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm border-b border-slate-800 pb-1.5 last:border-0 last:pb-0">
                    <span className="text-white font-bold">{lang.name}</span>
                    <span className="text-[11px] text-slate-400 font-medium bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

        {/* SECTION: CONTACT */}
        <section id="contact" className="scroll-mt-20">
          <div className="section-title-badge">
            <Mail size={14} />
            <span>Connect</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="bg-[#111726]/80 border border-slate-800/80 p-6 rounded-xl shadow-lg shadow-black/20 space-y-6">
                <h3 className="text-lg font-extrabold text-white">Contact Channels</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Feel free to reach out for research collaboration, internship invitations, technical discussions, or hardware projects.
                </p>

                <div className="space-y-4">
                  <a 
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all text-slate-300"
                  >
                    <div className="w-8 h-8 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-500">Email Address</div>
                      <div className="text-xs sm:text-sm font-semibold truncate max-w-[210px] sm:max-w-xs">{profileData.email}</div>
                    </div>
                  </a>

                  <a 
                    href={`tel:${profileData.phone}`}
                    className="flex items-center gap-3.5 p-3 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all text-slate-300"
                  >
                    <div className="w-8 h-8 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-500">Phone Number</div>
                      <div className="text-xs sm:text-sm font-semibold">{profileData.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-300">
                    <div className="w-8 h-8 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-500">Current Location</div>
                      <div className="text-xs sm:text-sm font-semibold">{profileData.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Button Group */}
              <div className="flex gap-3">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 font-bold text-sm text-slate-300 shadow-sm transition-all"
                >
                  <Linkedin size={15} className="text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 font-bold text-sm text-slate-300 shadow-sm transition-all"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Direct Send Form Column */}
            <div className="lg:col-span-7 bg-[#111726]/80 border border-slate-800/80 p-6 sm:p-8 rounded-xl shadow-lg shadow-black/20">
              <h3 className="text-lg font-extrabold text-white mb-4">Direct Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="Enter name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm bg-slate-900 outline-none transition-all text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm bg-slate-900 outline-none transition-all text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    required
                    placeholder="Inquiry or Project opportunity"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm bg-slate-900 outline-none transition-all text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    placeholder="Hello Sanjay, I would love to connect about..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm bg-slate-900 outline-none transition-all resize-none text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/20 active:scale-[0.99] cursor-pointer"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>

                {contactSubmitted && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-lg text-center animate-fadeIn">
                    Thank you! Your message has been simulated successfully. Sanjay will receive it soon.
                  </div>
                )}
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#0b101e] border-t border-slate-800/80 py-12 text-xs sm:text-sm text-slate-400 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="font-extrabold text-white">SANJAY KUMAR B — ECE Portfolio</p>
            <p className="text-slate-500">SRM Institute of Science and Technology, Tiruchirappalli</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-semibold">
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection("education")} className="hover:text-blue-400 transition-colors">Education</button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition-colors">Contact</button>
            <button onClick={handleDownload} className="text-blue-450 hover:text-blue-400">Download Resume</button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-slate-800/50 text-center text-slate-500 text-[11px]">
          &copy; {new Date().getFullYear()} Sanjay Kumar B. All Rights Reserved. Built with React, Tailwind CSS and jsPDF.
        </div>
      </footer>

    </div>
  );
}
