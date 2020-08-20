import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../components/HeaderButton";
const OrdersScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text>Orders Screen</Text>
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

OrdersScreen.navigationOptions = (navigationData) => {
   return {
      title: "Orders",
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

export default OrdersScreen;
