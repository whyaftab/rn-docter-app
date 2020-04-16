import React, { Component } from "react";
import { View, FlatList } from "react-native";
import {
  AvailabiltyCard,
  FloatingIcon,
  AvailabilityModal,
  EditAvailabiltyModal
} from "../../componants";
import { isTablet } from "../../constant";

class AvailabilityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Jon Doe",
          type: "Dermatologist",
          availabilty: [
            {
              day: "Monday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Tuesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Wednesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Sunday",
              week: "1, 3",
              time: "All"
            }
          ]
        },
        {
          id: 2,
          name: "Jon Doe",
          type: "Dermatologist",
          availabilty: [
            {
              day: "Monday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Tuesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Wednesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Sunday",
              week: "1, 3",
              time: "All"
            }
          ]
        },
        {
          id: 3,
          name: "Jon Doe",
          type: "Dermatologist",
          availabilty: [
            {
              day: "Monday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Tuesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Wednesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Sunday",
              week: "1, 3",
              time: "All"
            }
          ]
        },
        {
          id: 4,
          name: "Jon Doe",
          type: "Dermatologist",
          availabilty: [
            {
              day: "Monday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Tuesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Wednesday",
              week: "1, 3",
              time: "10:30 AM - 01:30 PM"
            },
            {
              day: "Sunday",
              week: "1, 3",
              time: "All"
            }
          ]
        }
      ],
      selectedActivityId: null,
      availabilityModalVisible: false,
      editAvailabilityModalVisible: false
    };
  }

  toggleAvailabilityModal = id => {
    this.setState(prev => ({
      selectedActivityId: id,
      availabilityModalVisible: !prev.availabilityModalVisible
    }));
  };

  toggleEditAvailabilityModal = () =>
    this.setState(prev => ({
      editAvailabilityModalVisible: !prev.editAvailabilityModalVisible
    }));

  render() {
    const { selectedActivityId, data } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{ padding: 20, flexGrow: 1 }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
          extraData={this.state.data}
          renderItem={({ item }) => (
            <AvailabiltyCard
              onPress={() => this.toggleAvailabilityModal(item.id)}
              onPressButton={() =>
                this.props.navigation.navigate("addAvailability")
              }
              {...item}
            />
          )}
          columnWrapperStyle={
            isTablet()
              ? {
                  justifyContent: "space-evenly"
                }
              : undefined
          }
          numColumns={isTablet() ? 2 : 1}
          keyExtractor={(_, key) => key.toString()}
        />
        <FloatingIcon
          name="plus"
          type="octicon"
          onPress={() => this.props.navigation.navigate("addAvailability")}
        />
        <AvailabilityModal
          heading="Availability"
          visible={this.state.availabilityModalVisible}
          onSubmit={this.toggleAvailabilityModal}
          onCancel={this.toggleAvailabilityModal}
          onEditPress={this.toggleEditAvailabilityModal}
          data={data[0]}
        />
        <EditAvailabiltyModal
          visible={this.state.editAvailabilityModalVisible}
          onSubmit={this.toggleEditAvailabilityModal}
          onCancel={this.toggleEditAvailabilityModal}
          data={data[0]}
        />
      </View>
    );
  }
}

export default AvailabilityScreen;
