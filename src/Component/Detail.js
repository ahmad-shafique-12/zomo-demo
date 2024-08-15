import React from "react";
import img1 from "../image/service-phone.png";

import img2 from '../image/app-store.svg'
import img3 from '../image/google-play.svg'
const Detail = () => {
  return (
    <>
      <div className="bga w-full  flex items-center justify-around">
        <div className="w-[400px] lg:block hidden  ">
          <img src={img1} alt="" />
        </div>
        <div className="lg:w-[50%] w-[90%]  flex flex-col ">
          <h1 className="text-[30px] font-[700] text-[white]">ZOMO App : Online & Mobile Ordering</h1>
          <p className="text-[19px] font-medium text-[white]">Get the app for free and place takeout orders online whenever you want.</p>
          <div className="flex gap-5 mt-5">
          <img className="w-[130px]" src={img2} alt=""/>
          <img className="w-[130px]" src={img3} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
