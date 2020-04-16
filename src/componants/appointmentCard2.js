import React, { PureComponent } from "react";
import { View } from "react-native";
import { Text, CheckBox } from "react-native-elements";
import { colors } from "../constant";
import { Card } from "./Card";
import { CardListItem } from "./CardListItem";
import { TouchableSpecific } from "./TouchableSpecific";

export class AppointmentCard extends PureComponent {
  render() {
    const {
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
    } = this.props;
    return (
      <TouchableSpecific
        onPress={() => console.log("iiis")}
        onLongPress={onLongPress}
      >
        <Card style={[selectionOn && selected && styles.cardActive]}>
          <CardListItem>
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
          </CardListItem>
          <CardListItem>
            <Text style={styles.title}>Patient Name</Text>
            <Text style={styles.value}>{name}</Text>
          </CardListItem>
          <CardListItem>
            <Text style={styles.title}>Patient Type</Text>
            <Text style={styles.value}>{type}</Text>
          </CardListItem>
          <CardListItem>
            <Text style={styles.title}>Mobile Number</Text>
            <Text style={styles.value}>{number}</Text>
          </CardListItem>
          <CardListItem>
            <Text style={styles.title}>Date Time</Text>
            <Text style={styles.value}>{date}</Text>
          </CardListItem>
          <CardListItem>
            <Text style={styles.title}>Patient category</Text>
            <Text style={styles.value}>{category}</Text>
          </CardListItem>
          <CardListItem>
            <Text style={styles.title}>Major Complaints</Text>
            {complaints.length > 20 ? (
              <CompolaintWithMoreButton
                onMorePress={onMorePress}
                complaints={complaints}
              />
            ) : (
              <Text style={styles.value}>{complaints}</Text>
            )}
          </CardListItem>
        </Card>
      </TouchableSpecific>
    );
  }
}
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
