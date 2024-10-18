// components/Header.js
// "use client";
// import Link from 'next/link';
// import { useState } from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center p-4 bg-gray-800">
//       <h1 className="text-2xl font-bold text-neon-blue">MS Fotography</h1>
//       <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//         <AiOutlineMenu size={30} className="text-white cursor-pointer" />
//       </div>
//       <ul className={`lg:flex lg:space-x-6 absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto transition-all duration-100 ${menuOpen ? 'top-16 left-0' : 'top-[-200px]'}`}>
//         <li className="p-2 text-white"><Link href="/">Home</Link></li>
//         <li className="p-2 text-white"><Link href="/about">About</Link></li>
//         <li className="p-2 text-white"><Link href="/gallery">Gallery</Link></li>
//         <li className="p-2 text-white"><Link href="/reviews">Reviews</Link></li>
//         <li className="p-2 text-white"><Link href="/contact">Contact</Link></li>
//       </ul>
//     </header>
//   );
// };

// export default Header;


'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`flex justify-between items-center p-4 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-black' : 'bg-gray-200 text-black'}`}>
      <div className="flex items-center space-x-2">
        <Link href="/">
          <h1 className={`text-2xl font-bold`}>
            <span className={`font-dancing-script ${theme === 'dark' ? 'text-neon-blue-dark' : 'text-neon-blue'}`}>MS</span>&nbsp;
            <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Fotography</span> {/* Conditional color */}
          </h1>
        </Link>
      </div>
      <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu size={30} className={`${theme === 'dark' ? 'text-white cursor-pointer' : 'text-black cursor-pointer'}`} />
      </div>
      <ul className={`lg:flex lg:space-x-6 absolute lg:static ${theme === 'dark' ? 'text-white' : 'text-black'} w-full lg:w-auto transition-all duration-100 ${menuOpen ? 'top-16 left-0' : 'top-[-200px]'}`}>
        <li className="p-2 transition duration-100 group header-link font-semibold">
          <Link href="/" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text`}>
            Home
          </Link>
        </li>
        <li className="p-2 transition duration-100 group header-link font-semibold">
          <Link href="/about" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text`}>
            About
          </Link>
        </li>
        <li className="p-2 transition duration-100 group header-link font-semibold">
          <Link href="/gallery" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text`}>
            Gallery
          </Link>
        </li>
        <li className="p-2 transition duration-100 group header-link font-semibold">
          <Link href="/reviews" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text`}>
            Reviews
          </Link>
        </li>
        <li className="p-2 transition duration-100 group header-link font-semibold">
          <Link href="/contact" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text`}>
            Contact
          </Link>
        </li>
        <li className="p-2">
          <button 
            onClick={toggleTheme} 
            className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} transition-all duration-100`}
          >
            {theme === 'light' ? (
              <MdDarkMode size={24} className="cursor-pointer" />
            ) : (
              <MdLightMode size={24} className="cursor-pointer" />
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

