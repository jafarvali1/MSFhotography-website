// 
// "use client";
// import { motion } from 'framer-motion';
// import { useTheme } from '../../context/ThemeContext'; // Adjust the import path as necessary

// export default function About() {
//   const { theme } = useTheme(); // Get the current theme

//   return (
//     <div 
//       className={`relative h-screen bg-cover bg-center ${theme}`} // Apply the current theme class
//       style={{ backgroundImage: "url('/public/images/CameraLens.png.jpg')" }}
//     >
//       {/* Conditional background overlay based on theme */}
//       <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black opacity-50' : 'bg-white opacity-50'}`}></div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 flex flex-col items-center justify-center h-full"
//       >
//         <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>About Me</h1>
//         <p className={`mt-4 text-center max-w-xl ${theme === 'dark' ? 'text-gray-300' : 'text-black'} font-greatVibes `}>
//           I'm a passionate photographer based in Hyderabad, specializing in wedding, model, and candid photography. My focus is on capturing authentic and timeless images that tell a story.
//           Whether it’s a special wedding moment or a stunning model shoot, I aim to deliver photos that resonate.
//           Let’s connect and create something memorable together!
//         </p>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function About() {
  const { theme } = useTheme();

  const BackgroundWrapper = ({ children }) => {
    return (
      <div className={`bg-cover bg-no-repeat ${theme === 'dark' ? 'bg-[url(/images/DarkDslr.jpg)]' : 'bg-[url(/images/LightDslr.jpg)]'}`}>
        {children}
      </div>
    );
  };

  return (
    <BackgroundWrapper>
      <div className={`relative h-screen bg-cover bg-center ${theme}`}>
        {/* Conditional background overlay based on theme */}
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black opacity-50' : 'bg-white opacity-50'}`}></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-start justify-center h-full text-left p-8 pl-16" // Changed alignment and added padding-left
        >
          <h1 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>About Me</h1>
          <p className={`max-w-xl mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-black'} font-greatVibes`}>
            I'm a passionate photographer based in Hyderabad, specializing in wedding, model, and candid photography. My focus is on capturing authentic and timeless images that tell a story.
            Whether it’s a special wedding moment or a stunning model shoot, I aim to deliver photos that resonate.
            Let’s connect and create something memorable together!
          </p>
          <Link href="/contact">
            <button className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${theme === 'dark' ? 'bg-white text-black hover:bg-sky-800' : 'bg-gray-800 text-white hover:bg-sky-800'}`}>
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </BackgroundWrapper>
  );
}
