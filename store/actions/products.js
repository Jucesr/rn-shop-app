export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (payload) => {
   return {
      type: ADD_PRODUCT,
      payload,
   };
};
export const updateProduct = (payload) => {
   return {
      type: UPDATE_PRODUCT,
      payload,
   };
};
export const deleteProduct = (payload) => {
   return {
      type: DELETE_PRODUCT,
      payload,
   };
};
