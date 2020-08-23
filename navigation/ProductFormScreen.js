import React, { useState, useEffect, useCallback } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet, Image } from "react-native";

import HeaderButton from "../components/HeaderButton";
import Input from "../components/Input";
import { addProduct, updateProduct } from "../store/actions/products";

import { useDispatch } from "react-redux";

const FormRow = ({ name, value, setValue, ...rest }) => {
   return (
      <View style={styles.formRow}>
         <Text style={styles.formLabel}>{name}</Text>
         <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={(text) => setValue(text)}
            {...rest}
         />
      </View>
   );
};

const ProductForm = (props) => {
   const editItem = props.navigation.getParam("editItem");
   const [name, setName] = useState(editItem ? editItem.name : "");
   const [unitRate, setUnitRate] = useState(
      editItem ? editItem.unit_rate.toString() : ""
   );
   const [description, setDescription] = useState(
      editItem ? editItem.description : ""
   );
   const [image, setImage] = useState(editItem ? editItem.image : "");

   const dispatch = useDispatch();

   const addProductHandler = useCallback(() => {
      if (editItem) {
         // It's editing a product
         dispatch(
            updateProduct({
               id: editItem.id,
               name,
               image,
               description,
               unit_rate: parseFloat(unitRate),
            })
         );
      } else {
         // It's adding a product
         dispatch(
            addProduct({
               name,
               image,
               description,
               unit_rate: unitRate,
            })
         );
      }

      props.navigation.goBack();
   }, [dispatch, name, unitRate, description, image]);

   useEffect(() => {
      props.navigation.setParams({
         addProduct: addProductHandler,
      });
   }, [addProductHandler]);

   return (
      <View style={styles.screen}>
         <FormRow name="Title" value={name} setValue={setName} />
         <FormRow name="Price" value={unitRate} setValue={setUnitRate} />
         <FormRow
            name="Description"
            value={description}
            setValue={setDescription}
            multiline={true}
            numberOfLines={4}
         />
         <FormRow name="Image" value={image} setValue={setImage} />

         {image.length !== 0 && (
            <Image style={styles.image} source={{ uri: image }} />
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: "flex-start",
      paddingHorizontal: 20,
      // alignItems: "center",
   },
   image: {
      height: "100%",
      width: "100%",
   },
   input: {
      width: "70%",
      // textAlign: "center",
   },
   formRow: {
      // flex: 1,
      flexDirection: "row",
      alignItems: "center",
      height: 70,
      // borderWidth: 1,
      // height: 30,
   },
   formLabel: {
      width: "30%",
      fontWeight: "bold",
      fontSize: 18,
      marginRight: 10,
   },
});

ProductForm.navigationOptions = (navigationData) => {
   const addProduct = navigationData.navigation.getParam("addProduct");
   return {
      title: "Product Form",
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName="ios-save" onPress={addProduct} />
         </HeaderButtons>
      ),
   };
};

export default ProductForm;
