import CartItem from "../../models/cart_item";

import {
   ADD_CART_ITEM,
   DELETE_CART_ITEM,
   UPDATE_CART_ITEM,
} from "../actions/cart";

const initialState = {
   items: [],
   total: 0,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case ADD_CART_ITEM: {
         const { product, quantity } = action.payload;

         const foundIndex = state.items.findIndex(
            (item) => item.product.id === product.id
         );

         let newItems;
         if (foundIndex >= 0) {
            // Already in the cart
            newItems = state.items.map((item) => {
               if (item.product.id === product.id) {
                  item.quantity++;
               }
               return item;
            });
         } else {
            const cartItem = new CartItem(
               state.items.length,
               product,
               quantity
            );

            newItems = [...state.items, cartItem];
         }

         return {
            ...state,
            items: newItems,
            total: newItems.reduce((acum, item) => acum + item.getTotal(), 0),
         };
      }

      case DELETE_CART_ITEM: {
         const id = action.payload;
         const newItems = state.items.filter((item) => item.id !== id);
         return {
            ...state,
            items: newItems,
            total: newItems.reduce((acum, item) => acum + item.getTotal(), 0),
         };
      }

      case UPDATE_CART_ITEM: {
         const newItem = action.payload;
         const newItems = state.items.map((item) => {
            if (item.id === newItem.id) {
               return newItem;
            } else {
               return item;
            }
         });
         return {
            ...state,
            items: newItems,
            total: newItems.reduce((acum, item) => acum + item.getTotal(), 0),
         };
      }

      default:
         return state;
   }
};
