import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const LogoCarousel = ({ logos }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.slideNext();
            }
        }, 0.1); // Change slide every 0.1 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="relative py-8 overflow-hidden">
            <div
                className="absolute inset-0 bg-[#d9cdf8]"
            ></div>
            <Swiper
                loop={true}
                ref={swiperRef}
                className="flex justify-center" // Center the swiper container
                speed={1600} // Transition speed in milliseconds
                grabCursor={true} // Change cursor to a grab icon
                breakpoints={{
                    // Define breakpoints for responsive behavior
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                    1536: {
                        slidesPerView: 7,
                    },
                }}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="h-36 mx-auto object-contain" // Increased logo size
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LogoCarousel;