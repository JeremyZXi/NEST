import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import categoriesData from '../data/catData';

const LogoCarousel = () => {
    const swiperRef = useRef(null);
    const logos = [];

    // Extract logos and names from categoriesData
    categoriesData.forEach(category => {
        category.subcategories.forEach(subcategory => {
            subcategory.items.forEach(item => {
                logos.push({
                    logo: item.logo || '', // Use empty string if logo is not available
                    name: item.name || `Logo ${logos.length + 1}` // Fallback name if not available
                });
            });
        });
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.slideNext();
            }
        }, 100); // Change slide every 0.1 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="relative py-8 overflow-hidden">
            <div className="bg-[#000000] py-4 relative"> {/* Background color */}
                <div className="absolute top-0 left-0 right-0 border-t-2 border-gray-400"></div> {/* Top horizontal line */}
                <div className="absolute bottom-0 left-0 right-0 border-b-2 border-gray-400"></div> {/* Bottom horizontal line */}

                <Swiper
                    loop={true}
                    ref={swiperRef}
                    className="flex justify-center" // Center the swiper container
                    speed={1600} // Transition speed in milliseconds
                    grabCursor={true} // Change cursor to a grab icon
                    breakpoints={{
                        // Define breakpoints for responsive behavior
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                        1536: { slidesPerView: 7 },
                    }}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            {logo.logo ? (
                                <img
                                    src={logo.logo}
                                    alt={`Logo ${index + 1}`}
                                    className="h-36 mx-auto object-contain" // Increased logo size
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevents infinite loop
                                        e.target.src = ''; // Clear the image source
                                    }}
                                />
                            ) : (
                                <div className="flex items-center h-full text-center">
                                    <div className="border-l-2 border-white h-8 mr-2"></div> {/* Reduced height of vertical line */}
                                    <span className="text-2xl text-white flex items-center" style={{ lineHeight: '2' }}>{logo.name}</span> {/* Adjusted line height */}
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default LogoCarousel;