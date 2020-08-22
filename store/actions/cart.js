export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const addCartItem = (payload) => {
   return {
      type: ADD_CART_ITEM,
      payload,
   };
};
export const updateCartItem = (payload) => {
   return {
      type: UPDATE_CART_ITEM,
      payload,
   };
};
export const deleteCartItem = (payload) => {
   return {
      type: DELETE_CART_ITEM,
      payload,
   };
};
