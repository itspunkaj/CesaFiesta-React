/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './Carouselmages/1.jpg'
import image2 from './Carouselmages/2.jpg'
import image3 from './Carouselmages/3.jpg'
import image4 from './Carouselmages/4.jpg'
import image5 from './Carouselmages/5.jpg'

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
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider data-scroll-section className='h-3/5 w-[100%]' {...settings}>
      <CarouselItem imgSrc={image1}/>
      <CarouselItem imgSrc={image2}/>
      <CarouselItem imgSrc={image3}/>
      <CarouselItem imgSrc={image4}/>
      <CarouselItem imgSrc={image5}/>
    </Slider>
  );
};

export default Carousel;
