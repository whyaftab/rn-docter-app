import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { DatePicker } from "../../../componants";

class Followup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <DatePicker label="Please Visit After" />
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
export default Followup;
