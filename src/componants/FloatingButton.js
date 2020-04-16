import React from "react";
import { Image, View } from "react-native";
import { colors } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

export const FloatingButton = ({ onPress, source }) => (
  <View style={styles.container}>
    <TouchableSpecific onPress={onPress}>
      <Image source={source} style={styles.imageStyle} />
    </TouchableSpecific>
  </View>
);

const styles = {
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 20,
    overflow: "hidden",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3
  },
  imageStyle: {
    width: 40,
    height: 40
  }
};
