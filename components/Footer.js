// // components/Footer.js
// const Footer = () => {
//     return (
//       <footer className="flex justify-between items-center p-4 bg-gray-800 text-gray-400 text-sm">
//         <div>MS Photography</div>
//         <div>&copy; 2024</div>
//       </footer>
//     );
//   };
  
// Footer.js
// components/Footer.js

import { useTheme } from '../context/ThemeContext'; // Import the theme context

const Footer = () => {
  const { theme } = useTheme(); // Access the current theme

  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className={`flex justify-between items-center p-4 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-700'} text-sm`}>
      <div className="font-dancing-script text-lg font-semibold">MS Fotography</div>
      <div>Copyright &copy; {currentYear} Malik</div>
    </footer>
  );
};

export default Footer;
