"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Database, Brain, Globe,LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    title: "PharmaBuddy AI",
    description: "Built PharmaBuddy, an AI research assistant using RAG and GPT-based LLMs, enabling pharmacy professionals and students to quickly retrieve, summarize, and gain insights from FDA-approved drugs and PubMed research, streamlining research workflows and improving decision-making.",
    githubUrl: "https://github.com/gritmaster1/PharmaBuddy",
    tech: ["Python", "RAG", "GPT", "LLMs", "PubMed API", "Vector Database"],
    icon: Brain
  },
  {
    title: "Research Assistant (Election Tweets Analysis)",
    description: "Analyzed 40M+ tweets using NLP and custom bot detection to track sentiment shifts and event impacts, visualized via FastAPI dashboards. This project demonstrates expertise in large-scale data processing and natural language understanding.",
    githubUrl: "https://github.com/gritmaster1/election-tweets-analysis",
    tech: ["Python", "Next.js", "NLP", "Hugging Face", "FastAPI"],
    icon: Brain
  },
  {
    title: "Distributed Transaction Processing System",
    description: "Built crash fault-tolerant transaction system with 4,000 TPS using Multi-Paxos and 2PC across distributed nodes. This system showcases advanced distributed systems knowledge and high-performance computing capabilities.",
    githubUrl: "https://github.com/gritmaster1/distributed-transaction-system",
    tech: ["C++", "SQLite", "Paxos", "gRPC", "Two-Phase Commit"],
    icon: Database
  },
  {
    title: "Catamaran",
    description: "Engineered a fault-tolerant distributed DNS nameserver with Raft consensus algorithm and Dynamic DNS updates. This project demonstrates expertise in distributed systems, consensus protocols, and network programming.",
    githubUrl: "https://github.com/gritmaster1/catamaran",
    tech: ["Go", "Raft", "DNS", "Distributed Systems"],
    icon: Globe
  }
];

export function ProjectsPanel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400">
            Featured Projects
          </span>
        </h1>
        <p className="text-white/60 text-center text-lg max-w-2xl mx-auto">
          A collection of projects that showcase my skills in full-stack development, AI/ML, and software engineering.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500/20 to-rose-400/20 rounded-lg">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                      {project.title}
                    </span>
                  </h3>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 group"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-rose-400/20 border border-indigo-500/30 rounded-lg text-indigo-300 hover:from-indigo-500/30 hover:to-rose-400/30 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
