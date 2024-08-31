// Hero.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [showFullName, setShowFullName] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowFullName(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-10">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                    style={{ backgroundImage: "url('assets/nest_logo.webp')",
                        backgroundSize: "50% auto"   }}
                ></div>
                <div className="absolute inset-0"></div>
            </div>
            <Particles />



            {/* 主要内容 */}
            <div className="text-center text-white z-20 relative">
                <motion.h1
                    className="text-9xl font-bold mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    NEST
                </motion.h1>

                <AnimatePresence>
                    {showFullName && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                <motion.span className="inline-block mr-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>Network for</motion.span>
                                <motion.span className="inline-block mr-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Enriching Service</motion.span>
                                <motion.span className="inline-block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Transformation</motion.span>
                            </h2>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.p
                    className="text-xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    testimony
                </motion.p>
                <motion.a
                    href="#"
                    className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                >
                    Learn More
                </motion.a>
            </div>
        </section>
    );
};

// Particles 组件
const Particles = () => {
    return (
        <div className="absolute inset-0 z-0">
            {[...Array(50)].map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: Math.random(),
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: [Math.random(), Math.random()],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            ))}
        </div>
    );
};





export default Hero;
