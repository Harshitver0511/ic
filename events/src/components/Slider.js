import React, { useState, useEffect } from 'react';
import './Slider.css';
import img from './sell_bg.png';
import logo from '../logo.svg';

const images = [
  img,
  img,
  img,
];

const thumbnails = [
 logo,
  logo,
  logo,
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < images.length - 1 ? prevSlide + 1 : 0
    );
  };

  // Function to move to the previous slide
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : images.length - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay interval setup
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoplayInterval); // Clear the interval on component unmount or when dependencies change
  }, []); // Empty dependency array means this effect runs once when the component is mounted

  return (
    <div className="slider-container">
      <div className="slider">
        <button
          className="prev-button"
          onClick={goToPreviousSlide}
        >
          Prev
        </button>

        <div className="slides"
          style={{
            transform: `translateX(-${currentSlide * 609}px)`, // Ensure this aligns with the expected width
            transition: 'transform 0.5s ease-in-out', // Smooth transition
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{ flexShrink: 0, width: '600px', height: '400px' }} // Set fixed width and height
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ "width": '100%', "height": '100%', "object-fit": 'cover' }}
              />
            </div>
          ))}
        </div>

        <button
          className="next-button"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>

      <div className="thumbnails">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
