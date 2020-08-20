import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../components/HeaderButton";

const ProductScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text>Product Screen</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});

ProductScreen.navigationOptions = (navigationData) => {
   return {
      title: "Products",
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
   };
};

export default ProductScreen;
