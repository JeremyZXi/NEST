import React, { createContext, useContext, useState } from 'react';

const SelectContext = createContext();

const Select = ({ children, onValueChange }) => {
    const [value, setValue] = useState(null);

    return (
        <SelectContext.Provider value={{ value, setValue, onValueChange }}>
            <div className="relative inline-block w-full">
                {children}
            </div>
        </SelectContext.Provider>
    );
};

const SelectTrigger = ({ children }) => {
    const { value } = useContext(SelectContext);
    return (
        <button className="w-full flex justify-between items-center px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            {value || children}
            <span className="ml-2">▼</span>
        </button>
    );
};

const SelectContent = ({ children }) => {
    return (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {children}
        </div>
    );
};

const SelectItem = ({ children, value }) => {
    const { setValue, onValueChange } = useContext(SelectContext);
    return (
        <div
            className="px-3 py-2 cursor-pointer hover:bg-blue-100"
            onClick={() => {
                setValue(children);
                onValueChange && onValueChange(value);
            }}
        >
            {children}
        </div>
    );
};

const SelectValue = ({ placeholder }) => {
    const { value } = useContext(SelectContext);
    return value || placeholder || 'Select an option';
};

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };