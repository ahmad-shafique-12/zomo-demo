import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../image/banner1.jpg';
import img2 from '../image/banner2.jpg';
import img3 from '../image/banner3.jpg';
import img4 from '../image/banner4.jpg';
import img5 from '../image/banner5.jpg';

function Responsive() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        <div className="slide">
          <img src={img1} alt=""/>
        </div>
        <div className="slide">
          <img src={img2} alt=""/>
        </div>
        <div className="slide">
          <img src={img3} alt=""/>
        </div>
        <div className="slide">
          <img src={img4} alt=""/>
        </div>
        <div className="slide">
          <img src={img5} alt=""/>
        </div>
        <div className="slide">
          <img src={img1} alt=""/>
        </div>
        <div className="slide">
          <img src={img2} alt=""/>
        </div>
        <div className="slide">
          <img src={img3} alt=""/>
        </div>
        <div className="slide">
          <img src={img4} alt=""/>
        </div>
        <div className="slide">
          <img src={img5} alt=""/>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
