import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";
import {
  InputText,
  CustomDropdown,
  DatePicker,
  MedicalHistoryCard
} from "../../../componants";

class MedicalHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          sno: 1,
          type: "lorem impsum",
          name: "lorem impsum",
          date: "24 jul 2019 - 29 jul 2019",
          description: "Lorem impsum dolor sit, consinsnfdn, ndsmfnhhhkh ets."
        }
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.formContainer}>
          <View style={styles.devider}>
            <CustomDropdown
              label="Medical History Type"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
            <CustomDropdown
              label="Medical History Name"
              data={this.state.dropdown}
              containerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.devider}>
            <DatePicker
              label="Start from"
              containerStyle={styles.inputContainer}
            />
            <DatePicker label="To" containerStyle={styles.inputContainer} />
          </View>
          <View style={styles.devider}>
            <InputText
              label="Description"
              containerStyle={[styles.inputContainer, { width: "100%" }]}
            />
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
              containerStyle={{
                width: "20%"
              }}
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
        <View style={{ flex: 0.5 }}>
          <Text style={{ fontSize: 20, paddingBottom: 20 }}>
            Medical History
          </Text>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, key) => key.toString()}
            contentContainerStyle={{ flexGrow: 1 }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            extraData={this.state.data}
            renderItem={({ item }) => <MedicalHistoryCard {...item} />}
          />
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

export default MedicalHistory;
