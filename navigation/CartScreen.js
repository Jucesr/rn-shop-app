import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { deleteCartItem, updateCartItem } from "../store/actions/cart";

import { formatValue } from "../utils/index";

import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Colors from "../constans/Colors";

const CartScreen = (props) => {
   const cart = useSelector((state) => state.cart);

   const dispatch = useDispatch();

   if (cart.items.length === 0) {
      return (
         <View style={styles.content}>
            <Text>The cart is empty. Add some products</Text>
         </View>
      );
   }

   return (
      <View style={styles.screen}>
         <View style={styles.topContainer}>
            <View style={styles.top}>
               <Text style={styles.subtotal}>
                  Subtotal ({cart.items.length} products):{" "}
                  <Text style={styles.total}>
                     {formatValue("currency", cart.total)}
                  </Text>
               </Text>
               <Button
                  buttonStyle={styles.buttonPlace}
                  textStyle={styles.buttonPlaceText}
               >
                  Place Order
               </Button>
            </View>
         </View>

         <View style={styles.itemList}>
            <FlatList
               data={cart.items}
               keyExtractor={(item, index) => item.id}
               renderItem={(itemData) => (
                  <CartItem
                     item={itemData.item}
                     updateQuantity={(increase) => {
                        itemData.item.increaseQuantity(increase);
                        dispatch(updateCartItem(itemData.item));
                     }}
                     onRemove={() => {
                        dispatch(deleteCartItem(itemData.item.id));
                     }}
                  />
               )}
               style={{ width: "100%" }}
               contentContainerStyle={styles.list}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
   },
   screen: {
      flex: 1,
   },
   list: {
      flexGrow: 1,
      // justifyContent: "flex-end",
   },
   topContainer: {
      // flex: 1,
      alignItems: "center",
      width: "100%",
   },
   top: {
      width: "80%",
   },
   total: {
      color: "red",
      fontWeight: "bold",
   },
   itemList: {
      flex: 1,
   },
   subtotal: {
      marginVertical: 10,
      marginTop: 10,
      marginBottom: 5,
      fontSize: 18,
   },
   buttonPlace: {
      backgroundColor: Colors.accentColor,
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
   },
   buttonPlaceText: {
      color: "white",
      textAlign: "center",
   },
});

CartScreen.navigationOptions = (navigationData) => {
   return {
      title: "Cart",
   };
};

export default CartScreen;
