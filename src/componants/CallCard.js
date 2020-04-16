import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Icon } from "react-native-elements";
import { demoStyles, colors, isTablet } from "../constant";

export const CallCard = ({ title, time, onPressEdit }) => (
  <View style={styles.container}>
    <View style={styles.detailContainer}>
      <View
        style={[
          styles.detailListItem,
          {
            paddingBottom: 10
          }
        ]}
      >
        <Icon
          size
          color="#333"
          name="user-o"
          size={12}
          containerStyle={{
            paddingRight: 10
          }}
        />
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={styles.detailListItem}>
        <Icon
          color={colors.Text}
          name="calendar"
          size={12}
          containerStyle={{
            paddingRight: 10
          }}
        />
        <Text style={styles.subStyle}>{time}</Text>
        <TouchableOpacity
          style={{ paddingLeft: 10, paddingRight: 10 }}
          onPress={onPressEdit}
        >
          <Text style={styles.editButtonStyle}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.viewTextStyle}>
      <Text style={styles.callNowTextStyle}>Call Now</Text>
    </View>
  </View>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {
      flexDirection: "row",
      borderRadius: 5,
      overflow: "hidden",
      flex: isTablet() ? 0.48 : 1
    }
  ],
  detailContainer: {
    flex: 0.94,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 20
  },
  detailListItem: {
    flexDirection: "row",
    alignItems: "center"
  },
  titleStyle: {
    color: "#222"
  },
  subStyle: {
    color: colors.text
  },
  viewTextStyle: {
    flex: 0.06,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  callNowTextStyle: {
    color: "#fff",
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    width: 100,
    textAlign: "center"
  },
  editButtonStyle: {
    borderBottomWidth: 1,
    fontWeight: "bold",
    color: colors.primary,
    borderColor: colors.primary
  }
};
