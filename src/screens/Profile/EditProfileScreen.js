import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { UploadPhoto } from "../../componants";

class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20
        }}
      >
        <UploadPhoto heading="upload doctor picture" />
        <UploadPhoto heading="upload doctor picture" />
        <UploadPhoto heading="upload doctor picture" />
        <Button title="Submit" />
      </View>
    );
  }
}

export default EditProfileScreen;
