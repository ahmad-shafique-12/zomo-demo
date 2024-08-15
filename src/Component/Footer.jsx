import React from "react";
import logo from "../image/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img1 from '../image/footer-card.png'

const Footer = () => {
  return (
    <>
      <div className="bg-[#2B2B2B]  flex justify-around flex-wrap la">
        <div className="lg:w-[25%] w-[70%] p-5 m-auto  w-full  mt-5">
          <img className="w-[150px]" src={logo} alt="" />
          <p className="text-[#898989] mt-3">
            Welcome to our online order website! Here, you can browse our wide
            selection of products and place orders from the comfort of your own
            home.
          </p>
          <div className="flex w-max gap-5 mt-5">
            <div className="w-[30px] h-[30px] cursor-pointer dp rounded-full bg-black flex items-center justify-center">
              <p className="text-white">
                <FaFacebookF />
              </p>
            </div>
            <div className="w-[30px] h-[30px] cursor-pointer dp rounded-full bg-black flex items-center justify-center">
              <p className="text-white">
                <FaTwitter />
              </p>
            </div>
            <div className="w-[30px] h-[30px] cursor-pointer dp rounded-full bg-black flex items-center justify-center">
              <p className="text-white">
                <FaLinkedin />
              </p>
            </div>
            <div className="w-[30px] h-[30px] cursor-pointer dp rounded-full bg-black flex items-center justify-center">
              <p className="text-white">
                <FaInstagramSquare />
              </p>
            </div>
            <div className="w-[30px] h-[30px] cursor-pointer dp rounded-full bg-black flex items-center justify-center">
              <p className="text-white">
                <FaYoutube />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] w-[70%] flex   flex-wrap justify-between ">
          <div className="lg:w-[24%] w-[48%]  bb  ">
            <h1 className="text-white text-[20px] font-medium">Company</h1>
            <ul className="text-[#898989] group">
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                About us
              </li>
              <li className="text-[18px] font-normal hover:text-[#e7dcca] cursor-pointer">
                Contact us
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Offer
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>

          <div className="lg:w-[24%] w-[48%] bb ">
            <h1 className="text-white text-[20px] font-medium">Account</h1>
            <ul className="text-[#898989] group">
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                My orders
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Wishlist
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Shopping Cart
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Saved Address
              </li>
            </ul>
          </div>

          <div className="lg:w-[24%] w-[48%] bb ">
            <h1 className="text-white text-[20px] font-medium">Useful links</h1>
            <ul className="text-[#898989] group">
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Blogs
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Login
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Register
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Profile
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Setting
              </li>
            </ul>
          </div>

          <div className="lg:w-[24%] w-[48%] bb  lg:border-none">
            <h1 className="text-white text-[20px] font-medium">Top Brands</h1>
            <ul className="text-[#898989] group">
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                PizzaBoy
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Saladish
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                IcePops
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                Maxican hoy
              </li>
              <li className="text-[18px] font-normal hover:text-[#705732] cursor-pointer">
                La Foodie
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[90%] flex-wrap pt-10 pb-10 lg:flex-nowrap gap-5 border-t border-gray-500 flex justify-between items-center px-3">
  <p className="text-[18px] text-[#ADADAD] text-center w-full lg:w-auto">@ Copyright 2024 ZOMO. All rights Reserved.</p>
  <img className="w-[300px] md:w-[600px]  " src={img1} alt=""/>
</div>

      </div>

    </>
  );
};

export default Footer;
