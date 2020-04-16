import React from "react";
import { View, Image, FlatList } from "react-native";
import { DiamondHeadingListItem } from "./DiamondHeadingListItem";

export const DiamondHeading = ({ data, conatinerStyle }) => (
  <View style={[styles.headingContainer, conatinerStyle]}>
    <Image
      resizeMode="cover"
      source={require("../../assets/appointmentBack.jpg")}
      style={styles.imageBackgroundStyle}
    />
    <FlatList
      contentContainerStyle={styles.headingLinesContainer}
      data={data}
      renderItem={({ item }) => <DiamondHeadingListItem {...item} />}
      keyExtractor={(_, key) => key.toString()}
    />
  </View>
);

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
  headingLinesContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "space-between"
  }
};
