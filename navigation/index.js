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
import ProductDetailScreen from "./ProductDetailScreen";
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
      cart: CartScreen,
      productDetail: ProductDetailScreen,
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
      products: OwnProductsScreen,
   },
   {
      defaultNavigationOptions: defaultStackNavOptions,
   }
);

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
