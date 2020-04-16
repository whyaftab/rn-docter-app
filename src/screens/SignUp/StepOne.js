import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputText, CustomDropdown } from "../../componants";
import { Button } from "react-native-elements";

class StepOne extends Component {
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
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.formContainer}>
          <InputText
            label="Doctor Name"
            containerStyle={styles.inputContainer}
          />
          <CustomDropdown
            label="Security Question"
            data={this.state.dropdown}
            containerStyle={styles.inputContainer}
          />
          <InputText label="Doctor ID" containerStyle={styles.inputContainer} />
          <InputText
            label="Security Answer"
            containerStyle={styles.inputContainer}
          />
          <InputText label="Password" containerStyle={styles.inputContainer} />
          <InputText
            label="Transaction SMS Number"
            containerStyle={styles.inputContainer}
          />
          <InputText
            label="Email Address"
            containerStyle={styles.inputContainer}
          />
          <InputText
            label="Referral Code"
            containerStyle={styles.inputContainer}
          />
        </View>
        <Button title="continue" onPress={this.props.onSuccess} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  devider: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputContainer: {
    width: "48%",
    paddingBottom: 10
  },
  formContainer: {
    padding: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

export default StepOne;
