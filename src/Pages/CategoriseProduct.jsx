import React, { useState } from "react";
// import Header from '../Component/Header'
import Navbar from "../Component/Navbar";
import { FaStar } from "react-icons/fa";

import { useParams } from "react-router-dom";
import data from "../Component/Data";
import { useDispatch, useSelector } from "react-redux";
// import { INCREMENT_ITEM } from "../Redux/constant"
import { Add_To_Cart_action } from "../Redux/action.js";
import { INCREMENT_ITEM_action } from "../Redux/action.js";
import Footer from "../Component/Footer.jsx";
const CategoriseProduct = () => {
  const { cart } = useSelector((state) => state.Cart);
  // const cartItem = cart.find((obj) => item.name === obj.name);

  const dispatch = useDispatch();

  
  const {url} =useParams();
  const obj = data.find((e, i) => e.url === url);
  const [quantity, setquantity] = useState(1)

  const handbtn = () => {
    dispatch(Add_To_Cart_action({...obj, quantity}));
  };

  const increment = () => {
    setquantity(quantity + 1);
  };
  
  const decrement = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };
  

  console.log(cart);

  if (!obj) {
    return <p>User Not Found</p>;
  }
  console.log(obj);

  return (
    <>
      <Navbar />
      <div className=" w-[90%] mt-20 m-auto flex justify-around flex-wrap pb-10 ">
        {/* <div className='shadow-lg bg-gray-50 w-max'> */}

        <img className="lg:w-[400px] w-[350px] m-auto " src={obj.image} alt="" />
        {/* </div> */}
        <div className=" lg:w-[50%] p-5  w-full m-auto ">
          <p className="text-2xl font-medium mt-8">{obj.name}</p>
          <p className="flex items-center gap-2 mt-3">
            {" "}
            <FaStar className="text-[gold]" />{" "}
            <FaStar className="text-[gold]" />
            <FaStar className="text-[gold]" />
            <span className="text-[18px] font-medium"> {obj.rating}</span>
          </p>
          <p className="text-[18px] font-medium mt-2">${obj.price}.00</p>
          <p className="lg:text-[18px] text-[14px] mt-2 text-[gray]">{obj.des}</p>

          <div className=" w-max mt-5  flex m-auto">
            <button
              onClick={increment}
              className="p-2 w-[50px] h-[50px] border "
            >
              +
            </button>
            <p
              className="w-[50px] border h-[50p] p-2 text-center "
            >{quantity}</p>
            <button onClick={decrement} className="p-2 w-[50px] border h-[50p] ">-</button>
            <button onClick={handbtn} className="btna">
              Order Now{" "}
            </button>
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CategoriseProduct;
