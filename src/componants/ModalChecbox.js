import React from "react";
import { CheckBox } from "react-native-elements";
import { colors } from "../constant";

export const ModalCheckbox = ({ checked, title, onPress, containerStyle }) => (
  <CheckBox
    onPress={onPress}
    center
    title={title}
    checkedIcon="dot-circle-o"
    uncheckedIcon="circle-o"
    checked={checked}
    uncheckedColor={colors.text}
    checkedColor={colors.primary}
    textStyle={!checked && { color: colors.text }}
    containerStyle={[
      {
        backgroundColor: "#fff",
        borderWidth: 0,
        elevation: 0
      },
      containerStyle
    ]}
  />
);
