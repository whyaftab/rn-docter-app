import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text } from "react-native-elements";
import { CustomDropdown, DatePicker, InputText } from "../../../componants";
import { demoStyles } from "../../../constant";

class Analysis extends Component {
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
        <View style={[styles.devider]}>
          <DatePicker
            containerStyle={styles.inputContainer}
            label="Total Amount (Rupees)"
          />
          <DatePicker
            containerStyle={styles.inputContainer}
            label="Total Amount (Rupees)"
          />
        </View>
        <Button
          title="Show Parameter"
          containerStyle={{
            width: "20%",
            marginTop: 20,
            marginBottom: 30,
            alignSelf: "center"
          }}
          buttonStyle={{
            borderRadius: 5
          }}
        />
        <InputText label="Parameter" />
        <Button
          title="Show Analysis"
          containerStyle={{
            width: "20%",
            marginTop: 20,
            marginBottom: 30,
            alignSelf: "center"
          }}
          buttonStyle={{
            borderRadius: 5
          }}
        />

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

export default Analysis;
