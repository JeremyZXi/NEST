import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

export default function LogoCarousel({ logos }) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [duplicatedLogos, setDuplicatedLogos] = useState([]);

    useEffect(() => {
        // Duplicate the logo array to ensure seamless looping
        setDuplicatedLogos([...logos, ...logos]);
    }, [logos]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 }
        }
    };

    const carouselVariants = {
        animate: {
            x: [0, -50 + '%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                }
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            className="py-12 overflow-hidden bg-gradient-to-b from-transparent via-white/60 to-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex"
                    variants={carouselVariants}
                    animate="animate"
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <img
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                className="h-32 w-auto object-contain mx-8"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

LogoCarousel.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};