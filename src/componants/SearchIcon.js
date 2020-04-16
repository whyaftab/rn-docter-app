import React from "react";
import { Icon } from "react-native-elements";
import { colors } from "../constant";

export const SearchIcon = ({ navigation }) => (
  <Icon
    name="search"
    color="#fff"
    type="font-awesome"
    containerStyle={{ paddingRight: 15 }}
    onPress={() => navigation.state.params.openSearch()}
  />
);
