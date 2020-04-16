import React from "react";
import { View } from "react-native";
import { Icon, Badge } from "react-native-elements";

export const BellIcon = ({ navigation }) => (
  <View style={{ paddingRight: 15 }}>
    <Icon
      name="bell-o"
      color="#fff"
      type="font-awesome"
      onPress={() => navigation.navigate("signIn")}
    />
    <Badge
      status="error"
      containerStyle={{ position: "absolute", top: -2, right: 12 }}
    />
  </View>
);
