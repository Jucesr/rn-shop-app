import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import OrderItem from "../components/OrderItem";

const OrdersScreen = (props) => {
   const orders = useSelector((state) => state.orders);

   return (
      <View style={styles.screen}>
         <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <OrderItem item={item} />}
            style={{ width: "100%" }}
            contentContainerStyle={styles.list}
         />
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
