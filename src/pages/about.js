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

const MemberSchools = () => {
    const schools = [
        { name: "School A", logo: "/path/to/logo-a.png", description: "A brief description of School A and its unique features." },
        { name: "School B", logo: "/path/to/logo-b.png", description: "School B's specialties and achievements in education." },
        { name: "School C", logo: "/path/to/logo-c.png", description: "School C's innovative approach to learning and student development." },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <SectionTitle title="Member Schools" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {schools.map((school, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg text-center flex flex-col items-center justify-between h-full transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <div>
                                <img src={school.logo} alt={school.name} className="w-32 h-32 object-contain mb-6" />
                                <h3 className="text-2xl font-semibold text-white mb-4">{school.name}</h3>
                            </div>
                            <p className="text-gray-300 mt-4">{school.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExecutiveTeam = () => {
    const executives = [
        { name: "John Doe", position: "CEO", image: "/path/to/john-doe.jpg", description: "Experienced leader in education with a passion for innovative learning methods." },
        { name: "Jane Smith", position: "COO", image: "/path/to/jane-smith.jpg", description: "Operations expert with 15 years experience in optimizing educational institutions." },
        { name: "Alex Johnson", position: "CTO", image: "/path/to/alex-johnson.jpg", description: "Tech visionary driving digital transformation in education." },
        { name: "Alex Johnson", position: "CTO", image: "/path/to/alex-johnson.jpg", description: "Tech visionary driving digital transformation in education." },
        { name: "Alex Johnson", position: "CTO", image: "/path/to/alex-johnson.jpg", description: "Tech visionary driving digital transformation in education." },
        { name: "Alex Johnson", position: "CTO", image: "/path/to/alex-johnson.jpg", description: "Tech visionary driving digital transformation in education." },
        { name: "Alex Johnson", position: "CTO", image: "/path/to/alex-johnson.jpg", description: "Tech visionary driving digital transformation in education." },
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
                                <img src={exec.image} alt={exec.name} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg" />
                                <h3 className="text-2xl font-semibold text-white mb-2">{exec.name}</h3>
                                <p className="text-indigo-400 mb-4">{exec.position}</p>
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
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-gray-800 p-8 rounded-xl max-w-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedExec.image} alt={selectedExec.name} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg" />
                            <h3 className="text-3xl font-semibold text-white mb-2">{selectedExec.name}</h3>
                            <p className="text-indigo-400 mb-4 text-xl">{selectedExec.position}</p>
                            <p className="text-gray-300 text-lg">{selectedExec.description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const History = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <SectionTitle title="Our Journey" />
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-500 transform -translate-x-1/2"></div>
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.8 }}
                            className="mb-20 relative"
                        >
                            <div className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                    <motion.div
                                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-3xl font-bold text-indigo-400 mb-3">{event.year}</h3>
                                        <h4 className="text-2xl font-semibold text-white mb-4">{event.event}</h4>
                                        <p className="text-gray-300 text-lg">{event.description}</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-indigo-500 shadow transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-6 h-6 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
const TeamsHead = () => {
    const teamMembers = [
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

    return (
        <div className="bg-black text-white p-8 font-sans">
            <SectionTitle title="Executive Team" />
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
                <MemberSchools />
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
