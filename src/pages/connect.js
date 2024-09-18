import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScollTop from "../components/ScollTop";

import clubData from "../data/clubData";

const ClubCategory = ({ category, clubs, isOpen, toggleCategory }) => {
    return (
        <div className="mb-8">
            <button
                className="w-full text-left bg-gray-800 p-4 rounded-lg font-semibold text-white flex justify-between items-center"
                onClick={() => toggleCategory(category)}
            >
                {category}
                <span>{isOpen ? '▲' : '▼'}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {clubs.map((club, index) => (
                            <Club key={index} {...club} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Club = ({ name, description, contact }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-gray-700 p-4 rounded-lg mt-2"
        >
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-gray-300 mt-2">{description}</p>
            <p className="text-gray-400 mt-2">Contact: {contact}</p>
        </motion.div>
    );
};

const WorkWithOthers = () => {
    const [openCategories, setOpenCategories] = useState({});

    const toggleCategory = (category) => {
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    return (
        <div className="min-h-screen bg-black">
            <ScollTop />
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">Work with Others</h1>
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">Club Categories</h2>
                    {clubData.map((categoryData, index) => (
                        <ClubCategory
                            key={index}
                            category={categoryData.category}
                            clubs={categoryData.clubs}
                            isOpen={openCategories[categoryData.category]}
                            toggleCategory={toggleCategory}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default WorkWithOthers;