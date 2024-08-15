import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import data from "./Data";
import { Link, useParams } from "react-router-dom";

const PopluarItem = () => {
  const [filterdata, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(data.filter((e, i) => e.list === "category"));
  }, []);
  console.log(filterdata);

  return (
    <>
      <div className="w-[100%] mt-20 m-auto product ">
        <div className=" w-[90%] m-auto mt-10  flex items-center justify-between ">
          <div className=" w-max">
            <div className="bg-[#F9F9F9] w-[100px] h-1 relative">
              <div className="bg-[#F07552] w-[40px] h-1 absolute line"></div>
            </div>
            <h1 className="text-[32px] font-medium bold">
              Popular Restaurants
            </h1>
            <p className="text-[20px] font-medium text-[#C9C9C9]">
              Find nearby popular Restaurants.
            </p>
          </div>
        </div>
        <div className=" lg:w-[90%] w-[80%] m-auto   mt-5   flex flex-wrap justify-between">
          {filterdata.map((e, i) => {
            return (<>
              <div className="lg:w-[23%] md:w-[31%] sm:w-[48%]  mt-5  bg-white p-2 rounded-[10px]">
              <Link  to={`/catagory/${e.url}`}>
                <div className="w-full aa  rounded-[10px]">
                  <img className="rounded-[10px]" src={e.image} alt="" />
                </div>
              </Link>
                <div className="flex justify-between mt-2">
                  <p className="text[14px] cursor-pointer  font-bold">{e.name}</p>
                  <p className="flex items-center gap-2 mt-2 ">
                    {" "}
                    <MdOutlineStar className="text-[#277D2A]" />{" "}
                    <span>{e.rating}</span>
                  </p>
                </div>
                <p className="text-[#BBBBBB] cursor-pointer">{e.description}</p>
                <div className="border-t mt-2 flex items-center p-1 gap-2">
                  <p className="text-[#F17951]">
                    <MdLocationOn />
                  </p>
                  <p className="text-[16px] font-medium cursor-pointer">{e.city}</p>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopluarItem;
