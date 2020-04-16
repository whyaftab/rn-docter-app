import React, { Component } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { TextField } from "react-native-material-textfield";

export class InputText extends Component {
  state = {
    visibleEyeEnable: false
  };

  _renderVisibleEye() {
    if (this.props.secureTextEntry && !this.state.visibleEyeEnable) {
      return (
        <Icon
          type="font-awesome"
          name="eye-slash"
          onPress={this.visibleEyePress}
          color="#8C8C8C"
          containerStyle={styles.eyeStyle}
        />
      );
    } else if (this.state.visibleEyeEnable) {
      return (
        <Icon
          type="font-awesome"
          name="eye"
          onPress={this.visibleEyePress}
          color="#8C8C8C"
          containerStyle={styles.eyeStyle}
        />
      );
    }
    return null;
  }

  visibleEyePress = () => {
    this.setState(prev => ({
      visibleEyeEnable: !prev.visibleEyeEnable
    }));
  };

  _renderAccessory() {
    if (this.props.secureTextEntry) {
      return this._renderVisibleEye();
    } else if (this.props.renderAccessory) {
      return this.props.renderAccessory();
    }
    return null;
  }

  validateChanges = text => {
    return this.props.onError(this.validator(text));
  };

  validator = text => {
    const { name, validators, onError, value } = this.props;

    const error = [];

    //assign value on external validation via form component
    if (!text && value) {
      text = value;
    }

    if (validators && Object.keys(validators).length) {
      if ("required" in validators) {
        if (!text) {
          return { name, errors: ["This field is required"] };
        }
      } else if ("nullable" in validators && !text) {
        return { name, errors: [] };
      }
      if ("max" in validators) {
        if (text.length > validators.max) {
          return {
            name,
            errors: ["Max length for this field is" + validators.max]
          };
        }
      }
      if ("min" in validators) {
        if (text.length < validators.min) {
          return {
            name,
            errors: ["Min length for this field is" + validators.min]
          };
        }
      }
      if ("numeric" in validators) {
        if (!isNaN(parseFloat(text)) && isFinite(text)) {
          return {
            name,
            errors: ["Invalid number!"]
          };
        }
      }
    }
    return { name, errors: [] };
  };

  render() {
    const props = {
      ...this.props,
      secureTextEntry:
        this.props.secureTextEntry && !this.state.visibleEyeEnable
    };

    const { name, validators, errors } = props;

    return (
      <TextField
        // error={(name in errors && errors[name][0]) || ""}
        // // maxLength={validators && "max" in validators && validators.max}
        // onChangeText={this.validateChanges}
        ref="myInputCustom"
        baseColor="#333"
        tintColor="#848484"
        labelTextStyle={{
          fontFamily: "Poppins"
        }}
        titleTextStyle={{
          fontFamily: "Poppins"
        }}
        renderAccessory={() => this._renderAccessory()}
        {...props}
      />
    );
  }
}

const styles = {
  eyeStyle: {}
};
