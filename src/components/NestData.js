import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowUp, Users, Building } from 'lucide-react';

const DataDisplay = () => {
    const [monthsSinceLaunch, setMonthsSinceLaunch] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const launchDate = new Date(2024, 6, 18);
        const currentDate = new Date();
        const totalMonths = (currentDate.getFullYear() - launchDate.getFullYear()) * 12 +
            (currentDate.getMonth() - launchDate.getMonth());
        setMonthsSinceLaunch(totalMonths);
        controls.start("visible");
    }, [controls]);

    const data = [
        { label: 'Months Since Launch', value: monthsSinceLaunch, icon: ArrowUp },
        { label: 'NEST Members', value: 16, icon: Users },
        { label: 'NEST Partners', value: 6, icon: Building },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity }
        }
    };

    const countUpAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-black text-white p-8 rounded-lg shadow-lg">
            <motion.div
                className="flex flex-col md:flex-row justify-between items-center"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div
                    className="mb-8 md:mb-0 md:mr-8"
                    variants={itemVariants}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-center md:text-left text-white">
                        The Data
                    </h2>
                </motion.div>

                <div className="hidden md:block h-40 border-l-2 border-gray-400 mx-8"></div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                    variants={containerVariants}
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <p className="text-sm mb-4 text-center text-gray-300">{item.label}</p>
                            <motion.div
                                className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center relative"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                variants={pulseVariants}
                                animate="pulse"
                            >
                                <motion.span
                                    className="text-4xl font-bold"
                                    variants={countUpAnimation}
                                >
                                    {item.value}
                                </motion.span>
                                <motion.div
                                    className="absolute -top-2 -right-2 bg-white rounded-full p-2"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <item.icon size={24} className="text-purple-600" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DataDisplay;