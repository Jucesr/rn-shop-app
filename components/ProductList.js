import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import { useSelector } from "react-redux";

import ProductItem from "../components/ProductItem";
const ProductList = (props) => {
   const products = useSelector((state) => state.products);

   const renderItem = (itemData) => {
      // const isFavorite = favoriteMeals.some(
      //    (meal) => meal.id === itemData.item.id
      // );

      return (
         <ProductItem
            item={itemData.item}
            onSelectItem={() => {
               props.navigation.navigate({
                  routeName: "ProductDetail",
                  params: {
                     mealId: itemData.item.id,
                     mealTitle: itemData.item.title,
                     isCurrentMealFavorite: isFavorite,
                  },
               });
            }}
         />
      );
   };

   if (products.length === 0 || !products) {
      return (
         <View style={styles.content}>
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
