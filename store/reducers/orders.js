import Order from "../../models/order";

import { ADD_ORDER } from "../actions/orders";

const initialState = [];

export default (state = initialState, action) => {
   switch (action.type) {
      case ADD_ORDER: {
         const cart = action.payload;

         return [...state, new Order(state.length, cart)];
      }

      default:
         return state;
   }
};
