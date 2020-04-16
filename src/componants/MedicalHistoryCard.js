import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { colors } from "../constant";

export const MedicalHistoryCard = ({ sno, name, date, description, type }) => (
  <View style={styles.card}>
    <View style={styles.listItem}>
      <Text style={styles.title}>Sr#</Text>
      <Text style={styles.value}>{sno}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Medicine History Type</Text>
      <Text style={styles.value}>{type}</Text>
    </View>

    <View style={styles.listItem}>
      <Text style={styles.title}>Medicine History Name</Text>
      <Text style={styles.value}>{name}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Start From</Text>
      <Text style={styles.value}>{date}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Start From</Text>
      <Text style={styles.value}>{description}</Text>
    </View>
  </View>
);

const styles = {
  card: {
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.borderColor,
    padding: 20,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
    borderRadius: 10
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20
  },
  title: {
    color: colors.text,
    fontSize: 18
  },
  value: {
    color: "#323232",
    fontSize: 18
  }
};
