import React from "react";
import { Text, View } from "react-native";
import { isTablet } from "../constant";

export const AuthenticationResponisiveView = ({ children }) => (
  <View
    style={{
      flex: 1,
      width: isTablet() ? "50%" : "100%",
      alignSelf: "center"
    }}
  >
    {children}
  </View>
);
