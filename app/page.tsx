"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Code2, Database, Network, Server, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 text-primary text-sm font-medium">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Available for opportunities
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-on-surface">
            Mainul Hasan
          </h1>
          <h2 className="text-2xl lg:text-3xl text-on-surface-variant font-medium">
            Full-Stack Software Developer
          </h2>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Architecting robust digital solutions with a focus on scalable backend systems and intuitive frontend experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { name: "ASP.NET Core", icon: Server },
            { name: "Angular", icon: Network },
            { name: "React", icon: Code2 },
            { name: "SQL Server", icon: Database },
          ].map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-lg glass-panel text-on-surface-variant text-sm font-medium hover:text-primary hover:border-primary/50 transition-colors">
              <tech.icon size={16} />
              {tech.name}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-4">
          <Link 
            href="/projects" 
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary-container transition-colors emerald-glow"
          >
            View Projects
            <ArrowRight size={20} />
          </Link>
          <Link 
            href="/contact" 
            className="flex items-center gap-2 px-8 py-4 rounded-xl glass-panel text-on-surface font-bold hover:bg-surface-container-high transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 relative w-full max-w-md aspect-square"
      >
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel border-primary/30 p-2">
          <div className="w-full h-full rounded-2xl overflow-hidden relative bg-surface-container-low">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiezOkyVpB9dxUs5adHpCz-sDxL_7w1fQWHJcONvbvq4xIxg3JcRLZQzwCyCo0apCIViIRcMz9-WVaw2F0wVZ_BAtY-oNe2Qu-oT5hfsolfmWpdPQCQOJO2CElSc655X81ueEK7oDkYAZ3wcE6Rj0G0bDmtp50ifirUhWfkJN7StDWngWvgxDnXMuR6ssgLqMonTPfkN-wMDp2XB_KZZ7fdFz96bbhrbkcmqdYDaC7VVjmVbHisg2KUjXvpk_ZxvCFouSbAFyhiNk"
              alt="Mainul Hasan"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>

        {/* Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute top-12 -right-6 lg:-right-12 glass-panel p-4 rounded-2xl flex items-center gap-4 shadow-xl"
        >
          <div className="p-3 bg-primary/20 text-primary rounded-xl">
            <BadgeCheck size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-on-surface">5+</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">Years Exp</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 -left-6 lg:-left-12 glass-panel p-4 rounded-2xl flex items-center gap-4 shadow-xl"
        >
          <div className="p-3 bg-primary/20 text-primary rounded-xl">
            <Terminal size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-on-surface">20+</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">Projects</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
