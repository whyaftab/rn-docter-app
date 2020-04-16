import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from "react-native";

export const TouchableSpecific = props => {
  if (Platform.OS === "ios") {
    return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
  }
  const mutedProps = { ...props, style: undefined };
  return (
    <TouchableNativeFeedback {...mutedProps}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  );
};
