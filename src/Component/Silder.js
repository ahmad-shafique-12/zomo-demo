import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./Data";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const NextArrow = ({ onClick }) => {
  return (
    <p
      onClick={onClick}
      className="text-[40px] absolute right-0 sm:bottom-[200px] bottom-[275px] cursor-pointer rounded-full shadow-lg w-max"
    >
      <IoIosArrowDropright />
    </p>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <p
      onClick={onClick}
      className="text-[40px] absolute right-10  sm:bottom-[200px] bottom-[275px] cursor-pointer rounded-full shadow-lg w-max"
    >
      <IoIosArrowDropleft />
    </p>
  );
};

function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container   w-full h-max">
      <Slider {...settings}>
        {data.map((e, i) => (
          <div key={i} className="slide-item w-[150px] h-[150px]  p-2">
            <Link to={`/catagory/${e.url}`}>
            <div className=" categy border   bg-[#F9F9F9] rounded-sm flex hover:bg-[#FEF8F0] hover:border-[#FDDECE] flex-col items-center justify-center w-full h-full p-4">
              <img className="w-[70px]" src={e.image} alt={e.name} />
              <p className="text-[20px] font-medium ">{e.name}</p>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
