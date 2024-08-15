import React, { useEffect, useState } from "react";
import img2 from "../image/logo.svg";


import img4 from "../image/routing.svg";
import img5 from "../image/3d-rotate.svg";
import img6 from "../image/truck.svg";
import img7 from "../image/scooter.png";


import { RxCross1 } from "react-icons/rx";

import { SidebarOpen, SidebarClose } from "../Redux/constant";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { Add_To_Cart } from "../Redux/constant";
import { INCREMENT_ITEM_action, DECREMENT_ITEM_action } from "../Redux/action";
import Navbar1 from "./Navbar1";
import data from "./Data";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { sidebar } = useSelector((state) => state.Sidebar);
  const { cart } = useSelector((state) => state.Cart);
  const [quantity, setquantity] = useState(1);
  console.log(cart);

  const openSidebar = () => {
    dispatch({ type: SidebarOpen });
    console.log(SidebarOpen);
  };

  const closeSidebar = () => {
    dispatch({ type: SidebarClose });
    console.log(SidebarClose);
  };
  const handleIncrement = (e) => {
    dispatch(INCREMENT_ITEM_action(e));
    console.log("Incrementing quantity");
  };

  const handleDeIncrement = (e) => {
    dispatch(DECREMENT_ITEM_action(e));
    console.log(e);
    // console.log("Incrementing quantity");
  };
   

  const [inputValue, setValue]=useState("")
  const GetValue=(e)=>{
    setValue(e.target.value)
    
  }   
  const SentValue = (e) => {
    if (inputValue !== "") {
        navigate(`/searhitem/${inputValue}`);
    } else {
       
        alert("Please enter a value.");
    }
}
  return (
    
    <>
      <div className="w-[100%] h-max bg pb-20 ">
        <img className="animation sm:block hidden " src={img7} alt="" />
<Navbar1/>
        <div className="md:w-[500px]  mt-5  m-auto w-[300px] ">
          <h1 className="txt ">Zomo</h1>
          <h1 className="text-[27px]  text-white font-normal text-center">
            Discover restaurants that deliver near you
          </h1>
        </div>

        <div className=" w-max flex gap-2 m-auto mt-5">
          <div className=" w-max flex items-center gap-1 px-1 text-white outline-none border-none border-black rounded-[30px]  bg-[#463F3A]">
            <p className="text-[25px] text-[#F07552]">
              <IoSearchSharp />
            </p>
            <input value={inputValue} onChange={GetValue}
              className=" lg:w-[450px] md:w-[400px] sm:w-[200px] w-[170px]  rounded-[30px] p-2 bg-transparent"
              placeholder="Search for Restaurant "
            />
          </div>
          
          <button onClick={SentValue} className="btn2 p-2 md:px-10 px-5 ">Search</button>
          
        </div>

        <div className=" lg:w-max  md:w-max w-[450px]  sm:flex hidden flex-wrap justify-center  m-auto gap-5 mt-5">
          <div className="w-[200px] p-3 rounded-[10px] flex items-center justify-evenly bg-[#463F3A]">
            <img src={img4} alt="" />
            <p className="text-[white] text-[16px] font-medium">Wide Map</p>
          </div>
          <div className="w-[200px] p-3 rounded-[10px] flex items-center justify-evenly bg-[#463F3A]">
            <img src={img5} alt="" />
            <p className="text-[white] text-[16px] font-medium">
              Easiest Order
            </p>
          </div>
          <div className="w-[200px] p-3 rounded-[10px] flex items-center justify-evenly bg-[#463F3A]">
            <img src={img6} alt="" />
            <p className="text-[white] text-[16px] font-medium">
              Most Delivery
            </p>
          </div>
        </div>
      </div>

      {/* <>////////////////////////////////////////////////</> */}
      <div
        className={`w-[250px] h-[100vh]  top-0 ${sidebar} fixed overflow-scroll bg-[white] duration-300`}
      >
        <div className="flex items-center justify-between p-4 bt-2 ">
          <p>Menu </p>
          <p className="cursor-pointer" onClick={closeSidebar}>
            <RxCross1 />
          </p>
        </div>

        <div className="h-screen">
          <div className=" flex-col rounded-tr-2xl rounded-br-2xl  ">
            <ul className=" flex flex-col ">
              <li className="relative transition">
                <input className="peer hidden" type="checkbox" id="menu-1" />
                <div className="relative m-0  h- flex items-center rounded-xl px-5  py-0  text-sm ">
                  Home
                  <label
                    for="menu-1"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-0 mr-5 ml-auto h-4 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </li>

              <li className="relative transition   mt-0 ">
                <input className="peer hidden" type="checkbox" id="menu-2" />
                <div className="relative mt-2 flex items-center rounded-xl px-5    py-0  text-sm ">
                  Order
                  <label
                    for="menu-2"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-2 mr-5 ml-auto h-4 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-96 m-1 flex max-h-0 flex-col h-max  overflow-hidden rounded-2xl  transition-all duration-300">
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm  ">
                    <span className="mr-5"></span>
                    Menu List
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Menu grid
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Address
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Checkout
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Comfirm Order
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Offers
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm ">
                    <span className="mr-5"></span>
                    Order Tracking
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm ">
                    <span className="mr-5"></span>
                    Payment
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm ">
                    <span className="mr-5"></span>
                    Restaurant listing
                  </li>
                </ul>
              </li>

              <li className="relative transition  mt-0 ">
                <input className="peer hidden" type="checkbox" id="menu-3" />
                <div className="relative mt-2 flex items-center rounded-xl px-5    py-0  text-sm ">
                  Blog
                  <label
                    for="menu-3"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-2 mr-5 ml-auto h-4 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-96 m-1 flex max-h-0 flex-col h-max  overflow-hidden rounded-2xl  transition-all duration-300">
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm  ">
                    <span className="mr-5"></span>
                    Grid Left Sidebar
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Grid Right Sidebar
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Blog Listing
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Blog Details
                  </li>
                </ul>
              </li>

              <li className="relative transition mt-0 ">
                <input className="peer hidden" type="checkbox" id="menu-4" />
                <div className="relative mt-2 flex items-center rounded-xl px-5    py-0  text-sm ">
                  Page
                  <label
                    for="menu-4"
                    className="absolute inset-0 h-full w-full cursor-pointer"
                  ></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="peer-checked:rotate-180 absolute right-0 top-2 mr-5 ml-auto h-4 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="duration-400 peer-checked:max-h-96 m-1 flex max-h-0 flex-col h-max  overflow-hidden rounded-2xl  transition-all duration-300">
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm  ">
                    <span className="mr-5"></span>
                    404
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Coming Soon
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Contact
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Empty Cart
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    FAQS
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    OTP
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Sign In
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Sign Up
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Testimonial
                  </li>
                  <li className="m-0 flex cursor-pointer rounded-xl py-1 pl-5 text-sm">
                    <span className="mr-5"></span>
                    Wishlist
                  </li>
                </ul>
              </li>

              <p className="px-5  mt-2 cursor-pointer">Contact </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
