/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './Carouselmages/1.webp'
import image2 from './Carouselmages/2.webp'
import image3 from './Carouselmages/3.webp'
import image4 from './Carouselmages/4.webp'
import image5 from './Carouselmages/5.webp'
import image6 from './Carouselmages/6.webp'
import image7 from './Carouselmages/7.webp'
import image9 from './Carouselmages/9.webp'

const CarouselItem = (props) => {
  return (
    <div className='flex items-center justify-center'>
        <center><img className='h-auto max-h-[500px]'src={props.imgSrc} /></center>
    </div>
  )
}

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider data-scroll-section className='bg-gradient-to-r from-fourthColor via-thirdColor to-fourthColor h-3/5 w-[100%]' {...settings}>
      <CarouselItem imgSrc={image1}/>
      <CarouselItem imgSrc={image2}/>
      <CarouselItem imgSrc={image7}/>
      <CarouselItem imgSrc={image6}/>
      <CarouselItem imgSrc={image9}/>
      <CarouselItem imgSrc={image3}/>
      <CarouselItem imgSrc={image4}/>
      <CarouselItem imgSrc={image5}/>
      
      
    </Slider>
  );
};

export default Carousel;
