import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import { demoStyles, isTablet } from "../constant";

export const PendingRxCard = ({ name, onPressCompare }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>Patient Name</Text>
      <Text style={[styles.textStyle, { color: "#333" }]}>{name}</Text>
    </View>
    <Button
      buttonStyle={styles.buttonStyle}
      containerStyle={{
        flexDirection: "row"
      }}
      title="compare digital/scanned Rx"
      onPress={onPressCompare}
    />
  </View>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {
      width: isTablet() ? "48%" : "100%",
      borderRadius: 5,
      overflow: "hidden",
      padding: 20,
      backgroundColor: "#fff",
      justifyContent: "space-between"
    }
  ],
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  textStyle: {
    textTransform: "capitalize"
  },
  buttonStyle: {
    padding: 2,
    margin: 0,
    borderRadius: 0
  }
};
