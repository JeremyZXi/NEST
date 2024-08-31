import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from "../components/Navbar";
import HeroGeneral from "../components/hero-general";
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


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function About() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <HeroGeneral title="About Us" subtitle="NEST" />

            <Footer />
        </div>


    );
}
export default About;