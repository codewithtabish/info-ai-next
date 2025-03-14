'use client'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Johnson",
    title: "AI Researcher",
    feedback: "This AI tool has transformed the way we generate content. Absolutely amazing!",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    name: "Michael Smith",
    title: "Tech Startup Founder",
    feedback: "Super intuitive and efficient. Our workflow is 10x faster!",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    name: "Sophia Lee",
    title: "Data Scientist",
    feedback: "The best AI tool I've ever used. Highly recommend it!",
    image: "https://avatar.iran.liara.run/public/boy",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#020817] text-white relative overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600"
        >
          What People Are Saying
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Hear from our happy users who have transformed their workflow with AI.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-[#0a0f1f] border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
                  <div className="flex mt-4 text-yellow-400">
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

export default TestimonialsSection;
