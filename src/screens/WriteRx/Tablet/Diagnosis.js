import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text } from "react-native-elements";
import { CustomDropdown } from "../../../componants";
import { demoStyles } from "../../../constant";

const ListItem = ({ title, onPress }) => (
  <View style={styles.listItem}>
    <Text>{title}</Text>
    <Button
      title="Delete"
      icon={{
        name: "trash",
        size: 16,
        containerStyle: { padding: 0, margin: 0, paddingRight: 4 }
      }}
      containerStyle={{ padding: 0, margin: 0 }}
      buttonStyle={{
        padding: 0,
        margin: 0,
        borderRadius: 0,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "red"
      }}
      onPress={onPress}
    />
  </View>
);

class Diagnosis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: [
        {
          value: "1"
        },
        {
          value: "2"
        },
        {
          value: "3"
        }
      ],
      symptoms: [
        {
          name: "Symsptoms1"
        },
        {
          name: "Symsptoms2"
        },
        {
          name: "Symsptoms3"
        },
        {
          name: "Symsptoms1"
        },
        {
          name: "Symsptoms2"
        },
        {
          name: "Symsptoms3"
        },
        {
          name: "Symsptoms1"
        },
        {
          name: "Symsptoms2"
        },
        {
          name: "Symsptoms3"
        },
        {
          name: "Symsptoms1"
        },
        {
          name: "Symsptoms2"
        },
        {
          name: "Symsptoms3"
        }
      ],
      diagnosis: [
        {
          name: "Diagnosis1"
        },
        {
          name: "Diagnosis2"
        },
        {
          name: "Diagnosis3"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.devider}>
          <View style={styles.inputContainer}>
            <CustomDropdown
              label="Select Symptoms"
              containerStyle={{ paddingBottom: 20 }}
              data={this.state.dropdown}
            />
            <Button
              title="Save"
              onPress={this.props.onSuccess}
              containerStyle={{
                width: "40%",
                alignSelf: "center"
              }}
              buttonStyle={{
                borderRadius: 5
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomDropdown
              label="Select Diagnosis"
              data={this.state.dropdown}
              containerStyle={{ paddingBottom: 20 }}
            />
            <Button
              title="Save"
              onPress={this.props.onSuccess}
              containerStyle={{
                width: "40%",
                alignSelf: "center"
              }}
              buttonStyle={{
                borderRadius: 5
              }}
            />
          </View>
        </View>
        <View style={{ height: 180, marginTop: 20 }}>
          <FlatList
            data={this.state.symptoms}
            style={[demoStyles.elevationStyle]}
            keyExtractor={(_, key) => key.toString()}
            ListHeaderComponent={() => (
              <Text
                style={{ fontWeight: "bold", color: "#333", paddingBottom: 20 }}
              >
                Symptoms
              </Text>
            )}
            contentContainerStyle={{
              padding: 20,
              flexGrow: 1
            }}
            nestedScrollEnabled
            renderItem={({ item }) => <ListItem title={item.name} />}
            extraData={this.state}
          />
        </View>
        <View style={{ height: 180, marginTop: 20 }}>
          <FlatList
            data={this.state.diagnosis}
            style={[demoStyles.elevationStyle]}
            keyExtractor={(_, key) => key.toString()}
            ListHeaderComponent={() => (
              <Text
                style={{ fontWeight: "bold", color: "#333", paddingBottom: 20 }}
              >
                Diagnosis
              </Text>
            )}
            contentContainerStyle={{
              padding: 20,
              flexGrow: 1
            }}
            nestedScrollEnabled
            renderItem={({ item }) => <ListItem title={item.name} />}
            extraData={this.state}
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
    flex: 1
  },
  imageContainer: {
    width: "48%",
    height: 300,
    marginBottom: 0
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20
  }
});

export default Diagnosis;
