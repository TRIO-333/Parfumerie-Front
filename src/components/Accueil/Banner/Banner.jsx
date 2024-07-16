import React, { useState, useEffect } from 'react';
import './Banner.css';

// Utilisez des URLs d'images en ligne temporaires pour tester le slider
const images = [
  'https://via.placeholder.com/1200x400?text=Image+1',
  'https://via.placeholder.com/1200x400?text=Image+2',
  'https://via.placeholder.com/1200x400?text=Image+3'
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {index === currentIndex && (
              <div className="slide-content">
                <h2>Parfum</h2>
                <p>Le parfum est bien plus qu'une fragrance !</p>
                <button>Découvrir</button>
                <span>LiVanLux loves</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
