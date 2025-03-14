"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Cpu, Layers3 } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-blue-500" />,
    title: "Advanced AI Models",
    description: "Utilizing the latest AI frameworks to generate high-quality results with real-time efficiency.",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-purple-500" />,
    title: "Creative Automation",
    description: "Empower your workflow with AI-powered content generation that saves time and boosts creativity.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-500" />,
    title: "High-Performance Computing",
    description: "Built with cutting-edge infrastructure to handle complex AI tasks effortlessly.",
  },
  {
    icon: <Layers3 className="w-12 h-12 text-pink-500" />,
    title: "Scalable & Secure",
    description: "Designed for enterprise-level scalability with top-tier security and privacy protection.",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-[#020817] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our AI Platform?
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-900 cursor-pointer rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
