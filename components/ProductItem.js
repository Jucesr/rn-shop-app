import React, { useState, useEffect } from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   ImageBackground,
} from "react-native";

import { formatValue } from "../utils/index";

import DefaultText from "../components/DefaultText";
import Button from "../components/Button";
import Colors from "../constans/Colors";

const ProductItem = ({ item, ...props }) => {
   return (
      <View style={styles.item}>
         <TouchableOpacity onPress={props.onSelectItem}>
            <View>
               <View style={{ ...styles.row, ...styles.header }}>
                  <ImageBackground
                     source={{ uri: item.image }}
                     style={styles.bgImage}
                  >
                     <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                           {item.name}
                        </Text>
                     </View>
                  </ImageBackground>
               </View>
               <View style={{ ...styles.row, ...styles.detail }}>
                  <Button
                     onPress={props.onSecondAction}
                     style={styles.detailButton}
                  >
                     {props.secondActionText}
                  </Button>
                  <DefaultText style={styles.detailText}>
                     {formatValue("currency", item.unit_rate)}
                  </DefaultText>

                  <Button
                     buttonStyle={styles.detailButton}
                     textStyle={styles.detailTextButton}
                     onPress={props.onAction}
                  >
                     {props.actionText}
                  </Button>
               </View>
            </View>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   titleContainer: {
      backgroundColor: "rgba(0,0,0,0.5)",
      paddingVertical: 5,
      paddingHorizontal: 12,
   },
   title: {
      fontFamily: "open-sans-bold",
      fontSize: 22,
      color: "white",

      textAlign: "center",
   },
   bgImage: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
   },
   row: {
      flexDirection: "row",
   },
   item: {
      height: 200,
      width: "100%",
      backgroundColor: "#f5f5f5",
      borderRadius: 10,
      overflow: "hidden",
      marginVertical: 20,
      borderColor: "black",
      borderWidth: 0.1,
   },
   header: {
      height: "80%",
   },
   detail: {
      paddingHorizontal: 10,
      justifyContent: "space-between",
      alignItems: "center",
      height: "20%",
   },
   detailText: {
      fontSize: 20,
   },
   detailButton: {
      backgroundColor: Colors.accentColor,
   },
   detailTextButton: {
      color: "white",
   },
});

export default ProductItem;
