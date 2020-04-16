import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { SideBar } from "../../../componants";
import { demoStyles } from "../../../constant";
import PatientInformation from "./PatientInformation";
import MedicalHistory from "./MedicalHistory";
import Observation from "./Observation";
import Diagnosis from "./Diagnosis";
import Supplement from "./Supplement";
import Instructions from "./Instructions";
import Test from "./Test";
import Analysis from "./Analysis";
import Followup from "./Followup";
import Prescription from "./Prescription";

class PrescriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0,
      navigationList: [
        {
          source: require("../../../../assets/rx/user-rx.png"),
          title: "Patient Information"
        },
        {
          source: require("../../../../assets/rx/medicine-report.png"),
          title: "Medical History"
        },
        {
          source: require("../../../../assets/rx/microscope-rx.png"),
          title: "Observation"
        },
        {
          source: require("../../../../assets/rx/diagnosis.png"),
          title: "Diagnosis"
        },
        {
          source: require("../../../../assets/rx/prescription.png"),
          title: "Prescription"
        },
        {
          source: require("../../../../assets/rx/pills-bottle.png"),
          title: "Suppliements"
        },
        {
          source: require("../../../../assets/rx/writing.png"),
          title: "Instructions"
        },
        {
          source: require("../../../../assets/rx/test.png"),
          title: "Test Recommended"
        },
        {
          source: require("../../../../assets/rx/report.png"),
          title: "Analysis"
        },
        {
          source: require("../../../../assets/rx/thumbs-up.png"),
          title: "Follow Up"
        }
      ]
    };
    this.goBack = this.goBack.bind(this);
  }

  changeSection = Section =>
    this.setState({
      activeSection: Section
    });

  _renderSection() {
    switch (this.state.activeSection) {
      case 0:
        return <PatientInformation />;
      case 1:
        return <MedicalHistory goBack={this.goBack} />;
      case 2:
        return <Observation goBack={this.goBack} />;
      case 3:
        return <Diagnosis goBack={this.goBack} />;
      case 4:
        return <Prescription goBack={this.goBack} />;
      case 5:
        return <Supplement goBack={this.goBack} />;
      case 6:
        return <Instructions goBack={this.goBack} />;
      case 7:
        return <Test goBack={this.goBack} />;
      case 8:
        return <Analysis goBack={this.goBack} />;
      case 9:
        return <Followup goBack={this.goBack} />;
      default:
        return <PatientInformation />;
    }
  }

  goBack() {
    this.setState(prev => ({
      activeSection: parseInt(prev.activeSection) - 1
    }));
  }

  render() {
    const { navigationList, activeSection } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 0.25, margin: 20, marginRight: 0 }}>
          <SideBar
            onChange={this.changeSection}
            active={this.state.activeSection}
            data={this.state.navigationList}
          />
        </View>
        <View
          style={[
            demoStyles.elevationStyle,
            {
              flex: 0.75,
              margin: 20,
              borderRadius: 10,
              overflow: "hidden"
            }
          ]}
        >
          <ScrollView
            contentContainerStyle={[
              {
                backgroundColor: "#fff",
                padding: 40
              }
            ]}
          >
            <Text style={{ fontSize: 22 }}>
              {navigationList[activeSection].title}
            </Text>
            {this._renderSection()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default PrescriptionScreen;
