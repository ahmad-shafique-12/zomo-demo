import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Component/Data";
import Header from "../Component/Header";
import { MdLocationOn, MdOutlineStar } from "react-icons/md";

const SearchData = () => {
  const { item } = useParams();
  const [Searchfoam, setfoam] = useState([]);

  if (!Searchfoam) {
      alert("Item not found")
    }
  console.log(item);
  // console.log(data);
  // console.log(item);

  useEffect(() => {
    // the Burger bar
    // the burger bar
    setfoam(
      data.filter((e, i) => e.name.toLowerCase().includes(item.toLowerCase()))
    );
  }, [Searchfoam]);

  console.log(Searchfoam);
  return (
    <>
      <Header />
      {
        Searchfoam && Searchfoam.length > 0 ?
        <div className=" lg:w-[90%] w-[80%] m-auto   mt-5   flex flex-wrap  gap-5">
      {Searchfoam.map((e, i) => {
        return <>
        
        <div className="lg:w-[23%] md:w-[31%] sm:w-[48%] shadow-md  mt-5  bg-white p-2 rounded-[10px]">
            
                <div className="w-full aa border flex items-center justify-center  rounded-[10px]">
                  <img className="rounded-[10px]" src={e.image} alt="" />
                </div>
             
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
        
        </>;
      })}
         </div>
         :
        <div className="text-center mt-10  text-3xl font-[600]">
            Item not found
        </div>
      }
    </>
  );
};

export default SearchData;
