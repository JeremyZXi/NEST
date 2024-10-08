import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import React from "react";

const importAll = (r) => r.keys().map(r);

const section2Images = importAll(require.context('../../public/assets/past', false, /\.(png|jpe?g|svg)$/));

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
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center space-x-4">
                <motion.div
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:pr-4"
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
                        {section2Images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <motion.div
                    className="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
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
                        Past Events
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
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section2;