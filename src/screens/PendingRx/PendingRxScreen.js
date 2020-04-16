import React, { Component } from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";
import { PendingRxCard, ModalBox } from "../../componants";
import { Button, Text, colors } from "react-native-elements";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { isTablet } from "../../constant";

class PendingRxScreen extends Component {
  state = {
    data: [
      {
        name: "Jon Doe",
        scannedRx: {
          imageUrl: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      },
      {
        name: "Jon Doe",
        scannedRx: {
          imageUrl: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      },
      {
        name: "Jon Doe",
        scannedRx: {
          imageUrl: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      },
      {
        name: "Jon Doe",
        scannedRx: {
          imageUrl: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      }
    ],
    imageSource: require("../../../assets/pendingRx.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    compareModalVisible: false
  };

  toggleCompareModal = () =>
    this.setState(prev => ({
      compareModalVisible: !prev.compareModalVisible
    }));

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{ padding: 20, flexGrow: 1 }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
          extraData={this.state.data}
          renderItem={({ item }) => (
            <PendingRxCard onPressCompare={this.toggleCompareModal} {...item} />
          )}
          keyExtractor={(_, key) => key.toString()}
          columnWrapperStyle={
            isTablet()
              ? {
                  justifyContent: "space-evenly"
                }
              : undefined
          }
          numColumns={isTablet() ? 2 : 1}
        />

        <ModalBox
          heading="Compare Digtal/Scanned Rx"
          visible={this.state.compareModalVisible}
        >
          <View style={styles.container}>
            <View style={styles.compareContainer}>
              <View style={{ width: "50%" }}>
                <Image
                  source={this.state.imageSource}
                  style={styles.imageStyle}
                />
              </View>
              <ScrollView style={styles.descriptionStyle}>
                <Text
                  style={{
                    padding: 5
                  }}
                >
                  {this.state.description}
                </Text>
              </ScrollView>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="Approve"
                onPress={this.toggleCompareModal}
                containerStyle={{ width: "35%" }}
                buttonStyle={[styles.buttonStyle]}
              />

              <Button
                title="Reject"
                onPress={this.toggleCompareModal}
                containerStyle={{ width: "35%" }}
                buttonStyle={[
                  styles.buttonStyle,
                  { backgroundColor: "#d0362e" }
                ]}
              />
            </View>
          </View>
        </ModalBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0
  },
  buttonStyle: {
    backgroundColor: "#17971e",
    borderRadius: 0
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 10
  },
  compareContainer: {
    flexDirection: "row"
  },
  imageStyle: {
    width: wp("95%") > 400 ? 180 : wp("40%"),
    height: wp("95%") > 400 ? 180 : wp("40%")
  },
  descriptionStyle: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 0.5,
    width: wp("95%") > 400 ? 180 : wp("40%"),
    height: wp("95%") > 400 ? 180 : wp("40%")
  }
});

export default PendingRxScreen;
