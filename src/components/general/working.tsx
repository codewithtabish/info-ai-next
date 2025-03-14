"use client";
import { motion } from "framer-motion";
import { BrainCircuit, FileUp, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload Your Content",
    description: "Simply upload your text, audio, or document to get started.",
    icon: FileUp,
  },
  {
    id: 2,
    title: "AI Processes Everything",
    description: "Our AI analyzes your input and extracts key insights instantly.",
    icon: BrainCircuit,
  },
  {
    id: 3,
    title: "Generate Amazing Results",
    description: "AI crafts high-quality content tailored to your needs.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Download & Use",
    description: "Export your AI-generated content and start using it immediately!",
    icon: CheckCircle2,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#020817] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          How It <span className="text-blue-500">Works</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Follow these steps to create AI-powered content effortlessly.
        </p>
      </div>

      <div className="mt-16 flex flex-col space-y-12 items-center">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              className="relative cursor-pointer w-full max-w-2xl p-8 bg-[#0F172A] rounded-3xl shadow-lg flex items-center space-x-6 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 bg-blue-500 p-4 rounded-full">
                <Icon className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
