'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Lottie from "lottie-react";
import aiAnimation from "../../../public/lottie.json"

const topModels = [
  {
    name: "GPT-4",
    description: "The latest AI model by OpenAI with advanced language understanding.",
    animation: aiAnimation,
  },
  {
    name: "Stable Diffusion",
    description: "A powerful AI model for generating high-quality images.",
    animation: aiAnimation,
  },
  {
    name: "Whisper",
    description: "OpenAI’s speech-to-text model with exceptional accuracy.",
    animation: aiAnimation,
  },
  {
    name: "DALL·E 2",
    description: "AI model for generating realistic images from textual descriptions.",
    animation: aiAnimation,
  },
  {
    name: "Claude AI",
    description: "A conversational AI assistant built for efficiency and accuracy.",
    animation: aiAnimation,
  },
];

const TopModelsSection = () => {
  return (
    <section className="py-20 bg-[#020817] text-white relative overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600"
        >
          Top AI Models
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Explore the most powerful AI models transforming industries worldwide.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 cursor-pointer bg-[#0a0f1f] border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300">
                <CardContent>
                  <div className="flex flex-col items-center mb-4">
                    <motion.div className="w-24 h-24">
                      <Lottie animationData={model.animation} loop autoPlay />
                    </motion.div>
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-semibold">{model.name}</h3>
                      <p className="text-sm text-gray-400">{model.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" stroke="currentColor" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopModelsSection;
