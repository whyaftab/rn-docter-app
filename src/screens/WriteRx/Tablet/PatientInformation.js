import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  InputText,
  CustomDropdown,
  DatePicker,
  UploadPhoto
} from "../../../componants";
import { Button } from "react-native-elements";

class PatientInformation extends Component {
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
      <View style={styles.formContainer}>
        <View style={styles.devider}>
          <InputText
            label="Patient Information"
            containerStyle={styles.inputContainer}
          />
          <InputText
            label="Patient Mobile Number"
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.devider}>
          <InputText
            label="Address Line 1"
            containerStyle={styles.inputContainer}
          />
          <InputText
            label="Address Line 2"
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.devider}>
          <DatePicker
            label="Date of birth"
            containerStyle={styles.inputContainer}
          />

          <CustomDropdown
            label="Gender"
            data={this.state.dropdown}
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.devider}>
          <CustomDropdown
            label="Smoker"
            data={this.state.dropdown}
            containerStyle={styles.inputContainer}
          />

          <CustomDropdown
            label="Alcholic"
            data={this.state.dropdown}
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.devider}>
          <InputText
            label="Adhaar Number"
            containerStyle={styles.inputContainer}
          />
          <InputText
            label="Pan Card Number"
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={[styles.devider, { marginTop: 20, marginBottom: 20 }]}>
          <UploadPhoto
            containerStyle={styles.imageContainer}
            heading="Upload Photo"
          />
        </View>
        <Button title="Save & Next" onPress={this.props.onSuccess} />
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
  },
  formContainer: {
    justifyContent: "center"
  },
  imageContainer: {
    width: "48%",
    height: 300,
    marginBottom: 0
  }
});

export default PatientInformation;
