"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Sign Up & Get Started",
    description: "Create an account and access your AI dashboard instantly.",
  },
  {
    id: "02",
    title: "Choose Your AI Tool",
    description: "Select AI-powered features like text generation or automation.",
  },
  {
    id: "03",
    title: "Generate & Customize",
    description: "Let InfoAI process your request and refine the results.",
  },
  {
    id: "04",
    title: "Save & Share",
    description: "Download, copy, or export results and share them easily.",
  },
];

const HowToUse = () => {
  return (
    <section className="py-20 bg-gradient-to-b ">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white opacity-[0.3] mb-10"
        >
          How to Use <span className="text-blue-400">InfIAI</span>
        </motion.h2>

        {/* Image with Neon Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex justify-center"
        >
          <div className="relative p-2  rounded-xl ">
            <Image
              src="/steps.png"
              alt="Steps to use InfoAI"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </motion.div>

        {/* Steps List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center justify-between w-full max-w-2xl p-5 rounded-lg bg-[#0f1e3c] shadow-lg ring-1 ring-blue-500/30 backdrop-blur-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;
