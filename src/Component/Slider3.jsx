import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../image/brand1 (2).png';
import img2 from '../image/brand2 (2).png';
import img3 from '../image/brand4 (2).png';
import img4 from '../image/brand5.png';
import img5 from '../image/brand6.png';
import img6 from '../image/brand7.png';
import img7 from '../image/brand8.png';
import img8 from '../image/brand9.png';

function Responsive1() {
  var settings = {
    
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
        <div className="slider-item">
          <img src={img1} alt="" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={img2} alt="" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={img3} alt="" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={img4} alt="" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={img5} alt="" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={img6} alt="" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={img7} alt="" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={img8} alt="" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive1;
