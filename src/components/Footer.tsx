"use client";

import Link from "next/link";
import Image from "next/image";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

const Footer = () => {
    return ( 
        <footer id="footer" className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full bg-gray-300 text-gray-900">
            
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-8">

                {/* LEFT SIDE */}
                <div className="md:max-w-96">

                    {/* Logo */}
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <a href="#" className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="Bobby logo"
                                width={36}
                                height={36}
                                className="rounded-md"
                            />
                            <div>
                                <div className="text-sm font-semibold text-purple-700">Bobby</div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                                    Developer
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-5 text-xl">
                        <a 
                            href="https://linkedin.com/in/ogbonna-chigozie-paschal-b30849370"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FiLinkedin />
                        </a>

                        <a 
                            href="https://github.com/bobby291/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition"
                        >
                            <FiGithub />
                        </a>

                        <a 
                            href="https://instagram.com/bobpaschaldev1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition"
                        >
                            <FiInstagram />
                        </a>
                    </div>

                    <p className="mt-6 text-sm">
                        Software / AI / Developer
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 flex items-start md:justify-end gap-20">

                    {/* Company Links */}
                    <div>
                        <h2 className="font-bold uppercase mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><Link href='#about'>About</Link></li>
                            <li><Link href='#projects'>Projects</Link></li>
                            <li><Link href='#FAQ'>FAQ</Link></li>
                        </ul>

                        {/* Mobile Contact */}
                        <div className="lg:hidden md:block mt-6">
                            <h2 className="font-bold uppercase mb-3 text-gray-800">Get in touch</h2>
                            <div className="text-sm font-semibold space-y-2">
                                <p>+234 816 358 6476</p>
                                <p>ogbonnachigozie270@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Contact */}
                    <div className="hidden lg:block">
                        <h2 className="font-bold uppercase mb-5 text-gray-800">Get in touch</h2>
                        <div className="text-sm font-semibold space-y-2">
                            <p>+234-906-483-3829</p>
                            <p>ogbonnachigozie270@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <p className="pt-5 text-center text-xs md:text-sm pb-6">
                Copyright {new Date().getFullYear()} © Bobby Developer. All Rights Reserved.
            </p>

        </footer>
     );
}

export default Footer;