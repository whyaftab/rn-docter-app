import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  InputText,
  CustomDropdown,
  DatePicker,
  ModalCheckbox,
  UploadPhoto
} from "../../componants";
import { Button, CheckBox } from "react-native-elements";

class StepTwo extends Component {
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
      <View>
        <View style={styles.formContainer}>
          <View style={styles.devider}>
            <CustomDropdown
              label="Gender"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
            <DatePicker
              label="Date of birth"
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <CheckBox
              title="Self-Pharmacy"
              containerStyle={{
                marginTop: 10,
                backgroundColor: "transparent",
                borderWidth: 0,
                alignItems: "center",
                justifyContent: "center"
              }}
              textStyle={{
                fontWeight: "normal",
                color: "black"
              }}
            />
          </View>
          <View style={styles.devider}>
            <CustomDropdown
              label="Practice Type"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />

            <DatePicker
              label="Starting Practice"
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <CustomDropdown
              label="Medical Council Reg. State"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />

            <InputText
              label="Medical Council Reg Number"
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <CustomDropdown
              label="Country"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />

            <InputText label="State" containerStyle={styles.inputContainer} />
          </View>
          <View style={styles.devider}>
            <CustomDropdown
              label="Town/City"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />

            <InputText label="Pincode" containerStyle={styles.inputContainer} />
          </View>

          <View style={styles.devider}>
            <InputText
              label="Permanent Address"
              containerStyle={[styles.inputContainer, { width: "100%" }]}
            />
          </View>
          <View style={styles.devider}>
            <CustomDropdown
              label="Specialization"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />

            <CustomDropdown
              label="Super Specialization"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <CustomDropdown
              label="High Qualification"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />

            <InputText label="Other" containerStyle={styles.inputContainer} />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Aadhar Card Number"
              containerStyle={styles.inputContainer}
            />
            <InputText
              label="Pan Number"
              containerStyle={styles.inputContainer}
            />
          </View>

          <View style={[styles.devider, { marginTop: 20, marginBottom: 20 }]}>
            <UploadPhoto
              containerStyle={styles.imageContainer}
              heading="Upload Photo"
            />
            <UploadPhoto
              containerStyle={styles.imageContainer}
              heading="Upload Photo"
            />
          </View>
        </View>
        <Button title="continue" onPress={this.props.onSuccess} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  devider: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center"
  },
  inputContainer: {
    width: "45%",
    paddingBottom: 10
  },
  formContainer: {
    paddingTop: 20,
    paddingBottom: 20
  },
  imageContainer: {
    width: "45%",
    height: 300,
    marginBottom: 0
  }
});

export default StepTwo;
