import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text } from "react-native-elements";
import { CustomDropdown, InputText } from "../../../componants";
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
      <Text style={styles.title}>Test</Text>
      <Text style={styles.value}>{name}</Text>
    </View>

    <View style={styles.listItem}>
      <Text style={styles.title}>Action</Text>
      <View style={{ flexDirection: "row" }}>
        <Icon
          name="pencil"
          type="evilicon"
          size={30}
          color="green"
          onPress={onEdit}
        />
        <Icon name="trash" size={20} color="red" onPress={onDelete} />
      </View>
    </View>
  </View>
);

class Test extends Component {
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
        <View style={[styles.devider, { marginBottom: 20 }]}>
          <InputText
            containerStyle={styles.inputContainer}
            label="Total Amount (Rupees)"
          />
          <Button
            title="Add To List"
            containerStyle={{
              width: "20%",
              alignSelf: "center"
            }}
            buttonStyle={{
              borderRadius: 5
            }}
          />
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

export default Test;
