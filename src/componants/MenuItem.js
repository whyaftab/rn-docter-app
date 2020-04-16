import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { colors, demoStyles } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

export const MenuItem = ({ onPress, name, source }) => (
  <TouchableSpecific onPress={onPress} style={styles.itemContainer}>
    <Image source={source} style={styles.iconStyle} />
    <Text style={styles.itemName}>{name}</Text>
  </TouchableSpecific>
);

const styles = StyleSheet.create({
  itemContainer: {
    ...demoStyles.elevationStyle,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    height: 160,
    width: "48%",
    alignSelf: "center",
    backgroundColor: "#fff"
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    width: "60%",
    marginTop: 10
  },
  iconStyle: {
    height: 50,
    width: 50
  }
});
