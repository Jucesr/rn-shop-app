import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Colors from "../constans/Colors";
import DefaultText from "../components/DefaultText";
import Button from "../components/Button";

import { formatValue } from "../utils/index";

const OrderItem = ({ item }) => {
   const [showDetail, setShowDetail] = useState(false);
   return (
      <View style={styles.orderItem}>
         <View style={styles.row}>
            <DefaultText style={styles.total}>
               {formatValue("currency", item.cart.total)}
            </DefaultText>
            <DefaultText>{formatValue("date", item.date)}</DefaultText>
            <Button
               buttonStyle={styles.button}
               textStyle={styles.buttonText}
               onPress={() => {
                  setShowDetail(!showDetail);
               }}
            >
               Details
            </Button>
         </View>

         {showDetail && (
            <FlatList
               data={item.cart.items}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
                  <View style={{ ...styles.row, ...styles.orderDetailItem }}>
                     <DefaultText>
                        {formatValue("number", item.quantity)}
                     </DefaultText>
                     <DefaultText>{item.product.name}</DefaultText>
                     <DefaultText>
                        {formatValue("currency", item.getTotal())}
                     </DefaultText>
                  </View>
               )}
               style={{ width: "100%" }}
            />
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   orderItem: {
      marginHorizontal: 30,

      borderBottomWidth: 1,
      borderBottomColor: Colors.gray,
   },
   orderDetailItem: {
      marginVertical: 10,
   },
   row: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
      width: "100%",
   },
   total: {
      fontSize: 20,
      fontWeight: "bold",
   },
   button: {
      backgroundColor: Colors.accentColor,
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
   },
   buttonText: {
      color: "white",
      textAlign: "center",
   },
});

export default OrderItem;
