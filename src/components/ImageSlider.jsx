import React, { useState } from 'react';

function ImageSlider() {
  // List of real image URLs
  const images = [
    'https://source.unsplash.com/random/800x600?nature',
    'https://source.unsplash.com/random/800x600?water',
    'https://source.unsplash.com/random/800x600?forest',
    'https://source.unsplash.com/random/800x600?mountain',
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="text-center">
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full max-w-lg mx-auto rounded"
        />
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button onClick={prevImage} className="px-4 py-2 bg-blue-500 text-white rounded">
          Previous
        </button>
        <button onClick={nextImage} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
