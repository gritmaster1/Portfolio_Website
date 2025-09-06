"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Stony Brook University",
    location: "New York, United States",
    duration: "Jan 2025 - Present",
    bullets: [
      "Digitized 80% of department workflows to streamline processes and boost operational efficiency through a collaborative web application, reducing reliance on manual tasks",
      "Ensured 99.9% system availability and scalability by leveraging Google Cloud Platform (GCP) for hosting and Firebase for backend services, supporting high demand and reliable performance",
      "Supported over 1,000 students and faculty by implementing real-time integrations with Adobe PDF APIs as well as Google Meet, and Sheets",
      "Integrated Google Sheets with Firebase using Google Apps Script, automating real-time data updates and simplifying workflow management for faculty"
    ]
  },
  {
    title: "Software Engineer",
    company: "Alstom Transport",
    location: "Bangalore, India",
    duration: "Jul 2023 - Jul 2024",
    bullets: [
      "Engineered REST APIs with Spring Boot in a microservices architecture, improving system performance by 15% through caching and query optimization",
      "Built responsive HMI interfaces with Angular, reducing UI latency by 10% via DOM optimization and enhancing real-time performance in train service station systems",
      "Designed and developed an end-to-end Python tool for dataset generation from payload configurations, streamlining application software validation and boosting process efficiency by 35%",
      "Automated validation workflows by integrating dataset creation and data format conversion pipelines, reducing manual intervention by 10% in safety-critical software validation",
      "Developed CI/CD pipelines in GitHub Actions to automate builds and deployments to QA environments, ensuring reliable and seamless releases on every merge"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Forsk Technologies",
    location: "Remote",
    duration: "Jan 2023 - Jun 2023",
    bullets: [
      "Developed a dashboard using Streamlit for real-time sentiment analysis of E-commerce website reviews by web scraping data and training a Logistic Regression model with TF-IDF vectorization on the Amazon customer review dataset",
      "Enhanced customer satisfaction and boosted online sales conversions by 10% post-launch through actionable insights from sentiment analysis",
      "Embraced Agile methodologies to expedite project delivery, slashing timelines by 30% and boosting team flexibility and collaboration"
    ]
  },
  {
    title: "Full-Stack Web Developer Intern",
    company: "GITAM E-club",
    location: "Visakhapatnam, India",
    duration: "Oct 2021 - Dec 2021",
    bullets: [
      "Modernized the in-app payment system with Node.js, Express, MongoDB, and OAuth2.0 for secure authentication, reducing transaction processing times by 40% and increasing success rates by 25%",
      "Improved UI/UX for the payment module with React.js and Material-UI, improving user flow as measured by A/B testing results",
      "Created RESTful APIs for secure communication with payment gateways (Stripe, Razorpay), cutting payment errors by 20%"
    ]
  }
];

export function ExperiencePanel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400">
            Professional Experience
          </span>
        </h1>
        <p className="text-white/60 text-center text-lg max-w-2xl mx-auto">
          A journey through my professional roles, each contributing to my growth as a developer and researcher.
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                    {exp.title}
                  </span>
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-indigo-400" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <ul className="space-y-2">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3 text-white"
                  >
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span className="text-white/90 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
