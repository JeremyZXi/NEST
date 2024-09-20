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
            title: 'Impact',
            color: '#6F45C9',
            content: [
                'Enhance the effectiveness of outcomes.',
                'Broaden influence and reach cross-school, cross-city, cross-nation events, etc.',
                'Reach wider/global audience'
            ]
        },
        {
            title: 'Opportunities',
            color: '#582FB0',
            content: [
                'Collaborate with NGOs recognized as authorities in their sectors',
                'Facilitate enriching collaborations with ease'
            ]
        },
        {
            title: 'Networking',
            color: '#4A249D',
            content: [
                'Connect with individuals who share your professional interests',
                'Promote your ideas',
                'Learn from experienced professionals in specific fields',
                'Work with like-minded groups/individuals'
            ]
        }
    ];

    return (
        <motion.div
            ref={ref}
            className="flex items-center min-h-screen bg-black text-white p-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.div className="w-full flex flex-col md:flex-row items-center" variants={childVariants}>
                <div className="w-full md:w-1/4 pr-0 md:pr-4 mb-8 md:mb-0">
                    <motion.h1 className="text-7xl font-bold leading-none mb-6" variants={childVariants}>
                        Why<br />NEST
                    </motion.h1>
                    <motion.h2 className="text-2xl leading-tight" variants={childVariants}>
                        What you will<br />gain from NEST
                    </motion.h2>
                </div>
                <div className="w-full md:w-3/4 flex flex-col md:flex-row items-stretch">
                    {tabs.map((tab, index) => (
                        <motion.div
                            key={index}
                            className="w-full md:w-1/3 mx-2 mb-4 md:mb-0 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
                            style={{ backgroundColor: tab.color, height: '500px' }}
                            whileHover={{ scale: 1.05 }}
                            onMouseEnter={() => setHoveredTab(index)}
                            onMouseLeave={() => setHoveredTab(null)}
                            variants={childVariants}
                        >
                            <div className="p-6 w-full h-full flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    {hoveredTab === index ? (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col justify-center space-y-6"
                                        >
                                            {tab.content.map((item, i) => (
                                                <div key={i} className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                                                        <span className="text-l font-bold">{String(i + 1).padStart(2, '0')}</span>
                                                    </div>
                                                    <p className="text-l">{item}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="title"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex items-center justify-center"
                                        >
                                            <div className="w-44 h-44 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                                                <h1 className="text-2xl font-bold">{tab.title}</h1>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WhyNestComponent;