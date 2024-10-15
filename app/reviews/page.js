// import React from "react";
// import { StickyScrollRevealDemo } from './StickyScrollDemo';
// import ReviewCard from '../../components/ReviewCard';

// export default function Reviews() {
//   return (
//     <div className="p-8 h-screen bg-white dark:bg-gray-900"> {/* Updated background color */}
//       <h1 className="text-3xl font-bold font-serif text-center text-black dark:text-white">
//         Reviews
//       </h1>
//       {/* <ReviewCard /> */}
//       <StickyScrollRevealDemo />
//     </div>
//   );
// }

"use client";
import React from "react";
import { useTheme } from '../../context/ThemeContext'; // Import the theme context
import { StickyScrollRevealDemo } from './StickyScrollDemo';
import ReviewCard from '../../components/ReviewCard';

export default function Reviews() {
  const { theme } = useTheme(); // Get the current theme

  const BackgroundWrapper = ({ children }) => {
    return (
      <div className={`bg-cover bg-no-repeat ${theme === 'dark' ? 'bg-[url(/images/DarkDslr.jpg)]' : 'bg-[url(/images/LightDslr.jpg)]'}`}>
        {children}
      </div>
    );
  };

  return (
    <BackgroundWrapper> {/* Wrap main content in BackgroundWrapper */}
      <div className={`p-8 h-screen ${theme} relative bg-cover bg-center`}> {/* Apply the current theme */}
        <h1 className={`text-3xl font-bold font-serif text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Reviews
        </h1>

        <h5 className={`text-xl font-italic text-center mt-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Scroll Down for More Reviews
        </h5>

        {/* <ReviewCard /> */}
        <StickyScrollRevealDemo />
      </div>
    </BackgroundWrapper>
  );
}
