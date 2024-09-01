import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Footer from "../components/Footer";

import { motion, useAnimation} from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faFax
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Landing() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Hero />
            <SectionTest />
            <Section1 />
            <Section2 />
            <SocialMediaContact />
            <Footer />
        </div>


    );
}

const Section1 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, transition: { duration: 1 } }
    };

    const textVariants = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
        hidden: { y: 50, opacity: 0, transition: { duration: 0.8 } }
    };

    const buttonVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } }
    };

    const imageVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
        hidden: { opacity: 0, x: 50, transition: { duration: 0.8 } }
    };

    return (
        <motion.section
            ref={ref}
            className="text-white body-font bg-black"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <motion.div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    variants={textVariants}
                >
                    <motion.h1
                        className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
                        variants={textVariants}
                    >
                        Current Events
                        <br className="hidden lg:inline-block" />
                    </motion.h1>
                    <motion.p
                        className="mb-8 leading-relaxed"
                        variants={textVariants}
                    >
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </motion.p>
                    <motion.div
                        className="flex justify-center"
                        variants={buttonVariants}
                    >
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Button
                        </button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                    variants={imageVariants}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src="https://dummyimage.com/720x600/000/fff&text=Slide+1" alt="Slide 1" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dummyimage.com/720x600/000/fff&text=Slide+2" alt="Slide 2" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dummyimage.com/720x600/000/fff&text=Slide+3" alt="Slide 3" className="w-full h-auto" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    );
};

const Section2 = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            ref={ref}
            className="text-white body-font bg-black"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <motion.div
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                    variants={leftVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src="https://dummyimage.com/720x600/000/fff&text=Slide+1" alt="Slide 1" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dummyimage.com/720x600/000/fff&text=Slide+2" alt="Slide 2" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dummyimage.com/720x600/000/fff&text=Slide+3" alt="Slide 3" className="w-full h-auto" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
                <motion.div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    variants={rightVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Before they sold out
                        <br className="hidden lg:inline-block" />
                        readymade gluten
                    </motion.h1>
                    <motion.p
                        className="mb-8 leading-relaxed"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </motion.p>
                    <motion.div
                        className="flex justify-center"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Button
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};


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

// 自定义小红书图标组件
const XiaohongshuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        {/* 请用您实际的小红书SVG路径替换这里 */}
        <path d="M10.0002 5.10557H14.0002V18.1056H10.0002V5.10557Z" />
        <path d="M3.00024 9.10557H7.00024V18.1056H3.00024V9.10557Z" />
        <path d="M17.0002 13.1056H21.0002V18.1056H17.0002V13.1056Z" />
    </svg>
);

const SocialMediaContact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const contactInfo = [
        { icon: faEnvelope, text: 'Email', info: 'contact@example.com' },
        { icon: faPhone, text: 'Phone', info: '+1 (123) 456-7890' },
        { icon: faFax, text: 'Fax', info: '+1 (123) 456-7891' }
    ];

    const socialLinks = [
        { icon: faFacebook, text: 'Facebook', link: 'https://facebook.com/yourpage', info: 'username' },
        { icon: faTwitter, text: 'Twitter', link: 'https://twitter.com/yourhandle', info: 'username' },
        { icon: faInstagram, text: 'Instagram', link: 'https://instagram.com/yourprofile', info: 'username' },
        { icon: faLinkedin, text: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile', info: 'username' },
        { icon: 'xiaohongshu', text: 'Xiaohongshu', link: 'https://xiaohongshu.com/yourprofile', info: 'username' }
    ];

    const renderContactInfo = (contact, index) => (
        <motion.div
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg"
            variants={itemVariants}
        >
            <FontAwesomeIcon icon={contact.icon} className="text-4xl mb-4 text-indigo-500" />
            <p className="text-lg font-medium">{contact.text}</p>
            <p className="text-sm">{contact.info}</p>
        </motion.div>
    );

    const renderSocialLink = (social, index) => (
        <motion.a
            href={social.link}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
        >
            {social.icon === 'xiaohongshu' ? (
                <XiaohongshuIcon />
            ) : (
                <FontAwesomeIcon icon={social.icon} className="text-4xl mb-4 text-indigo-500" />
            )}
            <p className="text-lg font-medium text-center">{social.text}</p>
            <p className="text-sm text-center">{social.info}</p>
        </motion.a>
    );

    return (
        <motion.section
            ref={ref}
            className="text-white body-font bg-black py-24"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="container px-5 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Contact Us</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Get in touch with us through various channels. We're always here to help!
                    </p>
                </div>

                {/* Contact Info Row */}
                <motion.div
                    className="flex flex-wrap -m-4 mb-12"
                    variants={containerVariants}
                >
                    {contactInfo.map((contact, index) => (
                        <motion.div key={index} className="p-4 md:w-1/3 w-full" variants={itemVariants}>
                            {renderContactInfo(contact, index)}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Social Links Row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-5 gap-6"
                    variants={containerVariants}
                >
                    {socialLinks.map((social, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            {renderSocialLink(social, index)}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};


export default Landing;