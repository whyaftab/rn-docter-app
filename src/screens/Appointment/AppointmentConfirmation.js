import React, { Component } from "react";
import { View } from "react-native";
import {
  Text,
  Card,
  ThemeConsumer,
  CheckBox,
  Button
} from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { AppointmentCard, PromptModal, ModalCheckbox } from "../../componants";
import { isTablet } from "../../constant";

class AppointmentConfirmation extends Component {
  state = {
    appointments: [
      {
        sno: 1,
        name: "lorem ipsum",
        type: "new",
        number: "90909090",
        date: "02 Jul, 05:55 PM",
        category: "Indivisual",
        complaints: "Lorem ipsum dolor sit fdjaskfjskad"
      },
      {
        sno: 2,
        name: "lorem ipsum",
        type: "new",
        number: "90909090",
        date: "02 Jul, 05:55 PM",
        category: "Indivisual",
        complaints: "Lorem ipsum dolor sit fdjaskfjskad"
      },
      {
        sno: 3,
        name: "lorem ipsum",
        type: "new",
        number: "90909090",
        date: "02 Jul, 05:55 PM",
        category: "Indivisual",
        complaints: "Lorem ipsum dolor sit fdjaskfjskad"
      }
    ],
    selectionOn: false,
    selectedCards: [],
    selectAllEnable: false,
    appointmentPromptVisible: false,
    appointmentFilterVisible: false
  };

  cardLongPress = sno => {
    if (this.state.selectionOn) {
      this.setState({
        selectedCards: []
      });
      return;
    }
    this.setState(prev => ({
      selectionOn: true,
      selectedCards: prev.selectedCards.includes(sno)
        ? prev.selectedCards.filter(val => val != sno)
        : [...prev.selectedCards, sno]
    }));
  };

  onCardPress = sno => {
    if (this.state.selectionOn) {
      this.setState(prev => ({
        selectionOn: true,
        selectedCards: prev.selectedCards.includes(sno)
          ? prev.selectedCards.filter(val => val != sno)
          : [...prev.selectedCards, sno]
      }));
    }
  };

  toggleAppointmentFilter = () => {
    this.setState(prev => ({
      appointmentFilterVisible: !prev.appointmentFilterVisible
    }));
  };

  selectAll = () => {
    if (this.state.selectAllEnable) {
      this.setState({
        selectAllEnable: false,
        selectedCards: []
      });
      return;
    }
    const allvalues = this.state.appointments.map(value => value.sno);
    this.setState({
      selectAllEnable: true,
      selectedCards: allvalues,
      selectionOn: true
    });
  };

  resetSelection = () => {
    this.setState({
      selectAllEnable: false,
      selectedCards: [],
      selectionOn: false
    });
  };
  toggleAppointmentPrompt = () => {
    this.setState(prev => ({
      appointmentPromptVisible: !prev.appointmentPromptVisible
    }));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CheckBox
          checked={this.state.selectAllEnable}
          onPress={this.selectAll}
          title="Select All"
        />
        <FlatList
          data={this.state.appointments}
          extraData={this.state}
          contentContainerStyle={{ padding: 15, flexGrow: 1 }}
          renderItem={({ item }) => (
            <AppointmentCard
              {...item}
              selected={this.state.selectedCards.includes(item.sno)}
              selectionOn={this.state.selectionOn}
              onLongPress={() => this.cardLongPress(item.sno)}
              onPress={() => this.onCardPress(item.sno)}
              onMorePress={() => this.props.openMoreModal(item.complaints)}
            />
          )}
          keyExtractor={(_, key) => key.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListFooterComponent={() => <View style={{ height: 10 }} />}
          columnWrapperStyle={
            isTablet() ? styles.columnWrapperStyle : undefined
          }
          numColumns={isTablet() ? 2 : 1}
          onMorePress={() => this.props.openMoreModal(item.complaints)}
        />
        {this.state.selectionOn && (
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Button
              title="Approve"
              buttonStyle={{ borderRadius: 0 }}
              containerStyle={{ width: "50%" }}
              onPress={this.toggleAppointmentPrompt}
            />
            <Button
              title="Dissapprove"
              containerStyle={{ width: "50%" }}
              buttonStyle={{ borderRadius: 0 }}
              onPress={this.resetSelection}
            />
          </View>
        )}
        <PromptModal
          heading="Please Accept Appointments"
          visible={false}
          // onSubmit={this.toggleAppointmentPrompt}
          // onCancel={this.toggleAppointmentPrompt}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              paddingTop: 0
            }}
          >
            <ModalCheckbox checked={true} title="Accept" />
            <ModalCheckbox title="Reject" />
          </View>
        </PromptModal>
        <PromptModal
          heading="Filter"
          visible={this.state.appointmentPromptVisible}
          onSubmit={this.toggleAppointmentPrompt}
          onCancel={this.toggleAppointmentPrompt}
        >
          <View>
            <View
              style={{
                padding: 20
              }}
            >
              <Text
                style={{ paddingLeft: 20, color: "#333", fontWeight: "bold" }}
              >
                Patient Category
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 0,
                  width: "100%",
                  flexWrap: "wrap"
                }}
              >
                <ModalCheckbox checked={true} title="Individual" />
                <ModalCheckbox title="Corporate" />
                <ModalCheckbox title="Insurance" />
              </View>
            </View>
            <View
              style={{
                padding: 20
              }}
            >
              <Text
                style={{ paddingLeft: 20, color: "#333", fontWeight: "bold" }}
              >
                Patient Type
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 0
                }}
              >
                <ModalCheckbox checked={true} title="New" />
                <ModalCheckbox title="Repeat" />
              </View>
            </View>
          </View>
        </PromptModal>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  columnWrapperStyle: {
    justifyContent: "space-evenly"
  }
};

export default AppointmentConfirmation;
