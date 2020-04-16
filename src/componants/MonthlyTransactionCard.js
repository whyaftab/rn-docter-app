import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { demoStyles, colors, isTablet } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

export const MonthlyTransactionCard = ({
  year,
  totalPoint,
  redeemedPoint,
  balancePoint,
  onPress,
  month
}) => (
  <TouchableSpecific onPress={onPress} style={styles.container}>
    <View
      style={{
        flex: 0.35
      }}
    >
      <View style={[styles.yearStyle, { backgroundColor: colors.primary }]}>
        <Text
          style={{ color: "#fff", fontSize: 18, textTransform: "capitalize" }}
        >
          {month}
        </Text>
      </View>
      <View style={styles.yearStyle}>
        <Text style={{ color: "#fff", fontSize: 18 }}>{year}</Text>
      </View>
    </View>
    <View style={styles.detailContainer}>
      <View style={styles.detailListItem}>
        <Text style={styles.titleStyle}>Total Point Earned</Text>
        <Text style={styles.countStyle}>{totalPoint}</Text>
      </View>
      <View style={styles.detailListItem}>
        <Text style={styles.titleStyle}>Points Redeemed</Text>
        <Text style={styles.countStyle}>{redeemedPoint}</Text>
      </View>
      <View style={styles.detailListItem}>
        <Text style={styles.titleStyle}>Balance Points</Text>
        <Text style={styles.countStyle}>{balancePoint}</Text>
      </View>
    </View>
    <View style={styles.viewTextStyle}>
      <Text
        style={{
          color: "#fff",
          transform: [{ rotate: "-90deg" }],
          position: "absolute",
          width: 100,
          textAlign: "center"
        }}
      >
        View
      </Text>
    </View>
  </TouchableSpecific>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {
      flexDirection: "row",
      height: 100,
      borderRadius: 5,
      overflow: "hidden",
      width: isTablet() ? "48%" : "100%"
    }
  ],
  yearStyle: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%"
  },
  detailContainer: {
    flex: 0.59,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10
  },
  detailListItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleStyle: {},
  countStyle: {
    color: "#333"
  },
  viewTextStyle: {
    flex: 0.06,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  }
};
