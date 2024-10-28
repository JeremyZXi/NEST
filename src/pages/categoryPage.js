import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import navLinks from "../data/navLinks";
import categoriesData from "../data/catData";

const ItemCard = ({ item }) => {
    const [showPopup, setShowPopup] = useState(false);

    const copyToClipboard = (email) => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setShowPopup(true); // Show popup on successful copy
                setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    if (!item) {
        return null; // Early return if item is undefined
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black p-4 rounded-lg flex flex-col items-center relative"
        >
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-[#8C6BD4] text-white p-4 rounded shadow-lg">
                        Email copied to clipboard!
                    </div>
                </div>
            )}
            <div className="mb-4 w-40 h-40 flex bg-white rounded-full items-center justify-center overflow-hidden relative">
                {item.logo ? (
                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white">
                        <img
                            src="/assets/white.png" // Specify your white background image path
                            alt="No Logo"
                            className="absolute w-full h-full object-cover"
                        />
                        <span className="text-black font-bold text-center z-10">{item.name || 'No Name'}</span>
                    </div>
                )}
            </div>
            <div className="flex-grow w-full">
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{item.name || 'No Name'}</h3>
                {item.email && (
                    <p
                        className="text-gray-300 text-center cursor-pointer" //the email text place
                        onClick={() => copyToClipboard(item.email)} // Clickable if email exists
                    >
                        Email: {item.email}
                    </p>
                )}
                <div
                    className="text-[#9ECBFF] mb-2 text-center"
                    dangerouslySetInnerHTML={{ __html: item.description || '' }} // Fallback for description
                />
                {item.school && <p className="text-[#ffffff] text-left">School: {item.school}</p>}
            </div>
        </motion.div>
    );
};


const SubcategorySection = ({ subcategory }) => (
    <div className="mb-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">{subcategory.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategory.items.map((item, index) => (
                <ItemCard key={index} item={item} />
            ))}
        </div>
    </div>
);

const CategoryPage = () => {
    const { categoryId } = useParams();
    const category = categoriesData.find(cat => cat.id === categoryId);

    // If category does not exist, redirect to NotFound
    if (!category) {
        return <Navigate to="/not-found" />; // Adjust to match your NotFound route
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar links={navLinks} />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-12 text-center text-white">NEST Partners</h1>
                {category.subcategories.map((subcategory, index) => (
                    <SubcategorySection key={index} subcategory={subcategory} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default CategoryPage;