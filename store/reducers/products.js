import { PRODUCTS } from "../../data/index";
import {
   ADD_PRODUCT,
   UPDATE_PRODUCT,
   DELETE_PRODUCT,
} from "../actions/products";

const initialState = PRODUCTS;

export default (state = initialState, action) => {
   switch (action.type) {
      // case ADD_PRODUCT:
      //    const existingIndex = state.favoriteMeals.findIndex(
      //       (meal) => meal.id === action.mealId
      //    );

      //    if (existingIndex >= 0) {
      //       const updatedFavMeals = [...state.favoriteMeals];
      //       updatedFavMeals.splice(existingIndex, 1);
      //       return {
      //          ...state,
      //          favoriteMeals: updatedFavMeals,
      //       };
      //    } else {
      //       return {
      //          ...state,
      //          favoriteMeals: state.favoriteMeals.concat(
      //             state.meals.find((meal) => meal.id === action.mealId)
      //          ),
      //       };
      //    }

      default:
         return state;
   }
};
