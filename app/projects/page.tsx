"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Enterprise HR Management System",
    description: "A comprehensive solution for managing employee lifecycles, payroll, and performance metrics. Built with ASP.NET Core and Angular.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Fi6SyBq61zWfqYWKRR5ttDb0-Tho_-xiO4UwJasWXuey9DzKPfQg-q-6puVb0HoU6H56-fcRTx-KJ8_wKmfeWHN1hovt3z60FVoY_bBHwMSO29Pwl8py7YDf_CNelrVXMzdFh4XkdS19mxw9h6I4yvenPSWFpsinbvDxMrLd8el03xIU7Ultryhnxi8D_gxQhik6zIt5rFlRlubMAtXFN_ZyDP9MAbR9XCz1p_PLE2NEZiL8wn-2xmXR8PJFrDa8fVW8sQu1n7k",
    tags: ["ASP.NET Core", "Angular", "SQL Server", "Redis"],
    featured: true,
  },
  {
    title: "University Learning Management System",
    description: "Interactive platform for course delivery, assignments, and student-teacher communication.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmYdu42B4wzMDEE6_7JLCnxMAH2kKXOvPUc-jCMFtbK5kOcg_0G5PIzzoxBxr7nmTDWlG1eFAgDZ02cJX9mnfwsxj4c-kEFRAx0Q2YszPyAb4GG3fURspLdegRIxI2qa8xrwOGzSigfhBAngkncKfQawwidD65uDah-RqMGBJgIRuXEtbJD1RaFjJH8cjwi1dd6ARlEeeGRFPc0SyfFzgh7CTCHBoKtAgwJEe_BZs7kyirkRveDwXPUc_XPDHTvz_a5WvTxBWRle0",
    tags: ["React", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    title: "B2B Wholesale Marketplace",
    description: "High-performance e-commerce platform connecting manufacturers with retailers, featuring complex pricing tiers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Mj1QA7qKBsucdKCUbDSLZVTJefeHswBbZe5j97fg1O3bRC0mD-hthCiCYyVlV70zzB2ktcRpl2Yz2Pl8JUJUL5C6vlltS98HY7CyQl0kw0GE08lmpgoEfLZSy7CeSrK9dTDKqYyggxoTxF_3gI0De5jhiA7atIu7J3eRhe2PgH53OHtYbZnkFg87qpUnTEU9HKA8UeKIWA2K9e6Ziq8CphWGjcJu0G2CR4rjImlx_QgBAjgzuK4oV7BdO6IpMDQgCiCb-VdEw3o",
    tags: ["Next.js", "C#", "PostgreSQL"],
    featured: false,
  }
];

export default function Projects() {
  return (
    <div className="space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 text-primary text-sm font-medium mb-4">
          <Sparkles size={16} />
          Portfolio
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
          Selected <span className="text-primary">Creations</span>
        </h1>
        <p className="text-on-surface-variant text-lg">
          Showcasing complex problems solved through elegant architecture and clean code.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className={`glass-panel rounded-3xl overflow-hidden group flex flex-col ${
              project.featured ? "lg:col-span-2 lg:flex-row" : ""
            }`}
          >
            <div className={`relative overflow-hidden ${project.featured ? "lg:w-1/2" : "w-full aspect-video"}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className={`p-8 flex flex-col justify-between ${project.featured ? "lg:w-1/2" : ""}`}>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-surface-container text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="pt-8 mt-auto">
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-on-surface hover:text-primary transition-colors"
                >
                  View Case Study
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
