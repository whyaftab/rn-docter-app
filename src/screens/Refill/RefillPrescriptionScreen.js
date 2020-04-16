import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Text } from "react-native-elements";
import { demoStyles, cardStyle } from "../../constant";

const ListItem = ({ title, value, valueComponent }) => (
  <View style={styles.listItem}>
    <Text>{title}</Text>
    {valueComponent || <Text style={{ color: "#333" }}>{value}</Text>}
  </View>
);

class RefillPrescriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={[cardStyle, styles.containerStyle]}>
          <View style={styles.headContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../assets/rx/prescription.png")}
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 20
                }}
              />
              <Text style={styles.titleStyle}>PRES-140920191</Text>
            </View>
            <Text style={styles.titleStyle}>Amrit Srivastava</Text>
          </View>

          <Text style={styles.headingStyle}>Test Recommended</Text>
          <View style={[cardStyle, styles.cardContainerStyle]}>
            <ListItem title="SL NO." value="-" />
            <ListItem title="Profile/Test" value="-" />
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.amountStyle}>Total Amount: 0</Text>
          </View>

          <Text style={styles.headingStyle}>Drug Prescribe</Text>
          <View style={[cardStyle, styles.cardContainerStyle]}>
            <ListItem title="SL NO." value="1" />
            <ListItem title="Drug Name" value="BACLOPAR TAB" />
            <ListItem title="Frequeny" value="OD - Once a Day" />
            <ListItem title="B/A/W Meal" value="-" />
            <ListItem title="No of Days" value="1" />
            <ListItem title="Dosage" value="1" />
            <ListItem title="Remark" value="-" />
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.amountStyle}>Total Quantity: 1</Text>
            <Text style={styles.amountStyle}>Total Amount: 26.10 Rs.</Text>
          </View>

          <Text style={styles.headingStyle}>Supplement</Text>
          <View style={[cardStyle, styles.cardContainerStyle]}>
            <ListItem title="SL NO." value="-" />
            <ListItem title="Drug Name" value="-" />
            <ListItem title="Frequeny" value="-" />
            <ListItem title="B/A/W Meal" value="-" />
            <ListItem title="No of Days" value="-" />
            <ListItem title="Dosage" value="-" />
            <ListItem title="Remark" value="-" />
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.amountStyle}>Total Quantity: 1</Text>
            <Text style={styles.amountStyle}>Total Amount: 26.10 Rs.</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: 20
  },
  containerStyle: {
    width: "100%",
    padding: 30,
    paddingBottom: 40
  },
  headContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 20
  },
  titleStyle: {
    color: "#333",
    fontSize: 30
  },
  headingStyle: {
    color: "#333",
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20
  },
  totalContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  amountStyle: {
    color: "#333",
    fontSize: 18,
    padding: 10
  },
  cardContainerStyle: {
    width: "100%"
  }
});

export default RefillPrescriptionScreen;
