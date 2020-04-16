import React from "react";
import { View } from "react-native";
import { demoStyles, isTablet } from "../constant";

export const Card = ({ children, style }) => (
  <View style={[styles.containerStyle, style]}>{children}</View>
);

const styles = {
  containerStyle: {
    ...demoStyles.elevationStyle,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingBottom: 0,
    width: isTablet() ? "48%" : "100%"
  }
};
