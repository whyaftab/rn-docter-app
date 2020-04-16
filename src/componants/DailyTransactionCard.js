import React from "react";
import { View } from "react-native";
import { Text, Icon } from "react-native-elements";
import { demoStyles, colors, isTablet } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

export const DailyTransactionCard = ({
  onPress,
  feesType,
  transactionType,
  amount,
  date
}) => (
  <TouchableSpecific onPress={onPress} style={styles.container}>
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingRight: 30
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            width: 20,
            height: 20,
            borderRadius: 10
          }}
        />
        <Text
          style={{
            color: "#323232",

            fontSize: 18,
            fontWeight: "bold",
            paddingLeft: 10
          }}
        >
          {feesType}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#3571AD",
            width: 15,
            height: 15,
            borderRadius: 7
          }}
        />
        <Text
          style={{
            color: "#003469",
            fontsize: 16,
            fontWeight: "bold",
            paddingLeft: 10
          }}
        >
          {transactionType}
        </Text>
        <Text
          style={{
            fontsize: 18,
            fontWeight: "bold",
            paddingLeft: 10,
            color: "#333"
          }}
        >
          {amount}
        </Text>
      </View>
    </View>
    <View style={styles.dateContainer}>
      <Icon
        name="calendar-clock"
        color="#323232"
        type="material-community"
        size={14}
      />
      <Text style={styles.dateStyle}>{date}</Text>
    </View>
  </TouchableSpecific>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {
      height: 80,
      borderRadius: 5,
      overflow: "hidden",
      padding: 10,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      width: isTablet() ? "48%" : "100%"
    }
  ],
  dateContainer: {
    flexDirection: "row",
    paddingLeft: 30,
    alignItems: "center"
  },
  dateStyle: {
    paddingLeft: 10,
    color: "#323232"
  }
};
