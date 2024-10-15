// "use client";;
// import Image from "next/image";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";

// export const Card = React.memo(({
//   card,
//   index,
//   hovered,
//   setHovered
// }) => (
//   <div
//     onMouseEnter={() => setHovered(index)}
//     onMouseLeave={() => setHovered(null)}
//     className={cn(
//       "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//       hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//     )}>
//     <Image
//       src={card.src}
//       alt={card.title}
//       fill
//       className="object-cover absolute inset-0" />
//     <div
//       className={cn(
//         "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
//         hovered === index ? "opacity-100" : "opacity-0"
//       )}>
//       <div
//         className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
//         {card.title}
//       </div>
//     </div>
//   </div>
// ));

// Card.displayName = "Card";

// export function FocusCards({
//   cards
// }) {
//   const [hovered, setHovered] = useState(null);

//   return (
//     (<div
//       className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
//       {cards.map((card, index) => (
//         <Card
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered} />
//       ))}
//     </div>)
//   );
// }

// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";

// // Card Component with Multi-Image Carousel Support
// export const Card = React.memo(({ card, index, hovered, setHovered }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Navigate to the next image
//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Navigate to the previous image
//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//       )}
//     >
//       {/* Carousel Images */}
//       <div className="relative h-full w-full">
//         <div
//           className="absolute inset-0 transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${currentImageIndex * 100}%)`,
//           }}
//         >
//           {card.images.map((image, idx) => (
//             <Image
//               key={idx}
//               src={image}
//               alt={`${card.title} image ${idx + 1}`}
//               fill
//               className="object-cover absolute inset-0 transition-opacity duration-500"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Navigation Controls */}
//       {card.images.length > 1 && (
//         <>
//           <button
//             onClick={handlePrevImage}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 focus:outline-none"
//           >
//             ◀
//           </button>
//           <button
//             onClick={handleNextImage}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 focus:outline-none"
//           >
//             ▶
//           </button>
//         </>
//       )}

//       {/* Overlay Title */}
//       <div
//         className={cn(
//           "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
//           hovered === index ? "opacity-100" : "opacity-0"
//         )}
//       >
//         <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
//           {card.title}
//         </div>
//       </div>
//     </div>
//   );
// });

// Card.displayName = "Card";

// // FocusCards Component Rendering Multiple Cards with Carousels
// export function FocusCards({ cards }) {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
//       {cards.map((card, index) => (
//         <Card
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered}
//         />
//       ))}
//     </div>
//   );
// }



// 

// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { cn } from "@/lib/utils";

// export const Card = React.memo(({
//   card,
//   index,
//   hovered,
//   setHovered
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to move to the next image
//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length); // Wrap around to the first image
//   };

//   // Automatically change image every 2 seconds
//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 2000); // Change image every 2 seconds
//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [card.images.length]);

//   return (
//     <div
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//       )}>
      
//       <div className="relative w-full h-full transition-transform duration-500" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
//         {card.images.map((src, imgIndex) => (
//           <Image
//             key={imgIndex}
//             src={src}
//             alt={card.title}
//             fill
//             className="object-cover absolute inset-0 transition-opacity duration-500"
//             style={{ opacity: imgIndex === currentImageIndex ? 1 : 0 }} // Only show the current image
//           />
//         ))}
//       </div>
      
//       <div
//         className={cn(
//           "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
//           hovered === index ? "opacity-100" : "opacity-0"
//         )}>
//         <div
//           className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
//           {card.title}
//         </div>
//       </div>

//       {/* Transparent Arrow Navigation Buttons */}
//       <button 
//         onClick={() => setCurrentImageIndex((currentImageIndex - 1 + card.images.length) % card.images.length)} 
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:bg-black/50 transition duration-300">
//         {/* Left Arrow Icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button 
//         onClick={nextImage} 
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:bg-black/50 transition duration-300">
//         {/* Right Arrow Icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// });

// Card.displayName = "Card";

// export function FocusCards({
//   cards
// }) {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
//       {cards.map((card, index) => (
//         <Card
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered} />
//       ))}
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length); // Wrap around to the first image
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + card.images.length) % card.images.length); // Wrap around to the last image
  };

  // Automatically change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [card.images.length]);

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {/* Carousel items */}
        {card.images.map((src, imgIndex) => (
          <div
            key={imgIndex}
            className={cn("absolute w-full h-full transition-opacity duration-1000 ease-in-out", {
              "opacity-100": imgIndex === currentImageIndex,
              "opacity-0": imgIndex !== currentImageIndex,
            })}
          >
            <Image
              src={src}
              alt={card.title}
              fill
              className="object-cover absolute inset-0"
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={prevImage}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={nextImage}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
