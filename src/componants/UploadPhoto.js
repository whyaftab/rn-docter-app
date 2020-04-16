import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { colors, demoStyles } from "../constant";

export const UploadPhoto = ({
  containerStyle,
  heading,
  source,
  imageHeading
}) =>
  source ? (
    <View
      style={[
        styles.container,
        demoStyles.elevationStyle,
        { marginBottom: 0 },
        containerStyle
      ]}
    >
      <Icon
        name="close"
        containerStyle={{
          position: "absolute",
          top: -0,
          right: -0,
          zIndex: 1000
        }}
        color="#333"
        underlayColor="#fff"
        size={14}
        onPress={() => console.log("touchable")}
      />
      <Image source={source} style={{ height: "100%", width: "100%" }} />
      <View style={styles.imageHeadingStyle}>
        <Text style={{ color: "#333", fontSize: 12, paddingLeft: 10 }}>
          {imageHeading}
        </Text>
      </View>
    </View>
  ) : (
    <View style={[styles.container, containerStyle]}>
      <Icon type="evilicon" name="camera" size={40} color="#333" />
      <Text style={styles.headingStyle}>{heading}</Text>
    </View>
  );

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 0.5,
    borderStyle: "dashed",
    borderColor: colors.text,
    height: "28%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden"
  },
  headingStyle: {
    textTransform: "capitalize",
    marginTop: 4
  },
  imageHeadingStyle: {
    height: 20,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  }
};
