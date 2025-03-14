'use client';
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#020817] md:max-w-5xl mx-auto mt-16 text-gray-300 py-10 relative overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <Image src="/logo-two.png" alt="Talha Tabish Logo" className=" h-auto mb-3"
          width={300} height={240} />
          {/* <h2 className="text-2xl font-bold text-white">Talha Tabish</h2> */}
          <p className="mt-2 text-gray-400">
            Building cutting-edge AI-powered applications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#models" className="hover:text-white transition">AI Models</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" className="hover:text-white transition"><Facebook size={24} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={24} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-white transition"><Github size={24} /></a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Talha Tabish. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;