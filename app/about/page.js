// 
"use client";
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; // Adjust the import path as necessary

export default function About() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div 
      className={`relative h-screen bg-cover bg-center ${theme}`} // Apply the current theme class
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      {/* Conditional background overlay based on theme */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black opacity-50' : 'bg-white opacity-50'}`}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full"
      >
        <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>About Me</h1>
        <p className={`mt-4 text-center max-w-xl ${theme === 'dark' ? 'text-gray-300' : 'text-black'} font-greatVibes `}>
          I'm a passionate photographer based in Hyderabad, specializing in wedding, model, and candid photography. My focus is on capturing authentic and timeless images that tell a story.
          Whether it’s a special wedding moment or a stunning model shoot, I aim to deliver photos that resonate.
          Let’s connect and create something memorable together!
        </p>
      </motion.div>
    </div>
  );
}

