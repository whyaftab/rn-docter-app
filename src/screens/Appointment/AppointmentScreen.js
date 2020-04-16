import React, { Component } from "react";
import { Modal, View, Image, FlatList } from "react-native";
import { Text } from "react-native-elements";
import AppointmentConfirmed from "./AppoinmentConfirmed";
import { colors } from "../../constant";
import AppointmentConfirmation from "./AppointmentConfirmation";
import { ModalBox, TouchableSpecific } from "../../componants";

class AppointmentScreen extends Component {
  state = {
    activeTab: 0,
    headlines: [
      {
        title: "total appointment",
        count: 200
      },
      {
        title: "total appointment",
        count: 200
      },
      {
        title: "total appointment",
        count: 200
      },
      {
        title: "total appointment",
        count: 200
      }
    ],
    moreModalDescription: "",
    moreModalVisible: false
  };
  changeTab = tab => {
    this.setState({
      activeTab: tab
    });
  };

  _list = ({ title, count }) => {
    return (
      <View style={styles.headLine}>
        <Text style={styles.headLineHeading}>{title}</Text>
        <Text style={styles.headLineAmount}>{count}</Text>
      </View>
    );
  };

  _renderAppointmentType = () => {
    if (this.state.activeTab == 0) {
      return (
        <AppointmentConfirmation
          openMoreModal={description => this.toggleMoreModal(description)}
        />
      );
    }
    return (
      <AppointmentConfirmed
        openMoreModal={description => this.toggleMoreModal(description)}
      />
    );
  };

  toggleMoreModal = description => {
    this.setState(prev => ({
      moreModalVisible: !prev.moreModalVisible,
      moreModalDescription: description
    }));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.headingContainer}>
            <Image
              resizeMode="cover"
              source={require("../../../assets/appointmentBack.jpg")}
              style={styles.imageBackgroundStyle}
            />
            <FlatList
              contentContainerStyle={styles.headingLinesContainer}
              data={this.state.headlines}
              renderItem={({ item }) => this._list(item)}
            />
          </View>
          <View style={styles.tabs}>
            <TouchableSpecific
              onPress={() => this.changeTab(0)}
              style={[
                styles.tab,
                this.state.activeTab == 0 && styles.activeTab
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  this.state.activeTab == 0 && styles.activeTabText
                ]}
              >
                Please Confirm Appointments
              </Text>
            </TouchableSpecific>
            <TouchableSpecific
              onPress={() => this.changeTab(1)}
              style={[
                styles.tab,
                this.state.activeTab == 1 && styles.activeTab
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  this.state.activeTab == 1 && styles.activeTabText
                ]}
              >
                Confirmed Appointments
              </Text>
            </TouchableSpecific>
          </View>
        </View>
        <View style={{ flex: 2 }}>{this._renderAppointmentType()}</View>
        <ModalBox
          visible={this.state.moreModalVisible}
          onPressClose={this.toggleMoreModal}
          heading="Major Complaints"
        >
          <View>
            <Text style={{ padding: 20, paddingTop: 0 }}>
              {this.state.moreModalDescription}
            </Text>
          </View>
        </ModalBox>
      </View>
    );
  }
}

const styles = {
  headingContainer: {
    width: "100%",
    height: "70%"
  },
  imageBackgroundStyle: {
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  headLine: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headLineHeading: {
    textTransform: "capitalize",
    color: "#fff"
  },
  headLineAmount: {
    color: colors.green
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    height: "30%"
  },
  tab: {
    backgroundColor: colors.grey,
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  activeTab: {
    backgroundColor: colors.green
  },
  tabText: {
    width: "60%",
    color: colors.text,
    textAlign: "center",
    fontWeight: "bold"
  },
  activeTabText: {
    color: "#fff"
  },
  headingLinesContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "space-between"
  },
  moreModalDescriptionStyle: {
    color: colors.text
  }
};

export default AppointmentScreen;
