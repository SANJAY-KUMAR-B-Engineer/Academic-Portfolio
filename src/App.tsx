import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Github,
  MapPin, 
  Cpu,
  Trophy,
  ExternalLink,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { 
  profileData, 
  education, 
  projects, 
  skills, 
  certifications, 
  activities, 
  languages 
} from "./constants";

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bento-card ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <span className="section-title">{title}</span>
);

export default function App() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4 md:px-8">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-5 auto-rows-auto">
        
        {/* Profile / Intro - Large Bento */}
        <BentoCard className="md:col-span-4 lg:col-span-12 flex flex-col justify-center min-h-[300px]">
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                {profileData.name}
              </h1>
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-500/20 w-fit mx-auto md:mx-0">
                  {profileData.ietMember ? "IET Member & ECE Researcher" : "ECE Innovator"}
                </div>
                <div className="flex flex-col gap-1 items-center md:items-start">
                  <p className="text-lg md:text-xl text-slate-400 font-medium whitespace-nowrap">
                    {profileData.title} @ SRM IST
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={14} className="text-blue-500" />
                    {profileData.location}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 border-t border-slate-800/50 pt-8">
                 <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                  <Mail size={16} /> Contact
                </a>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                  <Github size={16} /> GitHub Profile
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* About Section - Wide Bento */}
        <BentoCard className="md:col-span-4 lg:col-span-4" delay={0.1}>
          <SectionTitle title="About Me" />
          <p className="text-sm text-slate-400 leading-relaxed font-medium italic">
            "{profileData.summary}"
          </p>
        </BentoCard>

        {/* Projects Section - Combined */}
        <BentoCard className="md:col-span-4 lg:col-span-8 group overflow-hidden relative" delay={0.15}>
          <SectionTitle title="Projects" />
          <div className="space-y-10 mt-4">
            {projects.map((project, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-800 hover:border-blue-500 transition-colors py-2">
                <div className="absolute -left-[2px] top-4 w-1 h-3 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-2xl">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Technical Skills - Custom Grid Bento */}
        <BentoCard className="md:col-span-4 lg:col-span-6 overflow-visible" delay={0.2}>
          <SectionTitle title="Skills & Specialization" />
          <div className="flex flex-wrap gap-3 pt-4">
             {skills.map((skill, idx) => (
               <div key={idx} className="relative group/tooltip">
                  <div className="px-5 py-3 bg-[#1a1a1a] border border-[#262626] rounded-2xl text-sm text-slate-300 font-semibold hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all cursor-help block">
                    {skill.name}
                  </div>
                  {/* Clean Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/tooltip:translate-y-0 z-50">
                    <div className="bg-[#1a1a1a] text-slate-300 text-xs p-4 rounded-2xl shadow-2xl leading-relaxed border border-[#333] backdrop-blur-xl">
                      {skill.info}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a1a] rotate-45 border-b border-r border-[#333]"></div>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </BentoCard>

        {/* Education Timeline - Column Bento */}
        <BentoCard className="md:col-span-4 lg:col-span-4" delay={0.3}>
          <SectionTitle title="Educational Background" />
          <div className="space-y-6 pt-2">
            {education.map((edu, idx) => (
              <div key={idx} className="group relative pl-5 border-l border-slate-800">
                <div className="absolute -left-[0.5px] top-1.5 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors transform -translate-x-1/2"></div>
                <h4 className="text-sm font-bold text-white leading-tight">{edu.degree}</h4>
                <div className="text-[10px] text-blue-500 font-bold uppercase mt-1">{edu.institution}</div>
                <div className="text-[10px] text-slate-500 font-medium">{edu.period}</div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Certifications - Bento */}
        <BentoCard className="md:col-span-4 lg:col-span-4" delay={0.35}>
          <SectionTitle title="Certifications" />
          <div className="space-y-3">
             {certifications.map((cert, idx) => (
               <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-2xl border border-transparent hover:border-slate-800 transition-all group">
                 <ShieldCheck size={16} className="text-blue-500 shrink-0" />
                 <span className="text-[11px] text-slate-400 font-medium group-hover:text-slate-200 transition-colors">{cert}</span>
               </div>
             ))}
          </div>
        </BentoCard>

        {/* Activities / Awards - Bento */}
        <BentoCard className="md:col-span-4 lg:col-span-4" delay={0.4}>
          <SectionTitle title="Activities & Honors" />
          <div className="space-y-4">
             {activities.map((act, idx) => (
               <div key={idx} className="flex gap-3 text-xs text-slate-400">
                  <Trophy size={14} className="text-slate-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{act}</span>
               </div>
             ))}
          </div>
        </BentoCard>

        {/* Footer Bento */}
        <BentoCard className="md:col-span-4 lg:col-span-12 flex justify-between items-center text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-transparent border-none p-0 px-4" delay={0.45}>
           <div>&copy; {new Date().getFullYear()} {profileData.name}</div>
           <div className="flex gap-6">
              <a href={profileData.github} target="_blank" className="hover:text-white transition-colors">GitHub</a>
              <a href={profileData.linkedin} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
           </div>
        </BentoCard>

      </div>

      {/* Decorative BG elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
