"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, Briefcase, ShieldCheck, Cloud } from "lucide-react";

const education = [
  {
    degree: "Post Graduate Diploma in IT (PGDIT)",
    institution: "Jahangirnagar University",
    year: "2023 - Present",
    description: "Advanced studies in software engineering, database architecture, and modern web technologies.",
    icon: BookOpen,
  },
  {
    degree: "Master of Business Administration (MBA)",
    institution: "University of Dhaka",
    year: "2019 - 2021",
    description: "Focus on Management Information Systems (MIS) and strategic technology implementation.",
    icon: Briefcase,
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "North South University",
    year: "2014 - 2018",
    description: "Dual major in Finance and Information Systems. Graduated with honors.",
    icon: GraduationCap,
  }
];

const certifications = [
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    icon: Cloud,
  },
  {
    name: "Certified Secure Software Lifecycle Professional",
    issuer: "ISC2",
    date: "2022",
    icon: ShieldCheck,
  }
];

export default function Education() {
  return (
    <div className="space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 text-primary text-sm font-medium mb-4">
          <GraduationCap size={16} />
          Academic Background
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
          Education & <span className="text-primary">Certs</span>
        </h1>
        <p className="text-on-surface-variant text-lg">
          Continuous learning and formal education that forms the foundation of my technical expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-3">
            <BookOpen className="text-primary" />
            Academic Journey
          </h2>
          
          <div className="relative border-l border-outline-variant/30 ml-4 space-y-12 pb-4">
            {education.map((item, idx) => (
              <motion.div 
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-surface-container border border-primary/50 flex items-center justify-center text-primary">
                  <item.icon size={14} />
                </div>
                
                <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-on-surface">{item.degree}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-on-surface-variant font-medium">{item.institution}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative w-full aspect-square rounded-3xl overflow-hidden glass-panel border-primary/20"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ovKOg1mijV3krx8wQmFOUTJiXfuC-QBDz1YiYQFaaKxUAS7bITr93gvB4XVUopepNZxUYrhfVthg3VM-67lQYgF4TtGAyVVtJhXE4Bh_IR7Z8C7BAC-x2VG_MRnK3JKUTF1OIr0AQ3ohdR97oYPN7Ho3aahKgb8cTcfHMm7Lahcz73NRlcFlmG2jUZSdN0qZRoQuWw-SgralFC0g4A0bM-BeiGblmiJbxCyQYk5ozOqSURubypx7Qou8NBJmQ0xN2kLVIy6SBAQ"
              alt="Keyboard"
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xl font-bold text-on-surface">Always Learning.</p>
              <p className="text-primary text-sm">Staying ahead of the curve.</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-on-surface flex items-center gap-3">
              <ShieldCheck className="text-primary" />
              Certifications
            </h2>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="glass-panel p-5 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 bg-surface-container rounded-lg text-primary mt-1">
                    <cert.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">{cert.name}</h4>
                    <p className="text-on-surface-variant text-xs mt-1">{cert.issuer} • {cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
