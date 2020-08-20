import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";

import HeaderButton from "../components/HeaderButton";
import ProductList from "../components/ProductList";

const ShopScreen = (props) => {
   return <ProductList navigation={props.navigation} />;
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});

ShopScreen.navigationOptions = (navigationData) => {
   return {
      title: "Shop",
      headerLeft: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="Menu"
               iconName="ios-menu"
               onPress={() => {
                  navigationData.navigation.toggleDrawer();
               }}
            />
         </HeaderButtons>
      ),
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="Cart"
               iconName="md-cart"
               onPress={() => {
                  console.log("Open cart");
               }}
            />
         </HeaderButtons>
      ),
   };
};

export default ShopScreen;
