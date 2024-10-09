// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
            <Link
                to="/"
                className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;