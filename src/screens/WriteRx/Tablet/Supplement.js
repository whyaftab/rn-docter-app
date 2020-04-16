import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text } from "react-native-elements";
import { CustomDropdown } from "../../../componants";
import { demoStyles } from "../../../constant";

const ListItem = ({
  sno,
  name,
  frequency,
  meal,
  days,
  dosage,
  remark,
  onDelete,
  onEdit
}) => (
  <View style={styles.card}>
    <View style={styles.listItem}>
      <Text style={styles.title}>Sr#</Text>
      <Text style={styles.value}>{sno}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Drug Name</Text>
      <Text style={styles.value}>{name}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Frequency</Text>
      <Text style={styles.value}>{frequency}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>B/A/W Meal</Text>
      <Text style={styles.value}>{meal} Times</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Number of days</Text>
      <Text style={styles.value}>{days}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Dosage</Text>
      <Text style={styles.value}>{dosage}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Remark</Text>
      <Text style={styles.value}>{remark}</Text>
    </View>
    <View style={styles.listItem}>
      <Text style={styles.title}>Action</Text>
      <View style={{ flexDirection: "row" }}>
        <Icon
          name="pencil"
          type="evilicon"
          size={20}
          color="green"
          onPress={onEdit}
        />
        <Icon name="trash" size={14} color="red" onPress={onDelete} />
      </View>
    </View>
  </View>
);

class Supplement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: [
        {
          value: "1"
        },
        {
          value: "2"
        },
        {
          value: "3"
        }
      ],
      data: [
        {
          sno: "1",
          name: "Lorem ipsum",
          frequency: "yes",
          meal: 3,
          days: 12,
          dosage: 2,
          remark: "lorem ipsum lorem"
        }
      ]
    };
  }

  render() {
    return (
      <View>
        <CustomDropdown label="Suppliment" />
        <Button
          title="Add To List"
          containerStyle={{
            width: "20%",
            marginTop: 20,
            alignSelf: "center"
          }}
          buttonStyle={{
            borderRadius: 5
          }}
        />
        <View style={styles.billContainer}>
          <Text style={{ fontWeight: "bold", color: "#333", fontSize: 20 }}>
            Total Quantity: 0
          </Text>
          <Text style={{ fontWeight: "bold", color: "#333", fontSize: 20 }}>
            Total Amount: 0
          </Text>
        </View>
        <ListItem {...this.state.data[0]} />

        <View style={[styles.devider, { width: "100%", marginTop: 20 }]}>
          <Button
            title="Back"
            onPress={this.props.goBack}
            containerStyle={{
              width: "20%"
            }}
            buttonStyle={{
              backgroundColor: "#C42B0A",
              borderRadius: 5
            }}
          />
          <Button
            title="Save & next"
            onPress={this.props.onSuccess}
            buttonStyle={{
              backgroundColor: "#12B123",
              borderRadius: 5
            }}
            containerStyle={{
              width: "20%"
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  billContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20
  },
  card: {
    ...demoStyles.elevationStyle,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  title: {},
  value: {
    color: "#333"
  },
  devider: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center"
  },
  inputContainer: {
    width: "48%",
    paddingBottom: 10
  }
});

export default Supplement;
