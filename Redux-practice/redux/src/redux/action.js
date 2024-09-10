import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = (data) => {
  console.warn("action called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.warn("action called", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.warn("action called");
  return {
    type: EMPTY_CART,
  };
};
