import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputText, CustomDropdown } from "../../componants";
import { Button, Icon } from "react-native-elements";

class StepThree extends Component {
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
            <InputText
              label={"OPD Name" + <Text>fsdsf</Text>}
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="OPD Type"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="OPD Address"
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="City"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText label="Fees" containerStyle={styles.inputContainer} />
            <InputText
              label="OPD Contact Number"
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Location"
              containerStyle={styles.inputContainer}
              renderAccessory={() => <Icon name="map-marker" />}
            />
          </View>
        </View>
        <Button title="Save & Submit" onPress={this.props.onSuccess} />
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

export default StepThree;
