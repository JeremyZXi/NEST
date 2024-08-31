import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const [logoSrc, setLogoSrc] = useState('assets/logo.webp');
    const [textColor, setTextColor] = useState('text-white');
    const [menuIconColor, setMenuIconColor] = useState('text-white');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isConnectOpen, setIsConnectOpen] = useState(false);
    const connectRef = useRef(null);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/feedback', label: 'Feedback' },
        {
            label: 'Connect',
            subItems: [
                { to: '/cat1', label: 'Placeholder1' },
                { to: '/cat2', label: 'Placeholder2' },

            ],
        },
    ];

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        const bannerHeight = 100;

        if (currentScrollY > bannerHeight) {
            const alpha = Math.min((currentScrollY - bannerHeight) / 100, 1);
            setNavbarBackground(`rgba(255, 255, 255, ${alpha})`);
            setLogoSrc('assets/logo.webp');
            setTextColor('text-gray-600');
            setMenuIconColor('text-gray-600');
        } else {
            setNavbarBackground('transparent');
            setLogoSrc('assets/logo.webp');
            setTextColor('text-white');
            setMenuIconColor('text-white');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (connectRef.current && !connectRef.current.contains(event.target)) {
                setIsConnectOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setLogoSrc('assets/logo.webp');
            setTextColor('text-white');
        } else {
            handleScroll();
        }
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    const toggleConnectDropdown = () => {
        setIsConnectOpen(!isConnectOpen);
    };

    const renderNavLink = (link, isMobile = false) => {
        const className = `hover:text-blue-200 ${isMobile ? 'text-white' : textColor}`;
        if (link.subItems) {
            return (
                <div key={link.label} className="relative group" ref={connectRef}>
                    <button
                        onClick={isMobile ? toggleConnectDropdown : undefined}
                        onMouseEnter={() => setIsConnectOpen(true)}
                        className={`${className} flex items-center`}
                    >
                        {link.label}
                        <ChevronDown size={16} className="ml-1" />
                    </button>
                    {((!isMobile && isConnectOpen) || (isMobile && isConnectOpen)) && (
                        <div
                            className={`${isMobile ? '' : 'absolute top-full left-0'} bg-white shadow-md rounded-md py-2`}
                            onMouseLeave={() => !isMobile && setIsConnectOpen(false)}
                        >
                            {link.subItems.map((subItem) => (
                                <Link
                                    key={subItem.label}
                                    to={subItem.to}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${isMobile ? 'text-base' : 'text-sm'}`}
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            );
        }
        if (link.external) {
            return (
                <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className={className}>
                    {link.label}
                </a>
            );
        }
        return (
            <Link key={link.label} to={link.to} className={className}>
                {link.label}
            </Link>
        );
    };

    return (
        <>
            <nav className="fixed w-full top-0 z-50 transition-colors duration-300" style={{ backgroundColor: navbarBackground }}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-4">
                            <Link to="/">
                                <img src={logoSrc} alt="Logo" className="h-8" />
                            </Link>
                        </div>
                        <button onClick={toggleMenu} className="md:hidden text-white">
                            {isMenuOpen ? <X size={24} className={menuIconColor} /> : <Menu size={24} className={menuIconColor} />}
                        </button>
                        <div className="hidden md:flex gap-4">
                            {navLinks.map(link => renderNavLink(link))}
                        </div>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <img src="assets/logo.webp" alt="Logo" className="h-8" />
                                <span className="text-2xl font-bold text-white">NEST</span>
                            </div>
                            <button onClick={toggleMenu} className="text-black">
                                <X size={24} className={menuIconColor} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-lg">
                            {navLinks.map(link => renderNavLink(link, true))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
