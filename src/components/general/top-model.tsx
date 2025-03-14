"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Star } from "lucide-react";
import aiAnimation from "../../../public/lottie.json";

// Dynamically import Lottie to fix SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const topModels = [
  {
    name: "GPT-4",
    description:
      "The most advanced language model by OpenAI, offering unparalleled text comprehension and generation capabilities. Ideal for chatbots, content creation, and programming assistance.",
    animation: aiAnimation,
  },
  {
    name: "Stable Diffusion",
    description:
      "A groundbreaking AI model for generating high-quality images from text prompts. Perfect for artists, designers, and AI enthusiasts looking to create realistic visuals effortlessly.",
    animation: aiAnimation,
  },
  {
    name: "Whisper",
    description:
      "A state-of-the-art speech-to-text model developed by OpenAI, providing exceptional accuracy in transcribing audio across multiple languages and noisy environments.",
    animation: aiAnimation,
  },
  {
    name: "DALL·E 2",
    description:
      "An AI model designed to generate realistic and imaginative images from textual descriptions, transforming creative ideas into stunning visuals with incredible detail.",
    animation: aiAnimation,
  },
  {
    name: "Claude AI",
    description:
      "A sophisticated conversational AI assistant designed for efficiency, knowledge retention, and engaging human-like interactions across various domains.",
    animation: aiAnimation,
  },
];

const TopModelsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-24 bg-[#020817] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600 text-center"
        >
          Leading AI Models
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 text-center"
        >
          Discover the cutting-edge AI models revolutionizing industries, from language processing to image generation.
        </motion.p>

        <div className="space-y-12 md:max-w-4xl mx-auto">
          {topModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-10 bg-[#0a0f1f] border border-gray-700 p-8 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Left: Model Animation */}
              {isClient && (
                <motion.div
                  className="w-40 h-40 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie animationData={model.animation} loop autoPlay />
                </motion.div>
              )}

              {/* Right: Model Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-gray-200">{model.name}</h3>
                <p className="text-md text-gray-400 leading-relaxed">{model.description}</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" stroke="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopModelsSection;
