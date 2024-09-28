import { useState, useEffect } from 'react';
import image1 from './Carouselmages/1.webp';
import image2 from './Carouselmages/2.webp';
import image3 from './Carouselmages/3.webp';
import image4 from './Carouselmages/4.webp';
import image5 from './Carouselmages/5.webp';
import image6 from './Carouselmages/6.webp';
import image7 from './Carouselmages/7.webp';
import image9 from './Carouselmages/9.webp';
import LazyLoad from 'react-lazyload';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [image1, image2, image3, image4, image5, image6, image7, image9];

  // Preload the next image
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    preloadImage(images[nextIndex]); // Preload the next image
  }, [currentIndex]);

  const changeImage = (newIndex) => {
    setIsTransitioning(true); // Start the transition (fade-out current image)
    setTimeout(() => {
      setCurrentIndex(newIndex); // After fading out, change the image
      setIsTransitioning(false); // Immediately start fading in the new image
    }, 1000); // This timing matches the transition CSS duration
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(newIndex);
  };

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 7000); // 7 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative h-[800px] overflow-hidden">
      {/* Two layers: the current image and the new image */}
      <div className="relative">
        {/* Active Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <LazyLoad height={800} offset={100} once>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="w-screen h-[800px] object-cover"
            />
          </LazyLoad>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
