import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Text, Icon } from "react-native-elements";
import { demoStyles, colors, isTablet } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

export const AvailabiltyCard = ({
  onPress,
  name,
  type,
  availabilty,
  onPressButton
}) => (
  <TouchableSpecific onPress={onPress} style={styles.container}>
    <View style={styles.detailContainer}>
      <View style={styles.detailListItem}>
        <Icon
          color={colors.text}
          name="hospital-o"
          size={12}
          containerStyle={{
            paddingRight: 10
          }}
        />
        <Text style={styles.titleStyle}>
          {name}
          <Text style={styles.titleTypeStyle}> ({type})</Text>
        </Text>
      </View>
      <View style={styles.detailListItem}>
        <Icon
          color={colors.text}
          name="calendar"
          size={12}
          containerStyle={{
            padding: 0,
            margin: 0,
            paddingRight: 10
          }}
        />
        <Text style={styles.subStyle}>Availability</Text>

        <Icon
          name="pencil"
          type="evilicon"
          size={18}
          containerStyle={{
            paddingRight: 10,
            position: "absolute",
            right: -15,
            top: -1
          }}
          color="#67D376"
        />
      </View>
      <View style={styles.availabiltyContainer}>
        <AvailabiltyItem day="Day" week="Week" time="Time" heading />
        <FlatList
          data={availabilty}
          extraData={availabilty}
          renderItem={({ item }) => <AvailabiltyItem {...item} />}
          keyExtractor={(_, key) => key.toString()}
          listKey={(item, index) => "D" + index.toString()}
        />
      </View>
    </View>
    <View style={styles.viewTextStyle}>
      <TouchableSpecific
        onPress={onPressButton}
        style={{
          width: 100,
          transform: [{ rotate: "-90deg" }],
          position: "absolute",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Icon
          name="pencil"
          type="evilicon"
          size={18}
          containerStyle={{
            alignSelf: "center",
            padding: 0,
            margin: 0,
            transform: [{ rotate: "-90deg" }]
          }}
          iconStyle={{
            padding: 0,
            margin: 0
          }}
          color="#67D376"
        />
        <Text style={styles.callNowTextStyle}>Edit Availability</Text>
      </TouchableSpecific>
    </View>
  </TouchableSpecific>
);

const AvailabiltyItem = ({ day, week, time, heading }) => (
  <View style={styles.availabiltyDetailContainer}>
    <Text
      style={[styles.availabiltyStart, heading && styles.availabiltyHeading]}
    >
      {day}
    </Text>
    <Text
      style={[styles.availabiltyCenter, heading && styles.availabiltyHeading]}
    >
      {week}
    </Text>
    <Text style={[styles.availabiltyEnd, heading && styles.availabiltyHeading]}>
      {time}
    </Text>
  </View>
);

const styles = {
  container: [
    demoStyles.elevationStyle,
    {
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: "#fff",
      flexDirection: "row",
      width: isTablet() ? "48%" : "100%"
    }
  ],
  detailContainer: {
    flex: 0.94,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10
  },
  detailListItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10
  },
  subStyle: {
    color: "#333"
  },
  viewTextStyle: {
    flex: 0.06,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  callNowTextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12
  },
  editButtonStyle: {
    borderBottomWidth: 1,
    fontWeight: "bold",
    color: colors.primary,
    borderColor: colors.primary
  },
  availabiltyDetailContainer: {
    flexDirection: "row",
    paddingLeft: 20
  },
  availabiltyHeading: { color: "#333", fontWeight: "bold" },
  availabiltyStart: {
    flex: 0.3,
    textAlign: "left",
    color: colors.text,
    fontFamily: "Poppins"
  },
  availabiltyCenter: {
    flex: 0.2,
    textAlign: "center",
    color: colors.text,
    fontFamily: "Poppins"
  },
  availabiltyEnd: {
    flex: 0.5,
    textAlign: "right",
    color: "#333",
    fontFamily: "Poppins"
  },
  titleStyle: {
    fontSize: 18,
    color: "#333"
  },
  titleTypeStyle: {
    color: colors.text
  },
  availabiltyContainer: {
    paddingBottom: 10
  }
};
