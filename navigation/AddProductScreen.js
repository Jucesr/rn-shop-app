import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const AddProductScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text>Add product Screen</Text>
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

export default AddProductScreen;