import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { formatValue } from "../utils/index";
import DefaultText from "../components/DefaultText";
import Button from "../components/Button";
import Colors from "../constans/Colors";
import { addCartItem } from "../store/actions/cart";

const ProductScreen = (props) => {
   const id = props.navigation.getParam("id");

   const products = useSelector((state) => state.products);
   const product = products.find((p) => p.id === id);

   const dispatch = useDispatch();

   return (
      <View style={styles.screen}>
         <View style={styles.imageContainer}>
            <Image source={{ uri: product.image }} style={styles.image} />
         </View>
         <View style={styles.productDetail}>
            <DefaultText style={styles.price}>
               {formatValue("currency", product.unit_rate)}
            </DefaultText>
            <DefaultText style={styles.description}>
               {product.description}
            </DefaultText>

            <Button
               buttonStyle={styles.detailButton}
               textStyle={styles.detailTextButton}
               onPress={() => {
                  dispatch(
                     addCartItem({
                        product: product,
                        quantity: 1,
                     })
                  );
                  props.navigation.navigate({
                     routeName: "cart",
                  });
               }}
            >
               Add to cart
            </Button>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },
   imageContainer: {
      height: "40%",
      width: "100%",
   },
   image: {
      height: "100%",
      width: "100%",
   },
   price: {
      fontSize: 26,
      color: "red",
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 5,
   },
   description: {
      fontSize: 18,
      textAlign: "center",
      paddingHorizontal: 10,
   },
   productDetail: {
      flex: 1,
      // textAlign: "center",
      alignItems: "center",
   },
   detailButton: {
      backgroundColor: Colors.accentColor,
      borderRadius: 5,
      width: 200,
      marginVertical: 10,
   },
   detailTextButton: {
      color: "white",
      textAlign: "center",
   },
});

ProductScreen.navigationOptions = (navigationData) => {
   const title = navigationData.navigation.getParam("productTitle");
   return {
      title: title,
   };
};

export default ProductScreen;
