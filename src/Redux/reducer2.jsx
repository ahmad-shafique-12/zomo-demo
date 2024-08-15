import { act } from "react";
import {
  Add_To_Cart,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_FROM_CART,
} from "./constant";
// import data from "../Component/Data";
const intialValue = {
  cart: [],
};

const CartReducer = (state = intialValue, action) => {
  switch (action.type) {
    case Add_To_Cart:
      const obj = action.payload;
      const exist = state.cart.find((e) => e.name === obj.name);
      if (!exist) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((e) =>
            e.name === e.name
              ? { ...e, quantity: e.quantity + action.payload.quantity }
              : e
          ),
        };
      }
    case INCREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((e) =>
          e.name === action.payload.name
            ? { ...e, quantity: e.quantity + 1 }
            : e
        ),
      };
    case DECREMENT_ITEM:
      console.log(action.payload);
      return {
        ...state,
        cart: state.cart.map((e) =>
          e.name === action.payload.name
            ? { ...e, quantity: e.quantity - 1 }
            : e
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
export default CartReducer;
