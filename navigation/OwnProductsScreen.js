import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet, FlatList } from "react-native";

import HeaderButton from "../components/HeaderButton";
import ProductItem from "../components/ProductItem";

import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions/products";

const OwnProductsScreen = (props) => {
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
            actionText="Delete"
            secondActionText="Edit"
            onAction={() => {
               // Add it to store
               dispatch(deleteProduct(itemData.item.id));
            }}
            onSecondAction={() => {
               props.navigation.navigate({
                  routeName: "productForm",
                  params: {
                     editItem: itemData.item,
                  },
               });
            }}
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

OwnProductsScreen.navigationOptions = (navigationData) => {
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
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="Add"
               iconName="ios-add-circle-outline"
               onPress={() => {
                  navigationData.navigation.navigate({
                     routeName: "productForm",
                  });
               }}
            />
         </HeaderButtons>
      ),
   };
};

export default OwnProductsScreen;
