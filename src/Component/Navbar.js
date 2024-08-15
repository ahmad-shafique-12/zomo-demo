import React from "react";
import img2 from "../image/logo.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import img3 from "../image/p5.png";
import img4 from "../image/routing.svg";
import img5 from "../image/3d-rotate.svg";
import img6 from "../image/truck.svg";
import img7 from "../image/scooter.png";

import { GrLogout } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import { SidebarOpen, SidebarClose } from "../Redux/constant";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";
const Navbar = () => {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.Sidebar);

  const openSidebar = () => {
    dispatch({ type: SidebarOpen });
    console.log(SidebarOpen);
  };

  const closeSidebar = () => {
    dispatch({ type: SidebarClose });
    console.log(SidebarClose);
  };
  return (
    <>
      <div className="w-[100%] h-max bg pb-20">
        <img className="animation sm:block hidden " src={img7} alt="" />

        <Navbar1/>
        <div className="md:w-[500px] text-center   mt-5  m-auto w-[300px] ">
          <h1 className="text-center text-white text-[30px]">
            Listing Catagory
          </h1>
          <Link to={"/"}>
          <p className="cursor-pointer text-white font-medium mt-2 ">
            Home / <span>Restaurant Listing</span>
          </p>
          </Link>
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

export default Navbar;
