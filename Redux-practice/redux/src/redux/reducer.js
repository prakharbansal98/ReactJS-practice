import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Add to cart condition", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("Remove from cart condition", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case EMPTY_CART:
      console.log("Empty cart condition", action);
      data = [];
      return [...data];
    default:
      return [];
  }
};
