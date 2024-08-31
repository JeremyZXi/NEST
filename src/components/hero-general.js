// Hero.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroGeneral = ({ title, subtitle }) => {
    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSubtitle(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const titleVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.03
            }
        }
    };

    const letterVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    const subtitleVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.02
            }
        }
    };

    const backgroundVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 0.5,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };
    const AnimatedText = ({ text, variants }) => (
        <>
            {text.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {word.split('').map((char, charIndex) => (
                        <motion.span key={`${wordIndex}-${charIndex}`} variants={letterVariants} style={{display: 'inline-block'}}>
                            {char}
                        </motion.span>
                    ))}
                    {wordIndex !== text.split(' ').length - 1 && " "}
                </span>
            ))}
        </>
    );

    return (
        <motion.section
            className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background */}
            <motion.div
                className="absolute inset-0 z-10"
                variants={backgroundVariants}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('assets/nest_logo.webp')", backgroundSize: "50% auto" }}
                ></div>
            </motion.div>

            {/* Main content */}
            <div className="text-center text-white z-20 relative">
                <motion.h1
                    className="text-9xl font-bold mb-4"
                    variants={titleVariants}
                >
                    <AnimatedText text={title} variants={letterVariants} />
                </motion.h1>

                <AnimatePresence>
                    {showSubtitle && (
                        <motion.div
                            variants={subtitleVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                <AnimatedText text={subtitle} variants={letterVariants} />
                            </h2>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default HeroGeneral;
