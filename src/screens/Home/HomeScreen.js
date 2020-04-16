import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { MenuItem } from "../../componants";
import { isTablet } from "../../constant";
import { FloatingButton } from "../../componants/FloatingButton";

export default class HomeScreen extends Component {
  state = {
    items: [
      {
        name: "Today's Workflow",
        source: require("../../../assets/HomeIcons/bell.png"),
        route: "workflow",
        tabletOnly: true
      },
      {
        name: "Walk-In Patient Registration",
        source: require("../../../assets/HomeIcons/group.png"),
        route: "walkIn",
        tabletOnly: true
      },
      {
        name: "Appointments",
        source: require("../../../assets/HomeIcons/calendar.png"),
        route: "appointments",
        tabletOnly: false
      },
      {
        name: "Refill Prescription",
        source: require("../../../assets/HomeIcons/prescription.png"),
        route: "refill",
        tabletOnly: true
      },
      {
        name: "Write Rx",
        source: require("../../../assets/HomeIcons/rx.png"),
        route: isTablet() ? "writeRxTab" : "writeRx",
        tabletOnly: false
      },
      {
        name: "Edit Profile",
        source: require("../../../assets/HomeIcons/user.png"),
        route: "profile",
        tabletOnly: false
      },
      {
        name: "Edit Availability",
        source: require("../../../assets/HomeIcons/hospital.png"),
        route: "availabilty",
        tabletOnly: false
      },
      {
        name: "Pharma DB",
        source: require("../../../assets/HomeIcons/medicine.png"),
        route: "pharmadb",
        tabletOnly: false
      },
      {
        name: "Diagonistic DB",
        source: require("../../../assets/HomeIcons/report.png"),
        route: "diagnosticdb",
        tabletOnly: false
      },
      {
        name: "Transaction History",
        source: require("../../../assets/HomeIcons/credit-card.png"),
        route: "transaction",
        tabletOnly: false
      },
      {
        name: "Share Referral Code",
        source: require("../../../assets/HomeIcons/social-media.png"),
        route: "share",
        tabletOnly: false
      },
      {
        name: "Point Redemption",
        source: require("../../../assets/HomeIcons/gift.png"),
        route: "pointRedemption",
        tabletOnly: false
      },
      {
        name: "Pending Rx Approvals",
        source: require("../../../assets/HomeIcons/rx.png"),
        route: "pendingRx",
        tabletOnly: false
      },
      {
        name: "Logout",
        source: require("../../../assets/HomeIcons/logout.png"),
        route: "",
        tabletOnly: true
      }
    ]
  };

  _renderMenuItem = item => {
    return (
      <MenuItem
        {...item}
        onPress={() => this.props.navigation.navigate(item.route)}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={
            isTablet()
              ? this.state.items
              : this.state.items.filter(({ tabletOnly }) => !tabletOnly)
          }
          style={styles.gridView}
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
          renderItem={({ item }) => this._renderMenuItem(item)}
          columnWrapperStyle={{
            justifyContent: "space-evenly"
          }}
          ItemSeparatorComponent={() => (
            <View style={{ height: isTablet() ? 20 : 10 }} />
          )}
          numColumns={2}
          keyExtractor={(_, key) => key.toString()}
        />
        <FloatingButton
          source={require("../../../assets/HomeIcons/video.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1
  }
});
