import React, { useEffect, useState } from 'react';
import { motion, useAnimation,AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Footer from "../components/Footer";
import SocialMediaContact from "../components/contact";

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import WhyNestComponent from "../components/WhyNest";
import DataDisplay from "../components/NestData";
const SectionTest = () => {
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

    return (
        <motion.section
            ref={ref}
            className="text-white body-font bg-black"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="container px-5 py-24 mx-auto">
                <motion.div
                    className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"
                    variants={childVariants}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block w-8 h-8 text-gray-400 mb-8"
                        viewBox="0 0 975.036 975.036"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1, transition: { duration: 0.5 } }
                        }}
                    >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </motion.svg>
                    <motion.p
                        className="leading-relaxed text-4xl"
                        variants={childVariants}
                    >
                        We connect all student service leaders and foster easy collaboration and resource exchange.
                    </motion.p>
                    <motion.span
                        className="inline-block h-1 w-24 rounded bg-white mt-8 mb-6"
                        variants={{
                            hidden: { width: 0 },
                            visible: { width: 96, transition: { duration: 0.8 } }
                        }}
                    ></motion.span>
                    <motion.h2
                        className="text-gray-900 font-medium title-font tracking-wider text-sm"
                        variants={childVariants}
                    >
                    </motion.h2>
                    <motion.a
                        className="mt-3 text-white inline-flex items-center cursor-pointer"
                        variants={childVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/about"
                    >
                        Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};




const Landing = () => {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Hero />
            <SectionTest />
            <WhyNestComponent />
            <Section1 />
            <Section2 />
            <DataDisplay />
            <SocialMediaContact />
            <Footer />
        </div>
    );
};

export default Landing;
