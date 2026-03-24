"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Server, Network, Database, Layers, Code2, Terminal } from "lucide-react";

const skills = [
  {
    category: "Backend Mastery",
    icon: Server,
    items: [
      { name: "ASP.NET Core", level: 95 },
      { name: "C#", level: 90 },
      { name: "Entity Framework", level: 85 },
      { name: "RESTful APIs", level: 95 },
    ]
  },
  {
    category: "Frontend Excellence",
    icon: Network,
    items: [
      { name: "Angular", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    category: "Database & Storage",
    icon: Database,
    items: [
      { name: "MS SQL Server", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 70 },
    ]
  },
  {
    category: "Architecture & Tools",
    icon: Layers,
    items: [
      { name: "Microservices", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git / CI/CD", level: 85 },
      { name: "Azure", level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <div className="space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
          Technical <span className="text-primary">Ecosystem</span>
        </h1>
        <p className="text-on-surface-variant text-lg">
          A comprehensive overview of my technical proficiencies and the tools I use to build robust applications.
        </p>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden glass-panel border-primary/20"
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlXwirdMVoc2w4LP6GK_Yi48TBb-ldOSsvdfFQ5i9ozo9wTK_kG7yfMopSon4O4bLStuKce0hTDdKAczwz_ResDxILwZ0FMVaNqV0PP7FJUwJcsW7i_obJFEN6Ltklw08JGa0XLAxCsrEECL069SW4PGAZxWctgrG0MKkkbJjkECY49AY2-kxdpNjt0ZyKd1fjUTFJ5ghOQpwFypwbe2Stt_zSgfXCVaA8mktFf59fx3cxuO2cK7ERqJSqsz9e154sXo7L17CvISg"
          alt="Code Background"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end gap-6">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEbjpAaiB7pqYviaPxGs9No-I_XSTxFErf3J31iwBnFOGf26OuBtA2XNS_aJ2doaEyCE7gUIHLevXowJTiDBQW2nB2rBepR6kJgjRnBnYGIzMQXIIb2oYai2XchXvZvlC-oAEbUtrA_v-QfJ9Q3fecG6ZErpSw_5Mk6MaPBK4omeknpV5z4h7IObeRMHPxLUimOmmyLyE2Fe8WLRE0ts3EmRYBf1WVDHjZmsfgx_sbj7UgcgEW0sWfYQj2Yhx6uZzy-CHkMnzsUXY"
              alt="Profile"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-on-surface">Core Competencies</h3>
            <p className="text-primary font-medium">Full-Stack Development</p>
          </div>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl space-y-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-surface-container rounded-xl text-primary">
                <category.icon size={24} />
              </div>
              <h2 className="text-xl font-bold text-on-surface">{category.category}</h2>
            </div>

            <div className="space-y-5">
              {category.items.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-on-surface-variant">{item.name}</span>
                    <span className="text-primary">{item.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="h-full bg-primary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
