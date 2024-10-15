import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

export default function LogoCarousel({ logos }) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [containerWidth, setContainerWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        if (containerRef.current && contentRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            setContentWidth(contentRef.current.offsetWidth);
        }
    }, [logos]);

    useEffect(() => {
        if (inView && containerWidth && contentWidth) {
            const factor = 7; // Adjust this factor to make the carousel faster
            controls.start({
                x: [0, -(contentWidth * factor)],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 80, // Keep the duration the same
                        ease: "linear"
                    }
                }
            });
        } else {
            controls.stop();
        }
    }, [inView, containerWidth, contentWidth, controls]);

    return (
        <div
            ref={ref}
            className="py-24 overflow-hidden bg-gradient-to-b from-transparent via-white/40 via-white/70 via-white/90 to-transparent"
            aria-label="Partner logos carousel"
        >
            <div ref={containerRef} className="container mx-auto px-4 overflow-hidden">
                <motion.div
                    ref={contentRef}
                    className="flex items-center"
                    animate={controls}
                    style={{ x: containerWidth }}
                >
                    {logos.concat(logos).map((logo, index) => (
                        <div key={index} className="flex-shrink-0 mx-8">
                            <img
                                src={logo}
                                alt={`Partner logo ${index % logos.length + 1}`}
                                className="h-16 sm:h-24 md:h-32 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

LogoCarousel.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};