"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  university: string;
  location: string;
  duration: string;
  details: string[];
  icon: React.ComponentType<any>;
}

const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    university: "Stony Brook University",
    location: "Stony Brook, New York, USA",
    duration: "Aug 2024 - Dec 2025",
    details: [
      "GPA: 3.8/4.0 - Specialized in Distributed Systems, Database Systems, Advanced Algorithms, and Large Language Models",
      "Worked as a Teaching Assistant (TA) conducting recitations and grading exams while assisting students in Linux and C++ coursework",
      "Worked as a Research Assistant (RA) developing components of an Automated Redistricting System to support efficient and accurate district mapping",
      "Built a monolithic backend system in C# (ASP.NET Core, SQL Server) to help librarians manage daily operations for 10K+ users with book tracking, borrowing/returns, and analytics-driven reports and recommendations"
    ],
    icon: GraduationCap
  },
  {
    degree: "Bachelor of Science in Computer Science",
    university: "GITAM University",
    location: "Visakhapatnam, Andhra Pradesh, India",
    duration: "Aug 2019 - Jun 2023",
    details: [
      "GPA: 3.6/4.0 - Strong foundation in Computer Science fundamentals with focus on software development and system design",
      "Active participation in coding competitions and completed projects in full-stack development and data structures",
      "Founded a coding club in college to inspire students into tech and conducted web development workshops"
    ],
    icon: BookOpen
  }
];

export default function EducationPage() {
  return (
    <div className="min-h-screen py-16 bg-[#030303]">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400">
              Education & Technical Skills
            </span>
          </h1>
          <p className="text-white/60 text-center text-lg max-w-2xl mx-auto">
            My technical expertise and academic journey in Computer Science, from foundational learning to advanced research.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              Education
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon and Degree Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-rose-400/20 rounded-lg">
                      <Icon className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                          {edu.degree}
                        </span>
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/80 mb-4">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-indigo-400" />
                          <span className="font-medium">{edu.university}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-indigo-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-indigo-400" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Details */}
                <div className="mt-6">
                  <ul className="space-y-3">
                    {edu.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="text-indigo-400 mt-1.5">•</span>
                        <span className="text-white/90 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              Technical Skills
            </span>
          </h2>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Java</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Python</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">C++</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">JavaScript</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">TypeScript</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">SQL</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">HTML</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">CSS</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">React</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Node.js</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Bash</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">FastAPI</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Flask</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Django</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Spring Boot</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">React.js</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Next.js</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Pandas</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">NumPy</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Scikit-learn</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">TensorFlow</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">LangChain</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Terraform</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">AWS</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Docker</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Kubernetes</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Jenkins</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">GitHub Actions</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Git</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Apache Kafka</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">PostgreSQL</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">DB2</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">SQLAlchemy</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm">Redis</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
