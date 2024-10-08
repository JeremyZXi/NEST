import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    const socialLinks = [
        { name: '小红书', url: 'https://www.xiaohongshu.com/user/profile/5ccd5797000000001000aa34?channel_type=web_note_detail_r10&wechatWid=a966bdd7249f9668a84b8e33d5f21719&wechatOrigin=menu', icon: "assets/Xiaohongshu.svg" },
    ];

    const quickLinks = [
        { name: 'About Us', url: '/about' },

        { name: 'Feedback', url: '/feedback' },

    ];

    const relatedProjects = [
        { name: 'FinTeens', url: 'https://fin-teens.com/' },
    ];
    return (
        <footer className="bg-black text-white py-8 mt-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">NEST</h3>
                        <p className="text-sm">Version 1.0.3</p>
                        <div className="flex items-center space-x-2">
                            <a href="https://keycas.cn" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                                <p className="text-sm">Powered by KeyCAS</p>
                                <img src="assets/KeyCAS.svg" alt="KeyCAS Logo" className="h-4 w-auto"/>
                            </a>
                        </div>


                        <div className="flex mt-4 space-x-4">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                    <img src={link.icon} alt={link.name} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.url} className="hover:text-gray-300 text-sm">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Relevant links</h3>
                        <ul className="space-y-2">
                            {relatedProjects.map((project) => (
                                <li key={project.name}>
                                    <a href={project.url} className="hover:text-gray-300 text-sm">{project.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support Us</h3>
                            <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Contribute
                            </a>

                        </div>
                    </div>
                </div>



                        <div className="mt-8 pt-8 border-t border-gray-700">
                            <p className="text-sm text-center">
                                © 2023 NEST. All rights reserved.
                            </p>
                        </div>


            </div>
        </footer>
    );
};

export default Footer;
