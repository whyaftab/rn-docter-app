import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UploadPhoto, CustomDropdown } from "../../componants";
import { Button } from "react-native-elements";
import { widthPercentageToDP } from "react-native-responsive-screen";

class CaptureRxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.9,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <UploadPhoto
            source={require("../../../assets/pendingRx.jpg")}
            heading="Upload Page 1"
            imageHeading="Page 1 of Rx"
            containerStyle={[styles.photoContainerStyle]}
          />
          <UploadPhoto
            source={require("../../../assets/pendingRx.jpg")}
            heading="Upload Page 2"
            imageHeading="Page 2 of Rx"
            containerStyle={[styles.photoContainerStyle]}
          />
          <UploadPhoto
            source={require("../../../assets/pendingRx.jpg")}
            heading="Upload Page 3"
            imageHeading="Page 3 of Rx"
            containerStyle={[styles.photoContainerStyle]}
          />
          <UploadPhoto
            heading="Upload Page 4"
            imageHeading="Page 4 of Rx"
            containerStyle={[styles.photoContainerStyle]}
          />
          <Button
            title="Preview"
            icon={{
              name: "eye",
              color: "#fff",
              size: 14,
              containerStyle: { padding: 0, margin: 0, paddingRight: 4 }
            }}
            containerStyle={{
              width: "auto",
              alignSelf: "flex-start",
              position: "absolute",
              right: 10,
              bottom: 20
            }}
            buttonStyle={{
              padding: 0,
              margin: 0,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "#7DA7D9",
              borderRadius: 0
            }}
          />
        </View>
        <View>
          <CustomDropdown
            label="Select chemist"
            data={[
              {
                value: "1"
              },
              {
                value: "2"
              },
              {
                value: "3"
              }
            ]}
          />
          <Button title="submit" containerStyle={{ paddingTop: 10 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  photoContainerStyle: {
    width: widthPercentageToDP("42%"),
    height: widthPercentageToDP("35%"),
    marginRight: 10
  }
});

export default CaptureRxScreen;
