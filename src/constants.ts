export interface EducationItem {
  degree: string;
  major?: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
  demoUrl?: string;
  problemSolved?: string;
  myRole?: string;
  status?: string;
}

export interface InternshipItem {
  role: string;
  company: string;
  type: string;
  description: string;
  learnings: {
    tag: string;
    title: string;
    desc: string;
  }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export const profileData = {
  name: "SANJAY KUMAR B",
  title: "B.Tech Electronics & Communication Engineering",
  institution: "SRM Institute of Science and Technology, Tiruchirappalli",
  period: "August 2025 – Present",
  location: "Madurai, Tamil Nadu, India",
  phone: "+91 7010812246",
  email: "b.sanjaykumar183@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjay-kumar-balasubramanian",
  github: "https://github.com/SANJAY-KUMAR-B-Engineer",
  summary:
    "Electronics and Communication Engineering student at SRM Institute of Science and Technology, Tiruchirappalli, with interests in Wireless Communication, Embedded Systems, IoT, Networking, Cybersecurity, and VLSI. Passionate about designing practical hardware solutions, implementing IoT-enabled automations, and building web-based educational platforms that bridge hardware and software.",
  ietMember: true,
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Electronics and Communication Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "August 2025 – Present",
  },
  {
    degree: "Higher Secondary (CBSE)",
    institution: "Velammal Vidyalaya",
    location: "Madurai, Tamil Nadu",
    period: "Completed 2025",
  },
  {
    degree: "Secondary School (CBSE)",
    institution: "Velammal Vidyalaya",
    location: "Madurai, Tamil Nadu",
    period: "Completed 2023",
  },
];

export const internships: InternshipItem[] = [
  {
    role: "In-Plant Trainee / Engineering Intern",
    company: "Bharat Sanchar Nigam Limited (BSNL)",
    type: "Telecommunications Internship",
    description:
      "Completed comprehensive in-plant technical training across critical telecommunications infrastructure and carrier network operations, gaining practical insights into communication systems.",
    learnings: [
      { tag: "RF", title: "Radio Frequency", desc: "RF transmission, antennas, cell planning, and signal propagation fundamentals." },
      { tag: "BSS", title: "Base Station Subsystem", desc: "Architecture of BTS (Base Transceiver Station) and BSC (Base Station Controller)." },
      { tag: "IT", title: "Information Technology", desc: "Enterprise IT services, billing, network administration, and server management." },
      { tag: "CSS", title: "Core Switching & Services", desc: "Circuit switching mechanisms, routing, and subscriber line management." },
      { tag: "INFRA", title: "Infrastructure & Power", desc: "Tower infrastructure, DC power plants, battery backups, and site maintenance." },
      { tag: "EB", title: "Enterprise Business", desc: "Corporate networking, MPLS-VPN, leased line circuits, and enterprise telecom solutions." },
      { tag: "CPAN", title: "Converged Packet Access Network", desc: "High-speed IP/MPLS packet transport network and optical backhaul architecture." },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Smart Traffic Control System Using IoT",
    category: "IoT & Embedded Systems",
    description:
      "Designed an IoT-based traffic management solution to monitor and regulate traffic flow dynamically using sensors and microcontrollers. Aimed to reduce congestion and improve emergency vehicle prioritization.",
    problemSolved: "Inability of traditional static traffic timers to adapt to dynamic, real-time traffic volumes, causing gridlocks and delaying emergency response vehicles.",
    myRole: "Assisted in circuit design, testing of wireless communication modules, and writing the core control algorithms for traffic signal shifting.",
    status: "Completed Prototype",
    technologies: ["Arduino", "IoT Sensors", "Embedded C", "Cloud Integration"],
    highlights: [
      "Dynamic traffic density sensing with automated signal timing adjustments",
      "Emergency vehicle override channel for expedited passage",
      "Cloud telemetry transmission for real-time traffic statistics",
    ],
    githubUrl: "https://github.com/SANJAY-KUMAR-B-Engineer/smart-traffic-control",
  },
  {
    title: "Smart Classroom System",
    category: "IoT & Automation",
    description:
      "Developed a smart classroom solution to improve classroom automation and learning efficiency using connected electronic systems. Designed and integrated sensors and microcontrollers for monitoring classroom conditions and automating key functions.",
    problemSolved: "Manual operations of electrical appliances in classrooms and lack of continuous environmental monitoring leading to energy wastage and sub-optimal classroom comfort.",
    myRole: "Contributed to circuit design, system integration, microcontroller programming, hardware testing, and prototype physical development.",
    status: "Completed Prototype",
    technologies: ["Arduino", "IoT Sensors", "Embedded C", "Microcontrollers", "IoT"],
    highlights: [
      "Automatic environmental monitoring (temperature, humidity, ambient light)",
      "Automated appliance control system based on real-time classroom occupancy",
      "Integrated electronic dashboard for centralized administrative observation",
    ],
    githubUrl: "https://github.com/SANJAY-KUMAR-B-Engineer/smart-classroom",
  },
  {
    title: "Study at Ease",
    category: "Web Platform & AI",
    description:
      "An AI-powered collaborative study platform designed to help students plan, organize, and track their academic studies. Merges modern client-side features with intelligent backend assistance.",
    problemSolved: "Students struggle with isolated studying, inconsistent task scheduling, and lack of streamlined productivity analytics across their subjects.",
    myRole: "Designed the full interface, implemented personalized study planning dashboards, collaborative study rooms, and integrated AI study tools.",
    status: "Active Deployment",
    technologies: ["React", "JavaScript", "Firebase", "Firestore", "Gemini AI", "HTML", "CSS"],
    highlights: [
      "AI Study Task Generator & personalized study planning dashboard",
      "Collaborative study rooms, manual task lists, and note-taking workspace",
      "Focus tracker, productivity analytics, Focus Timer, and Study Stream collaborative mode",
    ],
    githubUrl: "https://github.com/SANJAY-KUMAR-B-Engineer/study-at-ease",
    demoUrl: "https://study-at-ease.vercel.app",
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Programming",
    iconName: "Code",
    skills: ["Python", "C"],
  },
  {
    category: "Engineering / Hardware",
    iconName: "Cpu",
    skills: ["Arduino", "IoT", "Electronics", "VLSI"],
  },
  {
    category: "Software / Tools",
    iconName: "Wrench",
    skills: [
      "Git/GitHub",
      "Firebase",
      "Google AI / Gemini",
      "MATLAB",
      "Canva",
      "PowerPoint",
      "Excel",
    ],
  },
];

export const certifications = [
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
  },
  {
    title: "SOC Fundamentals",
    issuer: "Microsoft",
    date: "2024",
  },
  {
    title: "Cybersecurity Analyst Job Role Certification",
    issuer: "Coursera / Professional Credentials",
    date: "2024",
  },
];

export const achievements = [
  "Senior Grade Typewriting Certification – Distinction",
  "Member, Electronics and Communication Engineering Association – SRMIST",
  "IET Member (The Institution of Engineering and Technology)",
  "Participated in 24 hours hackathon at SRMIST",
  "Participated in hackathon and hardware workshop at NIT Trichy",
  "Participated in national-level technical symposiums and paper presentations",
  "Volunteered in college cultural and technical events",
];

export const interests = [
  "Embedded & IoT Systems",
  "Cybersecurity (SOC & Blue Team Basics)",
  "Communication Networks",
  "VLSI Fundamentals",
  "Wireless Communication",
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Hindi", level: "Basic" },
  { name: "Japanese", level: "Basic" },
];
