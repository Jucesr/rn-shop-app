import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constans/Colors";

const Button = (props) => {
   return (
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
         <View style={{ ...styles.button, ...props.buttonStyle }}>
            <Text style={{ ...styles.buttonText, ...props.textStyle }}>
               {props.children}
            </Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      backgroundColor: Colors.gray,
      paddingVertical: 6,
      paddingHorizontal: 20,
      borderRadius: 25,
   },
   buttonText: {
      color: "black",
      fontFamily: "open-sans",
      fontSize: 14,
   },
});

export default Button;
