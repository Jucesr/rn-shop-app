import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../store/actions/cart";

import ProductItem from "../components/ProductItem";
const ProductList = (props) => {
   const products = useSelector((state) => state.products);
   const dispatch = useDispatch();

   const renderItem = (itemData) => {
      const onSeeDetails = () => {
         props.navigation.navigate({
            routeName: "productDetail",
            params: {
               id: itemData.item.id,
               productTitle: itemData.item.name,
            },
         });
      };
      return (
         <ProductItem
            item={itemData.item}
            actionText="Add to cart"
            secondActionText="Details"
            onAction={() => {
               // Add it to store
               dispatch(
                  addCartItem({
                     product: itemData.item,
                     quantity: 1,
                  })
               );
               props.navigation.navigate({
                  routeName: "cart",
               });
            }}
            onSecondAction={onSeeDetails}
            onSelectItem={onSeeDetails}
         />
      );
   };

   if (products.length === 0 || !products) {
      return (
         <View style={styles.screen}>
            <Text>No products found. Add some</Text>
         </View>
      );
   }

   return (
      <View style={styles.screen}>
         <FlatList
            data={products}
            keyExtractor={(item, index) => item.id}
            renderItem={renderItem}
            style={{ width: "100%" }}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
   },
});

export default ProductList;
