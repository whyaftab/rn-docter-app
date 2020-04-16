import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { colors } from "../../constant";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Logo } from "../../componants";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import StepThree from "./StepThree";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
  }

  _renderStep() {
    switch (this.state.currentStep) {
      case 0:
        return <StepOne onSuccess={() => this.onSuccess(0)} />;
      case 1:
        return <StepTwo onSuccess={() => this.onSuccess(1)} />;
      case 2:
        return <StepThree onSuccess={() => this.onSuccess(2)} />;
      default:
        return <StepOne />;
    }
  }

  onSuccess(step) {
    switch (step) {
      case 0:
        return this.setState({
          currentStep: 1
        });

      case 1:
        return this.setState({
          currentStep: 2
        });

      case 2:
        return this.setState({
          currentStep: 3
        });
      default:
        break;
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Logo containerStyle={styles.logoContainer} />
        <View style={styles.bodyContainer}>
          <StepIndicator
            stepCount={3}
            style={{ width: "100%" }}
            currentPosition={this.state.currentStep}
            customStyles={styles.indicatorStyle}
            labels={["Account Details", "Profile Details", "OPD Details"]}
          />
          {this._renderStep()}

          <View style={styles.forgotPasswordTextStyle}>
            <Text
              style={{
                fontWeight: "bold"
              }}
            >
              Back to
            </Text>
            <Text
              style={styles.loginButtonStyle}
              onPress={() => this.props.navigation.navigate("signIn")}
            >
              SIGN IN
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  logoContainer: {
    alignSelf: "center",
    justifyContent: "center",
    height: heightPercentageToDP("30%")
  },
  bodyContainer: {
    alignSelf: "center",
    paddingBottom: 20
  },
  forgotPasswordTextStyle: {
    alignSelf: "center",
    flexDirection: "row",
    paddingTop: 20
  },
  loginButtonStyle: {
    borderBottomWidth: 1,
    fontWeight: "bold",
    marginLeft: 5,
    color: colors.primary,
    borderColor: colors.primary
  },
  indicatorStyle: {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: colors.primary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.primary,
    stepStrokeUnFinishedColor: "#CCCCCC",
    separatorFinishedColor: colors.primary,
    separatorUnFinishedColor: "#CCCCCC",
    stepIndicatorFinishedColor: colors.primary,
    stepIndicatorUnFinishedColor: "#CCCCCC",
    stepIndicatorCurrentColor: colors.primary,
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: "transparent",
    stepIndicatorLabelFinishedColor: "transparent",
    stepIndicatorLabelUnFinishedColor: "transparent",
    labelColor: colors.text,
    labelSize: 13,
    currentStepLabelColor: colors.text
  }
};

export default SignUpScreen;
