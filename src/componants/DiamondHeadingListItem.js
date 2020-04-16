import React from "React";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { colors } from "../constant";

export const DiamondHeadingListItem = ({ title, count }) => (
  <View style={styles.headLine}>
    <Text style={styles.headLineHeading}>{title}</Text>
    <Text style={styles.headLineAmount}>{count}</Text>
  </View>
);

const styles = {
  headingContainer: {
    width: "100%",
    height: "70%"
  },
  imageBackgroundStyle: {
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  headLine: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headLineHeading: {
    textTransform: "capitalize",
    color: "#fff"
  },
  headLineAmount: {
    color: colors.green
  }
};
