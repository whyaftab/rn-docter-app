import React, { Component } from "react";
import { View } from "react-native";
import { Text, Card, ThemeConsumer } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { AppointmentCard } from "../../componants";
import { isTablet } from "../../constant";

class AppointmentConfirmed extends Component {
  state = {
    appointments: [
      {
        sno: 1,
        name: "lorem ipsum",
        type: "new",
        number: "90909090",
        date: "02 Jul, 05:55 PM",
        category: "Indivisual",
        complaints: "Lorem ipsum dolor sit fdjaskfjskad",
        selected: false
      },
      {
        sno: 2,
        name: "lorem ipsum",
        type: "new",
        number: "90909090",
        date: "02 Jul, 05:55 PM",
        category: "Indivisual",
        complaints: "Lorem ipsum dolor sit fdjaskfjskad",
        selected: false
      },
      {
        sno: 3,
        name: "lorem ipsum",
        type: "new",
        number: "90909090",
        date: "02 Jul, 05:55 PM",
        category: "Indivisual",
        complaints: "Lorem ipsum dolor sit fdjaskfjskad",
        selected: false
      }
    ]
  };
  render() {
    return (
      <FlatList
        data={this.state.appointments}
        contentContainerStyle={{ padding: 15, flexGrow: 1 }}
        renderItem={({ item }) => (
          <AppointmentCard
            {...item}
            onMorePress={() => this.props.openMoreModal(item.complaints)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        ListFooterComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={() => <View style={{ height: 5 }} />}
        columnWrapperStyle={isTablet() ? styles.columnWrapperStyle : undefined}
        numColumns={isTablet() ? 2 : 1}
      />
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

export default AppointmentConfirmed;
