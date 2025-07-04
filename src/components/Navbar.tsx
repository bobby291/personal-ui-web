'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full font-bold px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Logo */}
      <div className='flex items-center gap-1 cursor-pointer'>
        <div className='w-4 h-4 bg-blue-800 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
        <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
            <h3 className='font-bold'>Bob <span className='text-red-700'>Dev</span></h3>
      </div>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
        <li><Link href="/" className="hover:text-gray-500/80 transition">Home</Link></li>
       {/* <li><Link href="/work" className="hover:text-gray-500/80 transition">Services</Link></li> */} 
       <li><Link href="/contact" className="hover:text-gray-500/80 transition">Contact</Link></li>
        <li><a href="/My Resume.pdf" className="hover:text-gray-500/80 transition">Resume</a></li>
        {/* <li><Link href="/about" className="hover:text-gray-500/80 transition">About Me</Link></li> */}
      </ul>

      {/* Desktop Button */}
      <button type="button" className="bg-amber-500 text-white border border-none md:inline hidden text-sm hover:bg-yellow-600 hover:text-white active:scale-95 transition-all w-40 h-11 rounded-full">
        Get started
      </button>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-toggle"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-block md:hidden active:scale-90 transition"
      >
        {isMenuOpen ? (
          // Close Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M3 7h24M3 14h24M3 21h24" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden z-10">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><Link href="/" className="text-sm">Home</Link></li>
            {/* <li><Link href="/work" className="hover:text-gray-500/80 transition">Services</Link></li> */}             
            <li><a href="/My Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm">Resume</a></li>
            <li><Link href="/contact" className="text-sm">Contact</Link></li>
            {/* <li><Link href="/about" className="text-sm">About Me</Link></li> */}
          </ul>

          <button type="button" className="bg-amber-500 text-white border border-none mt-6 text-sm hover:bg-yellow-600 hover:text-white active:scale-95 transition-all w-40 h-11 rounded-full">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;