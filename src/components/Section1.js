import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const importAll = (r) => r.keys().map(r);

const section1Images = importAll(require.context('../../public/assets/current', false, /\.(png|jpe?g|svg)$/));

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
                        Check out our current events!
                    </motion.p>
                    <motion.div
                        className="flex justify-center"
                        variants={buttonVariants}
                    >
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Explore
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
                        {section1Images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section1