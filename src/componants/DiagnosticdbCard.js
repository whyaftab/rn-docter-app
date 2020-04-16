import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { colors, cardStyle } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

export const DiagnosticdbCard = ({
  sno,
  name,
  number,
  onPress,
  onLongPress
}) => (
  <TouchableSpecific
    onPress={onPress}
    onLongPress={onLongPress}
    style={cardStyle}
  >
    <View style={styles.listItem}>
      <Text style={styles.title}>Sr#</Text>
      <Text style={styles.value}>{sno}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Test Name</Text>
      <Text style={styles.value}>{name}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Value Point</Text>
      <Text style={styles.value}>{number}</Text>
    </View>
  </TouchableSpecific>
);

const styles = {
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  title: {
    color: colors.text
  },
  value: {
    color: "#323232"
  },
  moreButton: {
    color: colors.primary
  }
};
