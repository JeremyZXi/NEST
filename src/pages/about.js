import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from "../components/Navbar";
import HeroGeneral from "../components/hero-general";
import Footer from "../components/Footer";
import SocialMediaContact from "../components/contact";
import timelineEvents from "../data/timelineEvents";
import ScollTop from "../components/ScollTop";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
//test merge





const SectionTitle = ({ title }) => (
    <motion.h2
        className="text-5xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {title}
    </motion.h2>
);

const MissionVision = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="py-24 bg-black relative overflow-hidden"
        >
            <Parallax y={[-20, 20]} tagOuter="div">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-white text-center max-w-3xl mx-auto">
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                            <p className="text-xl leading-relaxed">
                                To connect all student service leaders and foster easy collaboration and resource exchange.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                            <p className="text-xl leading-relaxed">
                                To become a leading network of high school service leadership in China/the world.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Parallax>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <img src="/assets/NEST_white.png" alt="N background" className="w-full h-full object-contain scale-150" />
            </div>
        </motion.section>
    );
};


const ExecutiveTeam = () => {
    const executives = [
        { name: "Allen Wang", position: "Keystone Academy",graduate: "Class of 2025",image: "/assets/exec/Allan.jpg", description: "description test" },
        { name: "Yolanda Wang", position: "Keystone Academy",graduate: "Class of 2025",image: "/assets/exec/Yolanda W.jpg", description: "description" },
        { name: "Christine Chen", position: "Keystone Academy",graduate: "Class of 2026",image: "assets/exec/Christine.jpg", description: "description" },
        { name: "Eva Jiang", position: "Keystone Academy",graduate: "Class of 2025",image: "/assets/exec/Eva.jpg", description: "description" },
        { name: "Yolanda Huang", position: "Beijing Huijia Private School",graduate: "Class of 2026",image: "/assets/exec/Yolanda H.png", description: "description" },
    ];

    const [selectedExec, setSelectedExec] = useState(null);

    return (
        <section className="py-24 bg-balck">
            <div className="container mx-auto px-4">
                <SectionTitle title="Executive Team" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {executives.map((exec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="bg-[#4A249D] p-8 rounded-xl shadow-xl text-center h-full flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedExec(exec)}
                        >
                            <div>
                                <img src={exec.image} alt={exec.name}
                                     className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"/>
                                <h3 className="text-2xl font-semibold text-white mb-2">{exec.name}</h3>
                                <p className="text-indigo-400 mb-0">{exec.position}</p>
                                <p className="text-indigo-400 mb-4">{exec.graduate}</p>
                            </div>
                            <p className="text-gray-300 mt-4">{exec.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedExec && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setSelectedExec(null)}
                    >
                        <motion.div
                            initial={{scale: 0.9}}
                            animate={{scale: 1}}
                            exit={{scale: 0.9}}
                            className="bg-[#4A249D] p-8 rounded-xl max-w-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedExec.image} alt={selectedExec.name}
                                 className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"/>
                            <h3 className="text-3xl font-semibold text-white mb-2">{selectedExec.name}</h3>
                            <p className="text-indigo-400 mb-1 text-xl">{selectedExec.position}</p>
                            <p className="text-indigo-400 mb-1 text-xl">{selectedExec.graduate}</p>
                            <p className="text-gray-300 text-l">{selectedExec.description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const TeamsHead = () => {
    const teamMembers = [
        {
            name: "Placeholder",
            school: "Placeholder",
            location: "Placeholder",
            classYear: "Placeholder"
        },
        {
            name: "Placeholder",
            school: "Placeholder",
            location: "Placeholder",
            classYear: "Placeholder"
        },
        {
            name: "Placeholder",
            school: "Placeholder",
            location: "Placeholder",
            classYear: "Placeholder"
        },
        {
            name: "Placeholder",
            school: "Placeholder",
            location: "Placeholder",
            classYear: "Placeholder"
        }
    ];
    /*const teamMembers = [
        {
            name: "Yolanda Wang",
            school: "Keystone",
            location: "Beijing",
            classYear: "Class of 2025"
        },
        {
            name: "Eva Jiang",
            school: "Keystone",
            location: "Beijing",
            classYear: "Class of 2025"
        },
        {
            name: "Yolanda Huang",
            school: "Huijia",
            location: "Beijing",
            classYear: "Class of 2026"
        },
        {
            name: "Christine Chen",
            school: "Keystone",
            location: "Beijing",
            classYear: "Class of 2026"
        }
    ];
*/
    return (
        <div className="bg-black text-white p-8 font-sans">
            <SectionTitle title="NEST official teams head" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-purple-600 rounded-full mr-4"></div>
                        <div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-sm">{member.school}, {member.location}</p>
                            <p className="text-sm">{member.classYear}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
function About() {
    return (
        <ParallaxProvider>
            <div className="min-h-screen bg-black text-white">
                <ScollTop />
                <Navbar />
                <HeroGeneral title="NEST" subtitle="is a network of service activists, leaders, and organizations across high schools in China/the world." />
                <MissionVision />
                <ExecutiveTeam />
                <TeamsHead />
                {/*<History />*/}
                <SocialMediaContact />
                <Footer />
            </div>
        </ParallaxProvider>
    );
}

export default About;
