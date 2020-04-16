import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text } from "react-native-elements";
import { demoStyles, colors } from "../../../constant";
import { CustomDropdown, DatePicker } from "../../../componants";

const ListItem = ({ title, value, valueComponent }) => (
  <View style={styles.listItem}>
    <Text>{title}</Text>
    {valueComponent || <Text style={{ color: "#333" }}>{value}</Text>}
  </View>
);

const DrugCard = ({ sno, brand, name, from, status }) => (
  <View
    style={[
      demoStyles.elevationStyle,
      { padding: 10, paddingBottom: 0, width: 300 }
    ]}
  >
    <ListItem title="Sr#" value={sno} />
    <ListItem title="Generic/Brand" value={brand} />
    <ListItem title="Name" value={name} />
    <ListItem title="Start From" value={from} />
    <ListItem title="Status" value={status} />
  </View>
);

class Prescription extends Component {
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
      details: [
        {
          sno: 1,
          brand: "Yes",
          name: "Lorem ipsum",
          from: "23 Jul 2019 - 29 Jul 2019",
          status: "Active"
        },
        {
          sno: 2,
          brand: "Yes",
          name: "Lorem ipsum",
          from: "23 Jul 2019 - 29 Jul 2019",
          status: "Active"
        },
        {
          sno: 3,
          brand: "Yes",
          name: "Lorem ipsum",
          from: "23 Jul 2019 - 29 Jul 2019",
          status: "Active"
        },
        {
          sno: 3,
          brand: "Yes",
          name: "Lorem ipsum",
          from: "23 Jul 2019 - 29 Jul 2019",
          status: "Active"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View
          style={{
            borderColor: colors.borderColor,
            borderBottomWidth: 1,
            paddingTop: 20
          }}
        >
          <ListItem title="Sr#" value="1" />
          <ListItem title="Visit Date & Time" value="09 Oct 2018 12:37 PM" />
          <ListItem
            title="Drug"
            valueComponent={
              <Button
                title="Add Drug"
                icon={{ name: "pencil", type: "evilicon", size: 14 }}
                buttonStyle={{
                  padding: 0,
                  margin: 0,
                  borderRadius: 5,
                  paddingRight: 6,
                  paddingLeft: 6
                }}
                containerStyle={{
                  marginRight: 10
                }}
                titleStyle={{
                  fontSize: 12
                }}
              />
            }
          />
          <ListItem
            title="Prescription (Rx)"
            valueComponent={
              <View style={{ flexDirection: "row" }}>
                <Button
                  title="Download Rx"
                  icon={{ name: "download", size: 12 }}
                  buttonStyle={{
                    backgroundColor: "#7D1DA3",
                    padding: 0,
                    margin: 0,
                    paddingRight: 6,
                    paddingLeft: 6,
                    borderRadius: 5
                  }}
                  containerStyle={{
                    marginRight: 10
                  }}
                  titleStyle={{
                    fontSize: 12
                  }}
                />
                <Button
                  title="Change Rx"
                  icon={{ name: "exchange", size: 12 }}
                  buttonStyle={{
                    backgroundColor: "#1F9B65",
                    padding: 0,
                    margin: 0,
                    borderRadius: 5,
                    paddingRight: 6,
                    paddingLeft: 6
                  }}
                  containerStyle={{
                    marginRight: 10
                  }}
                  titleStyle={{
                    fontSize: 12
                  }}
                />
                <Button
                  title="Refresh"
                  icon={{ name: "refresh", size: 12 }}
                  buttonStyle={{
                    backgroundColor: "#64BEDB",
                    padding: 0,
                    margin: 0,
                    borderRadius: 5,
                    paddingRight: 6,
                    paddingLeft: 6
                  }}
                  containerStyle={{
                    marginRight: 10
                  }}
                  titleStyle={{
                    fontSize: 12
                  }}
                />
                <Button
                  title="Print Rx"
                  icon={{ name: "print", size: 12 }}
                  buttonStyle={{
                    backgroundColor: "#958F16",
                    padding: 0,
                    margin: 0,
                    borderRadius: 5,
                    paddingRight: 6,
                    paddingLeft: 6
                  }}
                  containerStyle={{
                    marginRight: 10
                  }}
                  titleStyle={{
                    fontSize: 12
                  }}
                />
              </View>
            }
          />
          <ListItem title="Diagnostic (Dx)" value="-" />
        </View>

        <Text style={{ fontSize: 18, marginTop: 30, color: "#333" }}>
          Drug History
        </Text>
        <View style={styles.devider}>
          <CustomDropdown
            label="Select Symptoms"
            containerStyle={styles.inputContainer}
            data={this.state.dropdown}
          />
          <CustomDropdown
            label="Status"
            containerStyle={styles.inputContainer}
            data={this.state.dropdown}
          />
        </View>

        <View style={styles.devider}>
          <DatePicker
            label="Start From"
            containerStyle={styles.inputContainer}
          />
          <DatePicker label="To" containerStyle={styles.inputContainer} />
        </View>
        <FlatList
          horizontal
          style={{ marginTop: 10 }}
          data={this.state.details}
          keyExtractor={(_, key) => key.toString()}
          contentContainerStyle={{
            flexGrow: 1
          }}
          ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
          nestedScrollEnabled
          renderItem={({ item }) => <DrugCard {...item} />}
          extraData={this.state}
        />
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
            title="Save Drug Details"
            onPress={this.props.goBack}
            containerStyle={{
              width: "30%"
            }}
            buttonStyle={{
              backgroundColor: "#C42B0A",
              borderRadius: 5
            }}
          />
          <Button
            title="Save & next"
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

export default Prescription;
