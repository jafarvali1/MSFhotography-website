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
import { useTheme } from '../context/ThemeContext'; // Adjust path if necessary
import Image from 'next/image'; // Import Image component for optimization

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme

  return (
    <header className={`flex justify-between items-center p-4 shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="flex items-center space-x-2"> {/* Wrapper for logo and icon */}
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <span className={`font-dancing-script ${theme === 'dark' ? 'text-neon-blue-dark' : 'text-neon-blue'}`} >MS</span>&nbsp;Fotography
        </h1>
        {/* <Image 
          src="/images/CameraLens.png" // Use the actual path of your camera lens icon file
          alt="Camera Lens Icon"
          width={30} // Adjust the width as needed to match the font size
          height={30} // Adjust the height as needed to match the font size
        /> */}
      </div>
      <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu size={30} className={theme === 'dark' ? 'text-white cursor-pointer' : 'text-black cursor-pointer'} />
      </div>
      <ul className={`lg:flex lg:space-x-6 absolute lg:static ${theme === 'dark' ? ' text-white' : ' text-black'} w-full lg:w-auto transition-all duration-100 ${menuOpen ? 'top-16 left-0' : 'top-[-200px]'}`}>
        <li className="p-2 transition duration-100 group">
          <Link href="/" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Home
          </Link>
        </li>
        <li className="p-2 transition duration-100 group">
          <Link href="/about" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            About
          </Link>
        </li>
        <li className="p-2 transition duration-100 group">
          <Link href="/gallery" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Gallery
          </Link>
        </li>
        <li className="p-2 transition duration-100 group">
          <Link href="/reviews" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Reviews
          </Link>
        </li>
        <li className="p-2 transition duration-100 group">
          <Link href="/contact" className={`text-current transition-colors duration-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-gray-500 bg-clip-text ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Contact
          </Link>
        </li>
        {/* Theme Toggle Icons */}
        <li className="p-2">
          <button 
            onClick={toggleTheme} 
            className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} transition-all duration-100`}
          >
            {theme === 'light' ? (
              <MdDarkMode size={24} className="cursor-pointer" /> // Dark mode icon
            ) : (
              <MdLightMode size={24} className="cursor-pointer" /> // Light mode icon
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
