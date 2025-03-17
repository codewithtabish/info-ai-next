'use client';

import { useUserContext } from '@/provider/main-provider';
import React from 'react';
import { motion } from 'framer-motion';

const EmptyChatState = () => {
    const { assistant, setSelectedMessage } = useUserContext();
    const questions = assistant?.sampleQuestions || [];

    const handleQuestionClick = (question: string) => {
        setSelectedMessage(question); // Store the selected question in the provider
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="md:py-12 md:max-w-[80%] mx-auto text-center"
        >
            <motion.h3 
                className="text-2xl font-semibold text-gray-200 mb-4"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                How can I help you?
            </motion.h3>

            {/* Grid Layout */}
            <motion.div 
                className={`mt-4 grid gap-3 ${questions.length > 1 ? 'grid-cols-2 md:grid-cols-3' : 'flex justify-center'}`}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                {questions.map((question, index) => (
                    <motion.p 
                        key={index} 
                        className={`text-gray-400 text-sm bg-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 cursor-pointer transition ${
                            index === questions.length - 1 ? 'col-span-full text-center mx-auto' : ''
                        }`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleQuestionClick(question)}
                    >
                        {question}
                    </motion.p>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default EmptyChatState;
