// components/ReviewCard.js
// const reviews = [
//     { image: '/path-to-reviewer-image1.jpg', text: 'Great photographer! Highly recommend.' },
//     { image: '/path-to-reviewer-image2.jpg', text: 'Amazing experience! Loved the photos.' },
//   ];
  
//   const ReviewCard = () => {
//     return (
//       <div>
//         {reviews.map((review, index) => (
//           <div key={index} className="flex items-center p-4 mb-4 border border-gray-600 rounded-lg bg-gray-800">
//             <img src={review.image} alt="Reviewer" className="w-12 h-12 rounded-full mr-4" />
//             <p>{review.text}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default ReviewCard;
  
// "use client";
// import { useState, useEffect } from "react";

// const reviews = [
//   { image: '/path-to-reviewer-image1.jpg', text: 'Great photographer! Highly recommend.' },
//   { image: '/path-to-reviewer-image2.jpg', text: 'Amazing experience! Loved the photos.' },
//   { image: '/path-to-reviewer-image3.jpg', text: 'Absolutely stunning work!' },
//   { image: '/path-to-reviewer-image4.jpg', text: 'Professional and talented!' },
//   { image: '/path-to-reviewer-image5.jpg', text: 'Will definitely hire again!' },
// ];

// const ReviewCard = () => {
//   const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
//   const [fadeOut, setFadeOut] = useState(false);

//   const nextReview = () => {
//     setFadeOut(true);
//     setTimeout(() => {
//       setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//       setFadeOut(false);
//     }, 300); // Duration of the fade-out animation
//   };

//   useEffect(() => {
//     const interval = setInterval(nextReview, 3000); // Change review every 3 seconds
//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, []);

//   return (
//     <div className="flex flex-col items-center">
//       <div className={`transition-transform duration-300 ${fadeOut ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"}`}>
//         <div className="flex items-center p-4 mb-4 border border-gray-600 rounded-lg bg-gray-800">
//           <img src={reviews[currentReviewIndex].image} alt="Reviewer" className="w-10 h-10 rounded-full mr-4" /> {/* Smaller image size */}
//           <p className="text-sm">{reviews[currentReviewIndex].text}</p> {/* Smaller text size */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;
"use client";
import React from "react";
import styles from './ReviewCard.module.css'; // Adjust the path to your CSS module

const reviews = [
  { image: '/path-to-reviewer-image1.jpg', text: 'Great photographer! Highly recommend.' },
  { image: '/path-to-reviewer-image2.jpg', text: 'Amazing experience! Loved the photos.' },
  { image: '/path-to-reviewer-image3.jpg', text: 'Absolutely stunning work!' },
  { image: '/path-to-reviewer-image4.jpg', text: 'Professional and talented!' },
  { image: '/path-to-reviewer-image5.jpg', text: 'Will definitely hire again!' },
];

const ReviewCard = () => {
  return (
    <div className="overflow-hidden relative w-full h-64 bg-gray-900 flex items-center justify-center">
      <div className={`flex ${styles.animateScroll}`} style={{ whiteSpace: 'nowrap' }}>
        {/* Duplicate reviews for the infinite scroll effect */}
        {reviews.concat(reviews).map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border border-gray-600 rounded-lg bg-gray-800 w-64 h-48 mx-4 shadow-lg"
          >
            <img src={review.image} alt="Reviewer" className="w-12 h-12 rounded-full mb-2" />
            <p className="text-sm text-center text-white">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
