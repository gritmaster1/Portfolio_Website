"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nakulreddy@example.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open Gmail compose window
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/nakulreddy",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nakulreddy",
      color: "hover:text-gray-300"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/nakulreddy",
      color: "hover:text-pink-400"
    },
    {
      name: "Snapchat",
      icon: MessageCircle,
      url: "https://snapchat.com/add/nakulreddy",
      color: "hover:text-yellow-400"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-cyan-400" />
            Send me a message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Connect with me
          </h2>
          
          <p className="text-white/70 mb-6">
            Follow me on social media or reach out through these platforms:
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg text-white/60 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                >
                  <Icon className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
            <p className="text-cyan-300 text-sm">
              💡 <strong>Tip:</strong> Click "Send Message" to open Gmail with your message pre-filled!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

