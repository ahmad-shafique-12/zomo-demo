import React from "react";
import Navbar from "../Component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
  INCREMENT_ITEM_action,
  DECREMENT_ITEM_action,
  REMOVE_FROM_CART_action,
} from "../Redux/action";
import Footer from "../Component/Footer";

const Finaldetail = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.Cart);
  const handleIncrement = (e) => {
    dispatch(INCREMENT_ITEM_action(e));
    console.log("Incrementing quantity");
  };

  const handleDeIncrement = (e) => {
    dispatch(DECREMENT_ITEM_action(e));
    console.log(e);
    // console.log("Incrementing quantity");
  };
  const removeIdx = (idx) => {
    dispatch(REMOVE_FROM_CART_action(idx));
  };
  return (
    <>
      <Navbar />
      <p className="text-[#F1A041] mt-20 px-[150px] text-[18px]  font-medium p-2">
        Shopping List
      </p>
      <div className=" w-[80%] md:flex-col sm:flex justify-between  m-auto">
        {cart.map((e, i) => {
          return (
            <>
              <div className="flex md:flex-row flex-col border  md:w-full sm:w-[48%] w-[100%] p-2 items-center gap-5 md:justify-around justify-center">
                <p
                  onClick={() => removeIdx(i)}
                  className="text-[30px] font-bold cursor-pointer "
                >
                  <RxCross2 />
                </p>
                <img className="md:w-[150px] w-[200px]" src={e.image} />
                <p className="text-[20px]  font-medium">{e.name}</p>
                <p className="text-[20px]  font-medium">${e.price}.00</p>
                <div className=" w-max h-max  gap-2  flex ">
                  <button
                    onClick={() => handleIncrement(e)}
                    className="p-2 w  border "
                  >
                    +
                  </button>
                  <p className=" border p-2 text-center ">{e.quantity}</p>
                  <button
                    onClick={() => handleDeIncrement(e)}
                    className="p-2 border "
                  >
                    -
                  </button>
                </div>

                <p className="text-[#F07253] font-bold">
                  Total: ${e.quantity * e.price}
                </p>
              </div>
            </>
          );
        })}
      </div>

      <div className="w-[40%] bg-[#F07452]   m-auto mt-5 flex justify-between p-3 rounded-sm">
        <p className="text-[18px] font-medium text-black ">Total :</p>
        <p className="text-[18px] font-medium text-white">
          $
          {cart.reduce((Total, element) => {
            return Total + element.quantity * element.price;
          }, 0)}
        </p>
      </div>

      <Footer/>
    </>
  );
};

export default Finaldetail;
