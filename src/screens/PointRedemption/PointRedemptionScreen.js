import React, { Component } from "react";
import { View } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import {
  InputText,
  ModalCheckbox,
  AuthenticationResponisiveView,
  CustomDropdown
} from "../../componants";

class PointRedemptionScreen extends Component {
  state = {
    data: [
      {
        key: 1,
        value: "Banana"
      },
      {
        key: 2,
        value: "Mango"
      },
      {
        key: 3,
        value: "Pear"
      }
    ]
  };
  render() {
    return (
      <AuthenticationResponisiveView>
        <View style={styles.container}>
          <View style={styles.cmeSection}>
            <CustomDropdown label="Select Speciality" data={this.state.data} />
            <Button
              title="Show CME Calculator"
              titleStyle={{ textTransform: "none" }}
              onPress={() => this.props.navigation.navigate("cmeCalendar")}
            />
          </View>
          <View style={{ flex: 0.08 }} />
          <View style={styles.submitSection}>
            <CheckBox
              title="Service fees"
              checked
              containerStyle={{
                backgroundColor: "transparent",
                borderWidth: 0,
                elevation: 0
              }}
            />
            <CheckBox
              title="Accumulate points for CME participation"
              containerStyle={{
                backgroundColor: "transparent",
                borderWidth: 0,
                elevation: 0
              }}
            />
            <Button
              title="Submit"
              containerStyle={{ width: "100%", marginTop: 20 }}
            />
          </View>
        </View>
      </AuthenticationResponisiveView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20
  },
  cmeSection: {
    flex: 0.3,
    justifyContent: "space-evenly"
  },
  submitSection: {
    flex: 0.4,
    justfyContent: "flex-end",
    alignItems: "flex-start"
  }
};

export default PointRedemptionScreen;
