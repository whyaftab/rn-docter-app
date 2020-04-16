import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { CustomDropdown } from "../../componants";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import { demoStyles, colors } from "../../constant";

class RefillScreen extends Component {
  state = {
    data: [
      {
        key: 1,
        value: "xyz"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headingStyle}>Refill or View Prescription</Text>
          <CustomDropdown label="Select Patient" data={this.state.data} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              title="Refill Prescription"
              containerStyle={{
                marginTop: 20,
                backgroundColor: colors.secondary
              }}
            />
            <Button
              title="View latest prescription"
              onPress={() =>
                this.props.navigation.navigate("refillPrescription")
              }
              containerStyle={{
                marginTop: 20
              }}
            />
          </View>
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

export default RefillScreen;
