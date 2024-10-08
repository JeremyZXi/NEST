import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import navLinks from "../data/navLinks";
import categoriesData from "../data/catData";

const ItemCard = ({ item }) => (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-black p-4 rounded-lg flex flex-col items-center"
    >
        <div className="mb-4 w-40 h-40 flex bg-white rounded-full items-center justify-center overflow-hidden">
            <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex-grow w-full">
            <h3 className="text-xl font-semibold text-white mb-2 text-center">{item.name}</h3>
            <p className="text-gray-300 mb-2 text-center">{item.email}</p>
            <div
                className="text-gray-400 mb-2 text-left"
                dangerouslySetInnerHTML={{ __html: item.description }}
            />
            {item.school && <p className="text-gray-400 text-left">School: {item.school}</p>}
        </div>
    </motion.div>
);

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

    if (!category) {
        return <div>Category not found</div>;
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