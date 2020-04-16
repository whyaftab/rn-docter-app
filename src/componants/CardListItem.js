import React from "react";
import { View } from "react-native";
import { demoStyles } from "../constant";

export const CardListItem = ({ children, containerStyle }) => (
  <View style={[styles.style, containerStyle]}>{children}</View>
);

const styles = {
  style: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10
  }
};
