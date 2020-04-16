import React from "react";
import { View } from "react-native";
import { Card, Text, CheckBox } from "react-native-elements";
import { colors, isTablet, demoStyles, cardStyle } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

export const AppointmentCard = ({
  sno,
  name,
  type,
  number,
  date,
  category,
  complaints,
  onMorePress,
  selected,
  onPress,
  selectionOn,
  onLongPress
}) => (
  <TouchableSpecific
    onPress={onPress}
    onLongPress={onLongPress}
    style={[cardStyle, selectionOn && selected && styles.cardActive]}
  >
    <View style={demoStyles.cardListItem}>
      <Text style={styles.title}>Sr#</Text>
      <Text style={styles.value}>{sno}</Text>

      {selectionOn && (
        <CheckBox
          checked={selected}
          containerStyle={{
            position: "absolute",
            top: -15,
            left: 16
          }}
        />
      )}
    </View>
    <View style={demoStyles.cardListItem}>
      <Text style={styles.title}>Patient Name</Text>
      <Text style={styles.value}>{name}</Text>
    </View>
    <View style={demoStyles.cardListItem}>
      <Text style={styles.title}>Patient Type</Text>
      <Text style={styles.value}>{type}</Text>
    </View>
    <View style={demoStyles.cardListItem}>
      <Text style={styles.title}>Mobile Number</Text>
      <Text style={styles.value}>{number}</Text>
    </View>
    <View style={demoStyles.cardListItem}>
      <Text style={styles.title}>Date Time</Text>
      <Text style={styles.value}>{date}</Text>
    </View>
    <View style={demoStyles.cardListItem}>
      <Text style={styles.title}>Patient category</Text>
      <Text style={styles.value}>{category}</Text>
    </View>
    <View style={demoStyles.cardListItem}>
      <Text style={styles.title}>Major Complaints</Text>
      {complaints.length > 20 ? (
        <CompolaintWithMoreButton
          onMorePress={onMorePress}
          complaints={complaints}
        />
      ) : (
        <Text style={styles.value}>{complaints}</Text>
      )}
    </View>
  </TouchableSpecific>
);

const CompolaintWithMoreButton = ({ onMorePress, complaints }) => (
  <View style={styles.valueContainer}>
    <Text style={styles.value}>{complaints.substring(0, 19)}...</Text>
    <Text style={styles.moreButton} onPress={onMorePress}>
      More
    </Text>
  </View>
);

const styles = {
  cardActive: {
    backgroundColor: colors.selectedCardColor
  },
  title: {
    color: colors.text
  },
  value: {
    color: "#323232"
  },
  valueContainer: {
    flexDirection: "row"
  },
  moreButton: {
    color: colors.primary
  }
};
