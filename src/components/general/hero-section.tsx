import React from "react";
import { BadgeDollarSign, Briefcase, Globe, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex h-screen items-center justify-center  px-6">
      <div className="text-center">
        {/* Hero Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
          <span className="block">Create amazing</span>
          <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
            podcast show notes
          </span>
          <div className="mt-2">
            10X faster{" "}
            <span className="relative mt-3 whitespace-nowrap text-blue-600">
              <span className="relative">with AI tools.</span>
            </span>
          </div>
        </h1>

        {/* Hero Subtitle */}
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500 dark:text-slate-400">
          Example is the AI Content Generator that helps you break through
          creative blocks to create amazing, original content 10X faster.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-lg font-medium text-white transition hover:bg-blue-700"
          >
            Get started for free 🚀
          </a>
        </div>

        {/* Trusted by Companies */}
        {/* <div className="mt-10"> */}
          {/* <p className="text-gray-600 dark:text-gray-400 text-sm uppercase">
            Trusted by top companies
          </p> */}
          {/* <div className="mt-4 flex justify-center gap-4">
            <BadgeDollarSign className="w-7 h-7 text-gray-500 cursor-pointer dark:text-gray-400" />
            <Briefcase className="w-7 h-7 text-gray-500 dark:text-gray-400 cursor-pointer" />
            <Globe className="w-7 h-7 text-gray-500 dark:text-gray-400 cursor-pointer" />
            <Rocket className="w-7 h-7 text-gray-500 dark:text-gray-400 cursor-pointer" />
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
