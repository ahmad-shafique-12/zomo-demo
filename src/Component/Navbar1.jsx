import React from "react";
import { Link } from "react-router-dom";
// import { Add_To_Cart } from "../Redux/constant";
import img2 from "../image/logo.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import img3 from "../image/p5.png";
import { GrLogout } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
// import { IoSearchSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { SidebarOpen, SidebarClose } from "../Redux/constant";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT_ITEM_action, DECREMENT_ITEM_action, REMOVE_FROM_CART_action } from "../Redux/action";
import { RxCross2 } from "react-icons/rx";
const Navbar1 = () => {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.Sidebar);
  // const { sidebar } = useSelector((state) => state.Sidebar);
  const { cart } = useSelector((state) => state.Cart);

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


  const removeIdx=(idx)=>{
    dispatch(REMOVE_FROM_CART_action(idx))
  }
  return (
    <>
      <div className="w-[100%] h-[100px]  flex items-center justify-around">
        <div className="flex items-center  md:w-max w-full  justify-around gap-5 ">
          <p
            className="text-[white] text-[25px] cursor-pointer lg:hidden block"
            onClick={openSidebar}
          >
            <CiMenuBurger />
          </p>
          <Link to={"/"}>
            <img className="w-[120px]" src={img2} alt="" />
          </Link>
          <button className="flex bg-[#F19C43] from-#F07551 h-[35px] p-4 gap-2 items-center rounded-[20px] text-white text-[18px]">
            <HiOutlineLocationMarker /> Location
          </button>
        </div>

        <ul className=" gap-3 flex text-white font-medium text-[18px] relative hidden  lg:block 2xl:block lg:flex 2xl:flex">
          <li className="flex items-center gap-3 cursor-pointer ">
            Home <FaAngleDown />
          </li>
          <li className="flex items-center gap-3 cursor-pointer group relative group">
            Order <FaAngleDown />
            <div className="w-[180px] shadow-lg bg-white rounded-[10px] transition-all duration-900 absolute top-[60px] group-hover:top-[30px] left-15 invisible group-hover:visible">
              <ul className="text-gray-500 p-4 text-[16px]">
                <li className="hover:text-[rgb(240,112,84)]">Menu List</li>
                <li className="hover:text-[rgb(240,112,84)]">Menu Grid</li>
                <li className="hover:text-[rgb(240,112,84)]">Address</li>
                <li className="hover:text-[rgb(240,112,84)]">Checkout</li>
                <li className="hover:text-[rgb(240,112,84)]">Confirm Out</li>
                <li className="hover:text-[rgb(240,112,84)]">Offers</li>
                <li className="hover:text-[rgb(240,112,84)]">Order Tracking</li>
                <li className="hover:text-[rgb(240,112,84)]">Payment</li>
                <li className="hover:text-[rgb(240,112,84)]">
                  Restaurant Listing
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-3 cursor-pointer relative group">
            Blog <FaAngleDown />
            <div className="w-[180px] shadow-lg rounded-[10px]  bg-white transition-all duration-900 absolute top-[60px] group-hover:top-[30px] left-15 invisible group-hover:visible ">
              <ul className="text-gray-500 p-4 text-[16px]">
                <li className="hover:text-[rgb(240,112,84)]">
                  Grid Left Sidebar
                </li>
                <li className="hover:text-[rgb(240,112,84)]">
                  Grid Side Sidebar
                </li>
                <li className="hover:text-[rgb(240,112,84)]">Blog Listing</li>
                <li className="hover:text-[rgb(240,112,84)]">Blog Details</li>
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-3 cursor-pointer relative group">
            Pages <FaAngleDown />
            <div className="w-[180px] shadow-lg  bg-white rounded-[10px] transition-all duration-900 absolute top-[60px] group-hover:top-[30px] left-15 invisible group-hover:visible">
              <ul className="text-gray-500 p-4 text-[16px]">
                <li className="hover:text-[rgb(240,112,84)]">404</li>
                <li className="hover:text-[rgb(240,112,84)]">Coming Soon</li>
                <li className="hover:text-[rgb(240,112,84)]">Conatct</li>
                <li className="hover:text-[rgb(240,112,84)]">Empty Cart</li>
                <li className="hover:text-[rgb(240,112,84)]">FAQS</li>
                <li className="hover:text-[rgb(240,112,84)]">OTP</li>
                <li className="hover:text-[rgb(240,112,84)]">Sign In</li>
                <li className="hover:text-[rgb(240,112,84)]">Signu Up</li>
                <li className="hover:text-[rgb(240,112,84)]">Testimonial</li>
                <li className="hover:text-[rgb(240,112,84)]">Wishlist</li>
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-3 cursor-pointer">Contact</li>
        </ul>

        <div className="w-max  gap-5 hidden md:flex block items-center ">
          <div className="relative items-center flex justify-center ">
            <p className="absolute text-[20px] font-medium text-white cursor-pointer group  ">
              <MdOutlineShoppingCart />
              <div className="w-[300px]   right-1 bg-white rounded-[10px] transition-all duration-900 absolute top-[60px] group-hover:top-[30px] left-15 invisible group-hover:visible ">
                {/* //////////////Item Add Array////////////// */}
                <div className=" h-[200px] overflow-auto">
                  {cart.map((e, i) => {
                    return (
                      <div key={i} className="  p-2 flex gap-5 items-center">
                        <img className="w-[70px]" src={e.image} alt />
                        <div className=" w-max">
                          <p className="text-black text-[15px]">{e.name}</p>
                          {/* <p className="text-gray-500">${e.price}.00</p> */}
                          <p className="text-gray-500">${e.quantity * e.price}</p>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => handleIncrement(e)}
                            className="text-black border p-1.5"
                          >
                            +
                          </button>
                          <p className="text-black border flex items-center p-1">{e.quantity}</p>
                          <button
                            onClick={() => handleDeIncrement(e)}
                            className="text-black border p-1.5"
                          >
                            -
                          </button>
                        </div>
                        <p onClick={()=>removeIdx(i)} className="text-black"><RxCross2 /></p>
                      </div>
                    );
                  })}
                </div>
                {/* //////////////////////////// */}

                <div className="pb-2">
                  <div className="flex justify-between p-4 ">
                    <p className="text-[18px] font-medium text-black ">
                      Total :
                    </p>
                    {/* <p className="text-[18px] font-medium texft-[#F17851]"> */}
                      <p className="text-[18px] font-medium text-[#F17851]">$
                        {cart.reduce((Total, element) => {
                          return Total + element.quantity * element.price;
                        }, 0)}
                      </p>
                    {/* </p> */}
                  </div>
                <Link to={`/viewcart`}>
                  <button className="   w-[90%] m-auto block btn p-2 rounded-[5px] text-white font-medium text-[18px]">
                    View Cart
                  </button>
                  </Link>
                </div>
              </div>
            </p>
            <div className="absolute  top-[-15px] left-[5px] px-[0.35rem]  bg-[#F2A93E] rounded-full ">
              <p className="text-[12px]"></p>
            </div>
          </div>

          <div className="flex  items-center  gap-3 ml-5 relative group ">
            <img className="rounded-full w-[40px] h-[40px]" src={img3} alt="" />
            <div>
              <p className="text-[#ADADAC] text-[14px] font-normal">
                Hi,Mark Jecno
              </p>
              <p className="text-[white] font-medium text-[16px]">My Account</p>
            </div>

            <div className=" w-[150px]  bg-white rounded-[10px] transition-all duration-900 absolute top-[80px] group-hover:top-[50px] left-15 invisible group-hover:visible ">
              <ul className="  font-medium text-gray-500 p-4 text-[16px]">
                <li className="hover:text-[#F07C4F] cursor-pointer">Profile</li>
                <li className="hover:text-[#F07C4F] cursor-pointer">
                  My Orders
                </li>
                <li className="hover:text-[#F07C4F] cursor-pointer">
                  Saved Address
                </li>
                <li className="hover:text-[#F07C4F] cursor-pointer">
                  Saved Cards
                </li>
                <li className="hover:text-[]">Setting</li>
              </ul>
              <div className="flex gap-2 items-center p-2 text-[#F07C4F] cursor-pointer text-[18px] ">
                <GrLogout /> <p>LogOut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Navbar1;
