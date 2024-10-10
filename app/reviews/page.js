import React from "react"; // Make sure to import React
import { StickyScrollRevealDemo } from './StickyScrollDemo'; // Correct the import path
import ReviewCard from '../../components/ReviewCard';

export default function Reviews() {
  return (
    <div className="p-8 h-screen">
      <h1 className="text-3xl font-bold font-serif text-center ">Reviews</h1>
      {/* <ReviewCard /> */}
      <StickyScrollRevealDemo />
    </div>
  );
}
