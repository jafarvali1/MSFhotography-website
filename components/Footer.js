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
import { useTheme } from '../context/ThemeContext'; // Import the theme context

const Footer = () => {
  const { theme } = useTheme(); // Access the current theme

  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className={`flex justify-between items-center p-4 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-700'} text-sm`}> {/* Added shadow-md for upper shadow and kept existing theme-based colors */}
      <div className="font-dancing-script text-lg">MS Photography</div> {/* Apply the calligraphy font */}
      <div>Copyright &copy; {currentYear} Malik</div> {/* Display the current year */}
    </footer>
  );
};

export default Footer;
