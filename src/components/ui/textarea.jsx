import React from 'react';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            className={`px-3 py-2 w-full min-h-[80px] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${className}`}
            ref={ref}
            {...props}
        />
    );
});

Textarea.displayName = 'Textarea';

export { Textarea };