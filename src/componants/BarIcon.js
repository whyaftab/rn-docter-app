import React from "react";
import { Icon } from "react-native-elements";

export const BarIcon = ({ navigation }) => (
  <Icon
    name="bars"
    color="#fff"
    type="font-awesome"
    onPress={() => navigation.toggleDrawer()}
    containerStyle={{ paddingLeft: 10 }}
  />
);
