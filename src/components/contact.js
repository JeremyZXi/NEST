import React from 'react';
import { useInView } from "react-intersection-observer";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const XiaohongshuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="currentColor" className="w-8 h-8">
        <g transform="translate(0, 0) scale(1.25,1.25)">
            <path d="M29,0.33332825 C13.959937,3.4666748 1.5356731,15.204498 0,31 -1.586103,47.314209 0,64.597672 0,81 v102 c0,18.76035 -4.7369685,44.19888 7.3333335,60 C20.372129,260.06897 44.156731,256 63,256 h111 35 c5.78276,0 12.33244,0.84741 18,-0.33333 15.0401,-3.13336 27.46432,-14.87115 29,-30.66667 1.58612,-16.31419 0,-33.59769 0,-50 V73 C256,54.239685 260.73697,28.801102 248.66667,13 235.62787,-4.0689697 211.84329,0 193,0 H82 47 C41.217228,0 34.667561,-0.84741211 29,0.33332825 M120,91 l-7,19 h12 l-10,24 9,1 c-0.98794,2.68155 -2.31718,7.73317 -4.33334,9.83334 C118.18945,146.3721 115.92654,146 114,146 c-4.35942,0 -13.16798,1.80539 -15.5,-3 -1.069664,-2.20416 0.465553,-4.98451 1.333336,-7 1.813624,-4.21228 4.222554,-8.51549 5.166664,-13 -2.17548,0 -4.92464,0.42967 -7,-0.33333 -7.778526,-2.85974 0.874031,-15.36435 2.66666,-19.66667 1.25875,-3.020981 2.75652,-9.584732 5.5,-11.5 C110.01874,88.810822 115.88325,90.674988 120,91 m-79,63 c2.750713,0 6.837379,0.81721 8.5,-2 1.769028,-2.99753 0.5,-9.58963 0.5,-13 V106 C50,102.90659 48.438198,93.464493 51.166668,91.5 53.41069,89.884308 62.832935,90.226166 63.833332,93 65.47065,97.539825 64,105.16241 64,110 v32 c0,5.48389 0.949112,11.8645 -1.333332,17 -2.177158,4.89861 -12.303417,9.27243 -17.333336,5.5 C43.120155,162.84012 41.545292,156.59013 41,154 M193,91 v5 c3.72887,0 8.4108,-0.763367 12,0.333328 11.97635,3.659424 11,15.422502 11,25.666672 1.99706,0 4.04419,-0.15562 6,0.33333 11.49335,2.87334 10,14.36401 10,23.66667 0,4.95615 0.93086,10.82184 -2.33333,15 -3.59567,4.60246 -9.48195,4 -14.66667,4 -1.6116,0 -4.26318,0.51051 -5.66667,-0.5 -2.62326,-1.88875 -3.78159,-7.50485 -4.33333,-10.5 3.28711,0 9.2179,1.12517 11.83333,-1.33334 C219.9164,149.76859 218.65411,138.43454 215,136.5 c-1.93661,-1.02527 -4.88672,-0.5 -7,-0.5 h-15 v29 h-14 v-29 h-14 v-14 h14 v-12 h-9 V96 h9 v-5 h14 m-32,5 v14 h-8 v42 h13 v13 H120 L125.33334,152.5 138,152 v-42 h-8 V96 h31 m57,14 c0,-2.84204 -0.51608,-6.25871 0.33333,-9 3.34434,-10.793121 19.61577,-2.093994 11.5,6.83333 -0.92279,1.01507 -2.54419,1.51106 -3.83333,1.83334 C223.43948,110.30679 220.61993,110 218,110 M41,110 36.833332,147 30,159 24,143 27,110 h14 m46,0 3,33 -6,15 h-2 c-5.366936,-8.49765 -6.053299,-17.26251 -7,-27 -0.672195,-6.91406 -2,-14.04004 -2,-21 h14 m106,0 v12 h9 v-12 h-9 m-75,42 -5,13 H91 L96.333336,151.5 104,151.66666 Z" />
        </g>
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
        { icon: faEnvelope, text: 'Email', info: 'nest.executives@outlook.com' },
        { icon: faPhone, text: 'Phone', info: '+1 (123) 456-7890' },
    ];

    const socialLinks = [
        { icon: faInstagram, text: 'Instagram', link: 'https://instagram.com/yourprofile', info: 'NEST' },
        { icon: 'xiaohongshu', text: 'Xiaohongshu', link: 'https://www.xiaohongshu.com/user/profile/5ccd5797000000001000aa34?channel_type=web_note_detail_r10&wechatWid=a966bdd7249f9668a84b8e33d5f21719&wechatOrigin=menu', info: 'NEST' }
    ];

    const renderContactInfo = (contact, index) => (
        <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg h-full"
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
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
        >
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-indigo-500">
                {social.icon === 'xiaohongshu' ? (
                    <XiaohongshuIcon />
                ) : (
                    <FontAwesomeIcon icon={social.icon} className="text-4xl" />
                )}
            </div>
            <p className="text-lg font-medium text-center">{social.text}</p>
            <p className="text-sm text-center">{social.info}</p>
        </motion.a>
    );

    const totalLinks = socialLinks.length;
    const gridCols = totalLinks <= 5 ? totalLinks : 5;

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
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                    variants={containerVariants}
                >
                    {contactInfo.map((contact, index) => renderContactInfo(contact, index))}
                </motion.div>

                {/* Social Links Row */}
                <motion.div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols} gap-6`}
                    variants={containerVariants}
                >
                    {socialLinks.map((social, index) => (
                        <motion.div key={index} className="h-full" variants={itemVariants}>
                            {renderSocialLink(social, index)}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SocialMediaContact;