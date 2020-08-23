import { PRODUCTS } from "../../data/index";

import Product from "../../models/product";

import {
   ADD_PRODUCT,
   UPDATE_PRODUCT,
   DELETE_PRODUCT,
} from "../actions/products";

const initialState = PRODUCTS;

export default (state = initialState, action) => {
   switch (action.type) {
      case ADD_PRODUCT: {
         const product = action.payload;
         const newProduct = new Product(
            state.length,
            "u1",
            product.name,
            product.image,
            product.description,
            product.unit_rate
         );
         const newProducts = state.concat(newProduct);

         return newProducts;
      }
      case DELETE_PRODUCT: {
         const id = action.payload;
         const newProducts = state.filter((product) => product.id !== id);
         return newProducts;
      }

      case UPDATE_PRODUCT: {
         const id = action.payload.id;
         const newProducts = state.map((product) => {
            if (product.id === id) {
               return action.payload;
            } else {
               return product;
            }
         });

         return newProducts;
      }

      default:
         return state;
   }
};
