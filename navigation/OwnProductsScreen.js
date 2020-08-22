import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const OwnProductsScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text>OwnProducts Screen</Text>
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
   };
};

export default OwnProductsScreen;
