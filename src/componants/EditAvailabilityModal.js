import React from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Text, CheckBox, ThemeProvider } from "react-native-elements";
import { PromptModal } from "./PromptModal";
import { DatePicker } from "./DatePicker";
import { CustomDropdown } from "./CustomDropdown";

const data = [
  {
    value: "Monday"
  },
  {
    value: "Tuesday"
  },
  {
    value: "Wednasday"
  },
  {
    value: "Thursday"
  },
  {
    value: "Friday"
  },
  {
    value: "Saturday"
  },
  {
    value: "Sunday"
  }
];

export const EditAvailabiltyModal = params => (
  <PromptModal heading="Availability Information" {...params}>
    <View style={styles.container}>
      <CustomDropdown
        label="Day"
        data={data}
        containerStyle={{ marginBottom: 20 }}
        baseColor="#333"
      />
      <Text style={{ fontSize: 12 }}>Week</Text>
      <View style={styles.weekContainer}>
        <View>
          <CheckBox title="All" checked containerStyle={styles.checkboxStyle} />
          <CheckBox title="1" containerStyle={styles.checkboxStyle} />
        </View>
        <View>
          <CheckBox title="2" containerStyle={styles.checkboxStyle} />
          <CheckBox title="3" containerStyle={styles.checkboxStyle} />
        </View>
        <View>
          <CheckBox title="4" containerStyle={styles.checkboxStyle} />
          <CheckBox title="N/A" containerStyle={styles.checkboxStyle} />
        </View>
      </View>
      <View style={styles.timeContainer}>
        <DatePicker
          label="From Time"
          mode="time"
          containerStyle={[styles.dateTimeContainer, { marginRight: 10 }]}
        />
        <DatePicker
          label="To Time"
          mode="time"
          containerStyle={[styles.dateTimeContainer, { marginLeft: 10 }]}
        />
      </View>
    </View>
  </PromptModal>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 4
  },
  checkboxStyle: {
    backgroundColor: "#fff",
    borderWidth: 0,
    elevation: 0
  },
  timeContainer: {
    flexDirection: "row"
  },
  dateTimeContainer: {
    flex: 1
  }
});
