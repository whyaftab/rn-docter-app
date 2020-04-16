import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { PromptModal, InputText } from "../../componants";
import { demoStyles } from "../../constant";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

class WalkInPatientScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headingStyle}>Find or Create New Patient</Text>
          <InputText label="Enter Patient Mobile Number" />
          <Button
            title="Submit"
            onPress={() =>
              this.props.navigation.navigate("walkinRegisteration")
            }
            containerStyle={{
              marginTop: 20
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  innerContainer: {
    ...demoStyles.elevationStyle,
    borderRadius: 10,
    width: widthPercentageToDP("40%"),
    height: heightPercentageToDP("40%"),
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#fff"
  },
  headingStyle: {
    fontSize: 20
  }
});

export default WalkInPatientScreen;
