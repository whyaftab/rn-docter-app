import React from "react";
import { View } from "react-native";
import { Text, Icon } from "react-native-elements";
import { demoStyles, colors, isTablet } from "../constant";

export const EventCard = ({ month, title, time, location, onPress, day }) => (
  <View style={styles.container}>
    <View
      style={{
        alignSelf: "center",
        flex: 0.2,
        borderRadius: 10,
        overflow: "hidden"
      }}
    >
      <View
        style={[
          styles.yearStyle,
          { backgroundColor: colors.primary, height: 30 }
        ]}
      >
        <Text
          style={{ color: "#fff", fontSize: 18, textTransform: "capitalize" }}
        >
          {month}
        </Text>
      </View>
      <View style={[styles.yearStyle, { height: 70 }]}>
        <Text style={{ color: "#fff", fontSize: 30 }}>{day}</Text>
      </View>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Icon
          name="clock-o"
          color={colors.text}
          containerStyle={{
            width: 30,
            alignItems: "flex-start"
          }}
        />
        <Text style={styles.subheading}>{time}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Icon
          name="map-marker"
          color={colors.text}
          containerStyle={{
            width: 30,
            paddingLeft: 2,
            alignItems: "flex-start"
          }}
        />
        <Text style={styles.subheading}>{location}</Text>
      </View>
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
      padding: 20,
      backgroundColor: "#fff",
      flex: isTablet() ? 0.5 : 1
    }
  ],
  yearStyle: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  detailContainer: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingLeft: 10,
    flex: 0.8
  },
  titleStyle: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
    flexWrap: "wrap"
  },
  subheading: {
    color: colors.text,
    flexWrap: "wrap"
  }
};
