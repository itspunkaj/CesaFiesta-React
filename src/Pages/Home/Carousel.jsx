/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './Carouselmages/Ropar1.jpeg'
import image2 from './Carouselmages/Ropar2.jpeg'
import image3 from './Carouselmages/Ropar3.jpeg'
import image4 from './Carouselmages/Ropar4.jpeg'

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
    <Slider data-scroll-section className='h-96 w-[100%]' {...settings}>
      <CarouselItem imgSrc={image1}/>
      <CarouselItem imgSrc={image2}/>
      <CarouselItem imgSrc={image3}/>
      <CarouselItem imgSrc={image4}/>
    </Slider>
  );
};

export default Carousel;
