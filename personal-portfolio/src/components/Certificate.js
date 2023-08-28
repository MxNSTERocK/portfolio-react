import React, { useState } from 'react';

const Certificate = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setDirection('next');
    setTimeout(() => setDirection(null), 500); // Reset direction after animation
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setDirection('previous');
    setTimeout(() => setDirection(null), 500); // Reset direction after animation
  };

  return (
    <div className="carousel">
      <button className={`carousel-button carousel-button-previous ${direction === 'previous' ? 'previous' : ''}`} onClick={prevSlide}>
        <span className="carousel-button-symbol">◄</span>
      </button>
      <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className={`carousel-button carousel-button-next ${direction === 'next' ? 'next' : ''}`} onClick={nextSlide}>
        <span className="carousel-button-symbol">►</span>
      </button>
    </div>
  );
};

export default Certificate;
