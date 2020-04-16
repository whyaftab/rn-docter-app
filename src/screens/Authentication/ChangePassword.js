import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { withTheme, Button, Text } from "react-native-elements";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Logo,
  InputText,
  AuthenticationResponisiveView
} from "../../componants";

class ChangePassword extends Component {
  state = {
    heading: "Please change your password."
  };

  render() {
    const {
      colors: { pink, fontColor, primary }
    } = this.props.theme;
    const {
      container,
      headingStyle,
      formContainer,
      logoContainer,
      forgotPasswordTextStyle,
      headingContainer,
      buttonContainerStyle,
      loginButtonStyle
    } = styles;

    return (
      <AuthenticationResponisiveView>
        <KeyboardAvoidingView
          style={container}
          behavior="padding"
          keyboardVerticalOffset={100}
          enabled
        >
          <Logo containerStyle={logoContainer} />
          <View style={formContainer}>
            <View style={headingContainer}>
              <Text style={{ ...headingStyle, color: fontColor }}>
                {this.state.heading}
              </Text>
            </View>
            <InputText label="New Password" secureTextEntry />
            <InputText label="Confirm Password" secureTextEntry />

            <Button title="SUBMIT" containerStyle={buttonContainerStyle} />
            <View style={forgotPasswordTextStyle}>
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                Back to
              </Text>
              <Text
                style={{
                  ...loginButtonStyle,
                  color: primary,
                  borderColor: primary
                }}
                onPress={() => this.props.navigation.navigate("signIn")}
              >
                SIGN IN
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </AuthenticationResponisiveView>
    );
  }
}
const styles = {
  container: {
    padding: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  headingStyle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center"
  },
  logoContainer: {
    height: hp("30%"),
    alignItems: "center",
    justifyContent: "center"
  },
  headingContainer: {
    paddingBottom: 30,
    justifyContent: "center"
  },
  formContainer: {
    height: hp("70%"),
    width: "100%"
  },
  forgotPasswordTextStyle: {
    alignSelf: "center",
    flexDirection: "row"
  },
  buttonContainerStyle: {
    paddingTop: 20,
    paddingBottom: 40
  },
  loginButtonStyle: {
    borderBottomWidth: 1,
    fontWeight: "bold",
    marginLeft: 5
  }
};

export default withTheme(ChangePassword);
