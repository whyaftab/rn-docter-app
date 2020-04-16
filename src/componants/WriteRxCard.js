import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { colors } from "../constant";

export const WriteRxCard = ({ sno, name, date, number, onPress }) => (
  <View style={styles.card}>
    <View style={styles.listItem}>
      <Text style={styles.title}>Sr#</Text>
      <Text style={styles.value}>{sno}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Patient Name</Text>
      <Text style={styles.value}>{name}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Mobile Number</Text>
      <Text style={styles.value}>{number}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Date</Text>
      <Text style={styles.value}>{date}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Prescribe</Text>
      <Button
        title="Records"
        icon={{
          type: "evilicon",
          name: "pencil",
          size: 20,
          containerStyle: { padding: 0, margin: 0, paddingRight: 4 }
        }}
        containerStyle={{ padding: 0, margin: 0 }}
        buttonStyle={{
          padding: 0,
          margin: 0,
          borderRadius: 0,
          paddingLeft: 10,
          paddingRight: 10,
          paddigTop: 5,
          paddingBottom: 5
        }}
        onPress={onPress}
      />
    </View>
  </View>
);

const styles = {
  card: {
    height: 200,
    justifyContent: "space-between",
    border: 1,
    borderColor: colors.borderColor,
    padding: 20,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: "#fff",
    width: "49%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between"
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
