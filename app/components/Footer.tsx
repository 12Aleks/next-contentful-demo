import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-emerald-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <ul className="text-5xl font-light">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">

                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-5xl font-light">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                    <div>
                    </div>
                </div>
                <div className="px-4 py-6 bg-neutral-secondary-soft md:flex md:items-center md:justify-between
                border-t border-t-emerald-100">
                    <span className="text-xl font-thin sm:text-center">All Rights Reserved to Oleksii Koba © {year}.</span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">
                       ####
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;