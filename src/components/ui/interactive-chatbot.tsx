"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const botResponses = {
  greeting: [
    "Hello! I'm Sai Nakul Reddy Manne's AI assistant. Nice to meet you! 🤖",
    "Hi there! I'm here to tell you about Sai Nakul. What would you like to know?",
    "Hey! Welcome! I can help you learn about Nakul's background and skills."
  ],
  background: [
    "Sai Nakul Reddy Manne is a Computer Science graduate with an MS from Stony Brook University (3.8/4.0 GPA) and a Bachelor's from GITAM University (3.6/4.0 GPA). He specializes in building scalable backend systems, distributed systems, AI/ML, and full-stack development.",
    "At Stony Brook, he worked as both a Teaching Assistant and Research Assistant, developing components of an Automated Redistricting System and building a monolithic backend system in C# for library management serving 10K+ users. He also founded a coding club at GITAM to inspire students into tech.",
    "Nakul's academic journey spans from India to the USA, giving him a global perspective on technology and innovation, with a strong focus on scalable system architecture."
  ],
  skills: [
    "Nakul is skilled in Java, Python, C++, JavaScript, TypeScript, C#, and many other programming languages. He's also expert in frameworks like Spring Boot, FastAPI, React.js, Next.js, and ASP.NET Core for building scalable backend systems.",
    "His technical skills include cloud technologies (AWS, GCP, Terraform), DevOps tools (Docker, Kubernetes, GitHub Actions), databases (PostgreSQL, Redis, MongoDB, SQL Server), and ML frameworks (TensorFlow, LangChain, Pandas, Scikit-learn).",
    "He specializes in building scalable backend systems, microservices architecture, REST APIs, and has extensive experience with distributed systems, payment processing, and real-time data processing."
  ],
  projects: [
    "Nakul has worked on several impressive projects including PharmaBuddy AI (RAG-based research assistant), Election Tweets Analysis (40M+ tweets), Distributed Transaction Processing System (4,000 TPS), and Catamaran DNS nameserver.",
    "His projects showcase his expertise in building scalable backend systems, distributed systems, AI/ML, full-stack development, and creating systems that handle high-volume data processing.",
    "You can check out his GitHub (github.com/gritmaster1) to see his code and live demos of his projects, including the PharmaBuddy AI system!"
  ],
  experience: [
    "Currently at Stony Brook University as a Software Engineer Intern, Nakul digitized 80% of department workflows, built scalable systems on GCP/Firebase supporting 1,000+ users, and integrated real-time APIs with Adobe PDF, Google Meet, and Sheets.",
    "At Alstom Transport, he engineered REST APIs with Spring Boot in microservices architecture, built responsive HMI interfaces with Angular, and developed Python tools that boosted process efficiency by 35% in safety-critical systems.",
    "As a Machine Learning Intern at Forsk Technologies, he developed a Streamlit dashboard for sentiment analysis using Logistic Regression and TF-IDF, boosting sales conversions by 10%. He also worked as a Full-Stack Developer at GITAM E-club, modernizing payment systems with Node.js and MongoDB."
  ],
  contact: [
    "You can reach Nakul through his email: nakulreddymanne@gmail.com or phone: +1 (934) 255 9257. Connect with him on LinkedIn (linkedin.com/in/nakul-reddy-manne/) and GitHub (github.com/gritmaster1).",
    "He's always interested in discussing new opportunities, collaborations, or just having a chat about technology and innovation.",
    "Feel free to send him a message - he's very approachable and loves connecting with fellow developers and tech enthusiasts!"
  ],
  default: [
    "That's interesting! I can tell you more about Nakul's background, skills, projects, experience, or how to contact him. What would you like to know?",
    "I'm here to help you learn about Nakul! Try asking about his education, work experience, technical skills, or projects.",
    "Great question! I can share information about Nakul's academic background, his current work at Stony Brook University, or his expertise in building scalable backend systems. What interests you most?",
    "I'd love to help! You can ask me about Nakul's education (Stony Brook, GITAM), his work at Stony Brook University, Alstom Transport, or Forsk Technologies, his technical skills, or his projects like PharmaBuddy AI.",
    "Feel free to ask me anything! I can tell you about Nakul's journey from India to the USA, his expertise in scalable backend systems, distributed systems and AI/ML, or how to get in touch with him.",
    "What would you like to know about Nakul? I can share details about his MS in Computer Science, his experience building scalable backend systems and REST APIs, or his impressive projects like PharmaBuddy AI!"
  ]
};

// Regex patterns for categories
const patterns = {
  greeting: /\b(hello|hi|hey|good morning|good afternoon|good evening)\b/i,
  background: /\b(background|education|university|school|college|degree|gpa|stony brook|gitam|master|bachelor|graduate)\b/i,
  skills: /\b(skill|programming|technology|language|framework|tool|java|python|javascript|react|spring|aws|docker|kubernetes|machine learning|ai|ml|tensorflow)\b/i,
  experience: /\b(experience|experiences|work|job|career|alstom|forsk|stony brook|gitam e-club|gitam|engineer|software|intern|company|employment|professional|scalable|backend|microservices)\b/i,
  projects: /\b(project|github|repository|build|develop|create|election|tweet|distributed|transaction|catamaran|pharmabuddy|dns|paxos|raft|rag|ai assistant|research assistant)\b/i,
  contact: /\b(contact|email|reach|connect|linkedin|phone|message|get in touch|hire|collaborate|opportunity)\b/i
};

export function InteractiveChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Nakul's AI assistant. Ask me anything about his background, skills, projects, or experience! 🤖",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    if (patterns.greeting.test(userMessage)) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    if (patterns.background.test(userMessage)) {
      return botResponses.background[Math.floor(Math.random() * botResponses.background.length)];
    }
    if (patterns.skills.test(userMessage)) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    }
    if (patterns.experience.test(userMessage)) {
      return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)];
    }
    if (patterns.projects.test(userMessage)) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    if (patterns.contact.test(userMessage)) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue.toLowerCase()),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full h-[80vh] flex flex-col">
      {/* Header */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Bot className="w-5 h-5 text-indigo-400" />
          Interact with me
        </h3>
        <p className="text-white/60 text-sm">Ask me anything about Nakul!</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`p-2 rounded-full ${message.isUser ? 'bg-indigo-500' : 'bg-white/10'}`}>
                  {message.isUser ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-indigo-400" />
                  )}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.isUser 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-white/10 text-white/90 border border-white/20'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-indigo-100' : 'text-white/50'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-start gap-2">
              <div className="p-2 rounded-full bg-white/10">
                <Bot className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="bg-white/10 text-white/90 border border-white/20 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Nakul..."
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
