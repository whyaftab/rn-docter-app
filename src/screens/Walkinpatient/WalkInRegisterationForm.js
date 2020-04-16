import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { InputText, CustomDropdown } from "../../componants";

class WalkInRegisterationForm extends Component {
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.formContainer}>
          <View style={styles.devider}>
            <CustomDropdown
              label="Patient Type"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="Select OPD"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <CustomDropdown
              label="Select Pharmacy"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="Category"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Full Name"
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="Gender"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Mobile Number"
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="MR/MISS/MRS. already exist. Existing is your"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Mobile Number"
              containerStyle={styles.inputContainer}
            />
          </View>
        </View>
        <Button
          title="Create Appointment"
          onPress={this.props.onSuccess}
          containerStyle={{ width: "90%" }}
        />
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
    width: "45%",
    paddingBottom: 10
  },
  formContainer: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default WalkInRegisterationForm;
