"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";

export function SimpleContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nakulreddymanne@gmail.com&su=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open Gmail compose window
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nakul-reddy-manne/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/gritmaster1",
      color: "hover:text-gray-300"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/nakulreddy",
      color: "hover:text-blue-300"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nakul_manne?igsh=eXl2bDlzbzdpemtk",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400">
            Get in Touch
          </span>
        </h1>
        <p className="text-white/60 text-center text-lg max-w-xl mx-auto">
          Have a question or want to work together? Send me a message and I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Mail className="w-6 h-6 text-indigo-400" />
          Send me a message
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-rose-400 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-600 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-white mb-6">
          Connect with me
        </h3>
        
        <div className="flex justify-center gap-6">
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
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-white/5 border border-white/10 rounded-lg text-white/60 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                title={social.name}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </div>
        
        <p className="text-white/40 text-sm mt-4">
          Click &quot;Send Message&quot; to open Gmail with your message pre-filled
        </p>
      </motion.div>
    </div>
  );
}