import React from 'react';

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
    return (
        <input
            type={type}
            className={`px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
            ref={ref}
            {...props}
        />
    );
});

Input.displayName = 'Input';

export { Input };