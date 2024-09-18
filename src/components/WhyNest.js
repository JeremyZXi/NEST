import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyNestComponent = () => {
    const [hoveredTab, setHoveredTab] = useState(null);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, staggerChildren: 0.2 }
        }
    };

    const childVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    const tabs = [
        {
            title: '#Impact',
            color: '#6F45C9',
            content: [
                'Enhance the effectiveness of outcomes (e.g., cross-school fundraising events)',
                'Broaden influence and reach (cross-school, cross-city, cross-nation events, etc.)',
                'Reach wider (global) audience',
                '... ...'
            ]
        },
        {
            title: '#Opportunities',
            color: '#582FB0',
            content: [
                'Collaborate with NGOs recognized as authorities in their sectors',
                'Facilitate enriching collaborations with ease',
                '... ...'
            ]
        },
        {
            title: '#Networking',
            color: '#4A249D',
            content: [
                'Connect with individuals who share your professional interests',
                'Promote your ideas',
                'Learn from experienced professionals in specific fields',
                'Work with like-minded groups/individuals',
                '... ...'
            ]
        }
    ];

    return (
        <motion.div
            ref={ref}
            className="flex flex-col md:flex-row h-auto md:h-screen bg-black text-white p-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.div className="w-full md:w-1/4 pr-0 md:pr-4 mb-8 md:mb-0 flex flex-col justify-center" variants={childVariants}>
                <motion.h1 className="text-4xl font-bold mb-4" variants={childVariants}>Why NEST</motion.h1>
                <motion.h2 className="text-xl" variants={childVariants}>What you will gain from NEST</motion.h2>
            </motion.div>
            <motion.div className="w-full md:w-3/4 flex flex-col md:flex-row items-center" variants={childVariants}>
                {tabs.map((tab, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:flex-1 mx-0 md:mx-2 mb-4 md:mb-0 rounded-lg overflow-hidden cursor-pointer"
                        style={{ backgroundColor: tab.color, height: '500px' }}
                        whileHover={{ scale: 1.05 }}
                        onMouseEnter={() => setHoveredTab(index)}
                        onMouseLeave={() => setHoveredTab(null)}
                        variants={childVariants}
                    >
                        <div className="p-4 h-full flex flex-col">
                            <AnimatePresence mode="wait">
                                {hoveredTab === index ? (
                                    <motion.ul
                                        key="content"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-grow overflow-y-auto"
                                    >
                                        {tab.content.map((item, i) => (
                                            <li key={i} className="mb-2 text-sm">{item}</li>
                                        ))}
                                    </motion.ul>
                                ) : (
                                    <motion.h1
                                        key="title"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-3xl font-bold mb-2 flex items-center justify-center h-full"
                                    >
                                        {tab.title}
                                    </motion.h1>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default WhyNestComponent;
