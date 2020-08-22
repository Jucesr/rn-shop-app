import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { formatValue } from "../utils/index";

import DefaultText from "./DefaultText";
import Button from "./Button";
import Colors from "../constans/Colors";

const CartItem = ({ item, ...props }) => {
   const { product, quantity } = item;
   return (
      <View style={styles.item}>
         <View style={{ ...styles.row }}>
            <View style={{ ...styles.imageContainer }}>
               <ImageBackground
                  source={{ uri: product.image }}
                  style={styles.bgImage}
               ></ImageBackground>
            </View>
            <View style={{ ...styles.detail }}>
               <View
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                  }}
               >
                  <View
                     style={{
                        width: "80%",
                     }}
                  >
                     <DefaultText style={styles.title}>
                        {product.name}
                     </DefaultText>
                     <DefaultText style={styles.unitRate}>
                        {formatValue("currency", product.unit_rate)}
                     </DefaultText>
                  </View>
                  <Button
                     onPress={props.onRemove}
                     buttonStyle={styles.closeButton}
                  >
                     <Ionicons
                        name="ios-close-circle-outline"
                        size={24}
                        color="black"
                     />
                  </Button>
               </View>

               <View style={styles.buttons}>
                  <Button
                     onPress={() => props.updateQuantity(-1)}
                     buttonStyle={styles.actionButton}
                  >
                     <Ionicons size={24} color="white" name="md-remove" />
                  </Button>
                  <DefaultText style={styles.quantity}>{quantity}</DefaultText>
                  <Button
                     onPress={() => props.updateQuantity(1)}
                     buttonStyle={styles.actionButton}
                  >
                     <Ionicons size={24} color="white" name="md-add" />
                  </Button>
               </View>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   detail: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: "space-between",
      width: "60%",
      // alignItems: "center",
      // height: "20%",
   },
   title: {
      fontFamily: "open-sans-bold",
      fontSize: 18,
      color: "black",
   },
   unitRate: {
      fontFamily: "open-sans-bold",
      fontSize: 16,
      color: "red",
   },
   quantity: {
      fontSize: 22,
      borderColor: "black",
      backgroundColor: "white",
      paddingVertical: 5,
      paddingHorizontal: 20,
   },
   buttons: {
      display: "flex",
      flexDirection: "row",
   },
   actionButton: {
      paddingVertical: 9,
      borderRadius: 0,
   },
   closeButton: {
      backgroundColor: "#f5f5f5",
      paddingVertical: 0,
      paddingHorizontal: 0,
   },
   row: {
      flexDirection: "row",
   },
   item: {
      height: 150,
      width: "100%",
      backgroundColor: "#f5f5f5",
      borderRadius: 10,
      overflow: "hidden",
      marginVertical: 20,
      borderColor: "black",
      borderWidth: 0.1,
   },
   imageContainer: {
      width: "40%",
   },
   bgImage: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
   },
});

export default CartItem;
