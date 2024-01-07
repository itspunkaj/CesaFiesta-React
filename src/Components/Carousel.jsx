/* eslint-disable react/prop-types */
// src/components/Carousel.js
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import items from '../Images/Carouselmages/ImageData';
import image1 from '../Images/Carouselmages/Ropar1.jpeg'
import image2 from '../Images/Carouselmages/Ropar2.jpeg'
import image3 from '../Images/Carouselmages/Ropar3.jpeg'
import image4 from '../Images/Carouselmages/Ropar4.jpeg'

const CarouselItem = (props) => {
  return (
    <div>
        <center><img className='h-96 'src={props.imgSrc} /></center>
    </div>
  )
}


const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider data-scroll-section className='h-96 w-[100%] bg-gradient-to-r from-firstColor to-secondColor' {...settings}>
      <CarouselItem imgSrc={image1}/>
      <CarouselItem imgSrc={image2}/>
      <CarouselItem imgSrc={image3}/>
      <CarouselItem imgSrc={image4}/>
    </Slider>
  );
};

export default Carousel;
