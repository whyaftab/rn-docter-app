import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";
import { PromptModal, DatePicker } from "../../componants";
import { colors } from "../../constant";

const Item = ({ title, value, titleStyle, onPress }) => (
  <View style={styles.textContainerStyle}>
    <Text style={[styles.titleStyle, titleStyle]} onPress={onPress}>
      {title}
    </Text>
    <Text style={styles.valueStyle}>{value}</Text>
  </View>
);

class WorkflowScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workfolwFilterVisible: false
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      workflowFilterToggle: this.workflowFilterToggle.bind(this)
    });
  }

  workflowFilterToggle = () => {
    this.setState(prev => ({
      workfolwFilterVisible: !prev.workfolwFilterVisible
    }));
  };

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Card containerStyle={styles.containerStyle}>
          <Item title="Appointments" value="30" />
          <Item title="Appointments Confirmation" value="12" />
          <Item title="SMS Serios" value="10" />
          <Item title="SMS Normal" value="0" />
          <Item title="VOIP Request" value="0" />
          <Item
            title="Video Call request"
            value="0"
            titleStyle={{
              color: colors.primary
            }}
            onPress={() => this.props.navigation.navigate("callList")}
          />
          <Item title="Diagnostic Report Pending" value="0" />
          <Item title="Uploaded RX" value="0" />
          <Item title="Workflow Prescription Approval" value="0" />
          <Item title="Refill Prescription Approval" value="0" />
        </Card>
        <PromptModal
          heading="Filter"
          visible={this.state.workfolwFilterVisible}
          onSubmit={this.workflowFilterToggle}
          onCancel={this.workflowFilterToggle}
        >
          <View style={{ padding: 40, paddingTop: 0 }}>
            <DatePicker label="Date from" />
            <DatePicker label="Date to" />
          </View>
        </PromptModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: { width: "90%" },
  textContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  titleStyle: {
    width: "30%",
    textAlign: "right",
    fontSize: 16
  },
  valueStyle: {
    width: "10%",
    textAlign: "right",
    color: "#333",
    fontSize: 16
  }
});

export default WorkflowScreen;
