import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Button, withTheme } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import {
  Logo,
  InputText,
  AuthenticationResponisiveView,
  Form
} from "../../componants";
import { isTablet } from "../../constant";
import { updateLoginActionProps } from "../../actions/loginActions";

class Login extends Component {
  onError = ({ name, errors }) => {
    const modError = { ...this.props.errors, [name]: errors };
    this.props.updateLoginActionProps("errors", modError);
  };

  onSubmit() {
    this.refs.myForm.validate();
    console.log("erros", this.props.errors);
  }

  render() {
    const {
      colors: { fontColor, text }
    } = this.props.theme;
    const {
      container,
      headingStyle,
      formContainer,
      logoContainer,
      forgotPasswordTextStyle,
      headingContainer,
      buttonContainerStyle
    } = styles;

    const { errors } = this.props;

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
              <Text style={{ ...headingStyle, color: fontColor }}>Hi,</Text>
              <Text style={{ ...headingStyle, color: fontColor }}>
                Welcome back!
              </Text>
            </View>
            <Form ref="myForm">
              <InputText
                name="username"
                validators={{ required: true }}
                label="Username"
                errors={errors}
                onError={this.onError}
              />
              <InputText
                name="password"
                validators={{ required: true }}
                secureTextEntry
                label="Password"
                errors={errors}
                onError={this.onError}
              />
            </Form>
            <Button
              title="SIGN IN"
              onPress={() => this.onSubmit()}
              containerStyle={buttonContainerStyle}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "60%",
                alignSelf: "center"
              }}
            >
              <Text
                style={{ ...forgotPasswordTextStyle, color: text }}
                onPress={() => this.props.navigation.navigate("forgotPassword")}
              >
                Forgot Password?
              </Text>
              {isTablet() && (
                <Text
                  style={{ ...forgotPasswordTextStyle, color: text }}
                  onPress={() => this.props.navigation.navigate("signUp")}
                >
                  Create Account
                </Text>
              )}
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
    fontSize: 30,
    fontWeight: "500"
  },
  logoContainer: {
    height: hp("30%"),
    alignItems: "center",
    justifyContent: "center"
  },
  headingContainer: {
    paddingBottom: 30
  },
  formContainer: {
    height: hp("70%"),
    width: "100%"
  },
  forgotPasswordTextStyle: {
    alignSelf: "center",
    fontWeight: "bold"
  },
  buttonContainerStyle: {
    paddingTop: 20,
    paddingBottom: 30
  }
};

const mapStateToProps = state => {
  const { errors } = state.login;
  return { errors };
};

export default connect(
  mapStateToProps,
  { updateLoginActionProps }
)(withTheme(Login));
