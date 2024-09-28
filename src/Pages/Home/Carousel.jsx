import { useState, useEffect } from 'react';
import image1 from './Carouselmages/1.jpg';
import image2 from './Carouselmages/2.jpg';
import image3 from './Carouselmages/3.jpg';
import image4 from './Carouselmages/4.jpg';
import image5 from './Carouselmages/5.jpg';
import image6 from './Carouselmages/6.jpg';
import image7 from './Carouselmages/7.webp';
import image9 from './Carouselmages/9.webp';

const Carousel =() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image9
  ];
  useEffect(()=>{
    setIsFading(false)
  },[currentIndex])
  // Function to go to the next image
  const nextImage = () => {
    setIsFading(true); // Start the fade-out effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); 
       // The duration should match the CSS transition time
  };

  // Function to go to the previous image
  const prevImage = () => {
    setIsFading(true); // Start the fade-out effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsFading(false); // Reset the fade to show the new image
    }, 500); // The duration should match the CSS transition time
  };

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 7000); // 7 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentIndex]);

  return (
    <div className="relative h-[800px] overflow-hidden">
      {/* Image Display with Fade Effect */}
      <div className={`relative transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Dark overlay on top of the image */}
        <div className="absolute top-0 left-0 h-full bg-black bg-opacity-40 z-10"></div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-screen h-[800px] object-cover"
        />
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
