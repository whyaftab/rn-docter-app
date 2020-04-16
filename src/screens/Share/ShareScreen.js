import React, { Component } from "react";
import { Image, View } from "react-native";
import { colors } from "../../constant";
import { Button, Text } from "react-native-elements";

class ShareScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={styles.logo}
            source={require("../../../assets/sharelogo.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headingStyle}>
            Invite your friends to get free 30 points
          </Text>
          <Text
            style={{
              textAlign: "center",
              padding: 20,
              paddingTop: 0
            }}
          >
            Invite friends on Cerdoc and after they join, both of you will get
            30 points which is redeemable on everything.
          </Text>
        </View>
        <View style={styles.invitationContainer}>
          <Text style={styles.headingStyle}>
            Tap on invitation code to copy
          </Text>
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
            title="FAAWDD"
          />
        </View>
        <View
          style={{
            padding: 30,
            flex: 0.1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={styles.shareContainerStyle}>
            <Image
              source={require("../../../assets/sharecontact.png")}
              style={styles.shareIconStyle}
            />
            <Image
              source={require("../../../assets/sharefacebook.png")}
              style={styles.shareIconStyle}
            />
            <Image
              source={require("../../../assets/sharewhatsapp.png")}
              style={styles.shareIconStyle}
            />
            <Image
              source={require("../../../assets/shareemail.png")}
              style={styles.shareIconStyle}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    height: 240,
    width: 300
  },
  textContainer: {
    flex: 0.2
  },
  headingStyle: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 10
  },
  invitationContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    borderRadius: 0,
    backgroundColor: "#CBCBCB",
    height: 40,
    width: 160
  },
  buttonTitleStyle: {
    textTransform: "uppercase",
    color: "#333",
    fontSize: 18,
    textAlign: "left"
  },
  shareContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300
  },
  shareIconStyle: {
    height: 60,
    width: 60
  }
};

export default ShareScreen;
