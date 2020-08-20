import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AddProductScreen from "./AddProductScreen";
import OrdersScreen from "./OrdersScreen";
import CartScreen from "./CartScreen";
import OwnProductsScreen from "./OwnProductsScreen";
import ProductScreen from "./ProductScreen";
import ShopScreen from "./ShopScreen";

import Colors from "../constans/Colors";

const defaultStackNavOptions = {
   headerStyle: {
      backgroundColor: Colors.primaryColor,
   },
   headerTitleStyle: {
      fontFamily: "open-sans-bold",
   },
   headerBackTitleStyle: {
      fontFamily: "open-sans",
   },
   headerTintColor: "white",
};

const ShopNavigator = createStackNavigator(
   {
      shop: ShopScreen,
   },
   {
      defaultNavigationOptions: defaultStackNavOptions,
   }
);

const OrdersNavigator = createStackNavigator(
   {
      orders: OrdersScreen,
   },
   {
      defaultNavigationOptions: defaultStackNavOptions,
   }
);

const ProductsNavigator = createStackNavigator(
   {
      products: ProductScreen,
   },
   {
      defaultNavigationOptions: defaultStackNavOptions,
   }
);

// const FavNavigator = createStackNavigator(
//    {
//       Favorites: FavoritesScreen,
//       MealDetail: MealDetailScreen,
//    },
//    {
//       defaultNavigationOptions: defaultStackNavOptions,
//    }
// );

// const tabsScreenContent = {
//    Meals: {
//       screen: MealsNavigator,
//       navigationOptions: {
//          tabBarIcon: (tabInfo) => {
//             return (
//                <Ionicons
//                   name="ios-restaurant"
//                   size={25}
//                   color={tabInfo.tintColor}
//                />
//             );
//          },
//          tabBarColor: Colors.primaryColor,
//          tabBarLabel:
//             Platform.OS === "android" ? (
//                <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
//             ) : (
//                "Meals"
//             ),
//       },
//    },
//    Favorites: {
//       screen: FavNavigator,
//       navigationOptions: {
//          tabBarLabel:
//             Platform.OS === "android" ? (
//                <Text style={{ fontFamily: "open-sans" }}>Favorites</Text>
//             ) : (
//                "Favorites"
//             ),
//          tabBarIcon: (tabInfo) => {
//             return (
//                <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
//             );
//          },
//          tabBarColor: Colors.accentColor,
//       },
//    },
// };

// const MealsFavNavigator =
//    Platform.OS === "android"
//       ? createMaterialBottomTabNavigator(tabsScreenContent, {
//            //   activeTintColor: Colors.accentColor,
//            activeColor: "white",
//            shifting: true,
//         })
//       : createBottomTabNavigator(tabsScreenContent, {
//            tabBarOptions: {
//               labelStyle: {
//                  fontFamily: "open-sans",
//               },
//               activeTintColor: Colors.accentColor,
//            },
//         });

// const filterNavigator = createStackNavigator(
//    {
//       Filters: FiltersScreen,
//    },
//    {
//       defaultNavigationOptions: defaultStackNavOptions,
//       navigationOptions: {
//          drawerLabel: "Filters",
//       },
//    }
// );

const mainNavigator = createDrawerNavigator(
   {
      Shop: ShopNavigator,
      Orders: OrdersNavigator,
      Products: ProductsNavigator,
   },
   {
      defaultNavigationOptions: defaultStackNavOptions,
      contentOptions: {
         activeTintColor: Colors.accentColor,
         labelStyle: {
            fontFamily: "open-sans-bold",
         },
      },
   }
);

export default createAppContainer(mainNavigator);
