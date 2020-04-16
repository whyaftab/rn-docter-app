import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { withTheme, Button, Text } from "react-native-elements";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Logo, InputText } from "../../componants";

class ForgotPasswordScreen extends Component {
  state = {
    heading:
      "Please enter 4 digit verification code that you received via Mobile SMS"
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
      <KeyboardAvoidingView
        style={container}
        behavior="padding"
        enabled={false}
      >
        <Logo containerStyle={logoContainer} />
        <View style={formContainer}>
          <View style={headingContainer}>
            <Text style={{ ...headingStyle, color: fontColor }}>
              {this.state.heading}
            </Text>
          </View>

          <OTPInputView
            style={{
              width: 200,
              height: 50,
              alignSelf: "center"
            }}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={{ borderColor: "#B8B8B8", borderRadius: 10 }}
            codeInputHighlightStyle={{ borderColor: primary }}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View
            style={{
              ...forgotPasswordTextStyle,
              marginBottom: 15,
              paddingTop: 10
            }}
          >
            <Text
              style={{
                fontWeight: "bold"
              }}
            >
              Code expires in:
            </Text>
            <Text
              style={{
                color: "#D31515",
                fontWeight: "bold",
                paddingLeft: 5
              }}
            >
              01:59
            </Text>
          </View>

          <Button
            onPress={() => this.props.navigation.navigate("changePassword")}
            title="CONTINUE"
            containerStyle={buttonContainerStyle}
          />
          <View style={{ justifyContent: "space-between", height: "20%" }}>
            <View style={forgotPasswordTextStyle}>
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                Didn't get code?
              </Text>
              <Text
                style={{
                  ...loginButtonStyle,
                  color: primary,
                  borderColor: primary
                }}
              >
                Resend OTP
              </Text>
            </View>
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
        </View>
      </KeyboardAvoidingView>
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
    paddingBottom: 30
  },
  loginButtonStyle: {
    borderBottomWidth: 1,
    fontWeight: "bold",
    marginLeft: 5
  }
};

export default withTheme(ForgotPasswordScreen);
