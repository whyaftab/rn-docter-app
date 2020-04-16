import React, { Component } from "react";
import { View, Text } from "react-native";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validate() {
    for (let i = 0; i < this.props.children.length; i++) {
      const childName = "child" + i;
      const validator = this.refs[childName].validator();
      console.log(validator);
    }
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        ref: `child${index}`
      })
    );

    return (
      <View style={[{ width: "100%" }, this.props.containerStyle]}>
        {children}
      </View>
    );
  }
}
