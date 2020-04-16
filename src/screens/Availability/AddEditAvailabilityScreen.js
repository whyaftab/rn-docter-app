import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { InputText, CustomDropdown } from "../../componants";
import { Button, Icon } from "react-native-elements";

class AddEditAvailabilityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      <ScrollView>
        <View
          style={{
            padding: 20,
            paddingTop: 0
          }}
        >
          <InputText label="OPD Name" />
          <CustomDropdown label="OPD Type" data={this.state.data} />
          <InputText
            label="Choose Location"
            renderAccessory={() => <Icon name="map-marker" color="#333" />}
          />
          <InputText label="OPD Address" />
          <CustomDropdown label="City" data={this.state.data} />
          <InputText label="Fees" />
          <InputText label="OPD Contact Number" />
          <Button title="Submit" containerStyle={{ paddingTop: 10 }} />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

export default AddEditAvailabilityScreen;
