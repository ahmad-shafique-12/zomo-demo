// actions.js
import { type } from "@testing-library/user-event/dist/type";
import {
  SidebarOpen,
  SidebarClose,
  Add_To_Cart,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_FROM_CART,
} from "./constant";
import data from "../Component/Data";

export const openSidebar = () => (dispatch) => {
  dispatch({ type: SidebarOpen });
};

export const closeSidebar = () => (dispatch) => {
  dispatch({ type: SidebarClose });
};

export const Add_To_Cart_action = (obj) => (dispatch) => {
  dispatch({ type: Add_To_Cart, payload: obj });
  console.log(obj);
};

export const INCREMENT_ITEM_action = (e) => (dispatch) => {
  dispatch({ type: INCREMENT_ITEM, payload: e });
};

export const DECREMENT_ITEM_action = (e) => (dispatch) => {
  dispatch({ type: DECREMENT_ITEM, payload: e });
  console.log(e,"working");
  
  
};
export const REMOVE_FROM_CART_action=(idx)=>(dispatch)=>{
    dispatch({type:REMOVE_FROM_CART,payload:idx})
}
