// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-center bg-black relative"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/assets/nest_logo.webp)', // Ensure this path is correct
                    backgroundSize: '50%', // 20% smaller
                    opacity: 0.5, // Lower the opacity (use a value between 0 and 1)
                    backgroundRepeat: 'no-repeat',
                    //zIndex: -1, // Keep it behind the text and button
                }}
            />
            <h1 className="text-8xl font-bold text-white mb-2 relative">404</h1>
            <h1 className="text-6xl font-bold text-white mb-4 relative">Page Not Found</h1>
            <p className="text-gray-300 mb-8 relative">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="bg-[#7729BE] text-white py-2 px-4 rounded hover:bg-[#482c8e] transition duration-300 relative z-10" // Added z-10 to bring the button to the front
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;