'use client';
import Gallery from '@/app/gallery/page';
import { useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function MultiImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-64 bg-center bg-cover rounded-lg shadow-lg">
      <div
        className="w-full h-full bg-center bg-cover rounded-lg transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md text-gray-800 hover:bg-gray-200"
        onClick={prevImage}
      >
        <MdArrowBackIos size={20} />
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md text-gray-800 hover:bg-gray-200"
        onClick={nextImage}
      >
        <MdArrowForwardIos size={20} />
      </button>
    </div>
  );
}
export default Gallery