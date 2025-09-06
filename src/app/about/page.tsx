"use client";
import React from "react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/spline";
import { InteractiveChatbot } from "@/components/ui/interactive-chatbot";
import { Spotlight } from "@/components/ui/spotlight";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 bg-[#030303]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400">
              About Me
            </span>
          </h1>
          <p className="text-white/60 text-center text-lg max-w-2xl mx-auto">
            Get to know me through an interactive conversation with my AI assistant and explore my 3D avatar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Chatbot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <InteractiveChatbot />
          </motion.div>

          {/* Right Side - 3D Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full h-[600px] overflow-hidden">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              
              <div className="flex h-full">
                {/* 3D Scene */}
                <div className="flex-1 relative">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
