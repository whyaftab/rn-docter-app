import React from "react";
import { Image, View } from "react-native";

export const Logo = ({ containerStyle }) => (
  <View style={[containerStyle]}>
    <Image
      source={require("../../assets/logo.png")}
      style={{
        height: 150,
        width: 150
      }}
    />
  </View>
);
