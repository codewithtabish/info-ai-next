"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import aiAnimation from "../../../public/lottie.json"; // Ensure the path is correct
import { motion, useScroll, useTransform } from "framer-motion";

const ShowcaseAI = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 1"] });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* Background Parallax Effect */}
      <motion.div 
        style={{ opacity, y: translateY }} 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020817] opacity-50"
      />

      {/* Section Content */}
      <motion.div 
        style={{ opacity, y: translateY }} 
        className="relative flex flex-col items-center text-center"
      >
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
          AI Model in Action
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mb-8">
          Experience the power of AI! Watch our model generate real-time insights and predictions.
        </p>

        {/* AI Animation */}
        <div className="w-[500px] h-[500px]">
          <Lottie animationData={aiAnimation} loop={true} />
        </div>

        {/* Interactive Demo Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Try Live Demo 🚀
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ShowcaseAI;
