import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { InputText, CustomDropdown, ModalCheckbox } from "../../../componants";

class Observation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.formContainer}>
          <View style={styles.devider}>
            <CustomDropdown
              label="Weight (Kg)"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
            <View style={[styles.devider, { paddingBottom: 10, width: "48%" }]}>
              <CustomDropdown
                label="Height (feet)"
                data={this.state.dropdown}
                containerStyle={[styles.inputContainer, { paddingBottom: 0 }]}
              />
              <CustomDropdown
                label="Height (inch)"
                data={this.state.dropdown}
                containerStyle={[styles.inputContainer, { paddingBottom: 0 }]}
              />
            </View>
          </View>

          <View style={styles.devider}>
            <InputText
              label="Temperature (F)"
              containerStyle={styles.inputContainer}
            />
            <View style={[styles.devider, { paddingBottom: 10, width: "48%" }]}>
              <InputText
                label="BP (mm Hg) Systolic"
                containerStyle={[styles.inputContainer, { paddingBottom: 0 }]}
              />
              <InputText
                label="Diastolic"
                containerStyle={[styles.inputContainer, { paddingBottom: 0 }]}
              />
            </View>
          </View>

          <View style={styles.devider}>
            <InputText
              label="Fasting Blood Sugar (mmol/L)"
              containerStyle={styles.inputContainer}
            />
            <InputText
              label="Postprandial Glucose (mmol/l)"
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Fasting Blood Sugar (mmol/L)"
              containerStyle={styles.inputContainer}
            />
            <InputText
              label="Postprandial Glucose (mmol/l)"
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Random Glucose (mmol/L)"
              containerStyle={styles.inputContainer}
            />
            <InputText
              label="Pulse (/min)"
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <InputText
              label="General Observation"
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="Any ADR Observed"
              data={this.state.data}
              containerStyle={styles.inputContainer}
            />
          </View>
          <Text style={{ padding: 10, paddingLeft: 0 }}>Pain Score</Text>
          <View style={[styles.devider, { paddingBottom: 20 }]}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox checked />
              <Text style={{ color: "#006400" }}>No Pain</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#008000" }}>Mild</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#cebe07" }}>Moderate</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#ff8000" }}>Severe</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#ff4500" }}>Very Severe</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#8b0000" }}>Worst Pain</Text>
            </View>
          </View>
          <Text style={{ padding: 10, paddingLeft: 0 }}>Infiamation</Text>
          <View style={[styles.devider, { paddingBottom: 20 }]}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox checked />
              <Text style={{ color: "#006400" }}>No Pain</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#008000" }}>Mild</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#cebe07" }}>Moderate</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#ff8000" }}>Severe</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#ff4500" }}>Very Severe</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ModalCheckbox />
              <Text style={{ color: "#8b0000" }}>Worst Pain</Text>
            </View>
          </View>
          <View style={[styles.devider, { width: "100%", marginTop: 20 }]}>
            <Button
              title="Back"
              onPress={this.props.goBack}
              containerStyle={{
                width: "20%"
              }}
              buttonStyle={{
                backgroundColor: "#C42B0A",
                borderRadius: 5
              }}
            />
            <Button
              title="Add medical history"
              onPress={this.props.onSuccess}
              buttonStyle={{ borderRadius: 5 }}
            />
            <Button
              title="Save and next"
              onPress={this.props.onSuccess}
              buttonStyle={{
                backgroundColor: "#12B123",
                borderRadius: 5
              }}
              containerStyle={{
                width: "20%"
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  devider: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center"
  },
  inputContainer: {
    width: "48%",
    paddingBottom: 10
  },
  formContainer: {
    justifyContent: "center",
    paddingBottom: 40
  }
});

export default Observation;
