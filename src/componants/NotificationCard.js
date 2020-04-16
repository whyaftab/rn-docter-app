import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Icon } from "react-native-elements";
import { demoStyles, colors, isTablet } from "../constant";

export const NotificationCard = ({ title, time, onPressEdit }) => (
  <View style={styles.container}>
    <Text style={styles.subStyle}>{time}</Text>
    <Text style={styles.titleStyle}>{title}</Text>
  </View>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {
      borderRadius: 5,
      overflow: "hidden",
      flex: isTablet() ? 0.48 : 1,
      backgroundColor: "#fff",
      justifyContent: "space-between",
      padding: 20
    }
  ],
  titleStyle: {
    color: "#222"
  },
  subStyle: {
    color: colors.text
  }
};
