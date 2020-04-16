import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Icon, Button } from "react-native-elements";
import { colors } from "../constant";

export const RxCard = ({
  name,
  date,
  phone,
  description,
  since,
  lastVisitOn,
  onPress
}) => (
  <View style={styles.container}>
    <View>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/user.jpg")}
          style={styles.imageStyle}
        />
        <Text style={styles.titleStyle}>{name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              color: colors.green,
              fontSize: 12,
              fontWeight: "bold",
              paddingRight: 10
            }}
          >
            Since {since}
          </Text>
          <Text
            style={{
              color: colors.red,
              fontSize: 12,
              fontWeight: "bold",
              paddingLeft: 10
            }}
          >
            Last Visit On {lastVisitOn}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <View style={styles.textWithIcon}>
            <Icon
              name="mobile-phone"
              color={colors.text}
              size={14}
              containerStyle={styles.iconContainer}
            />
            <Text>{phone}</Text>
          </View>

          <View style={styles.textWithIcon}>
            <Icon
              name="calendar"
              color={colors.text}
              size={12}
              containerStyle={styles.iconContainer}
            />
            <Text>{date}</Text>
          </View>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Allergic to <Text style={{ color: colors.primary }}>Lorem Ipsum</Text>
        </Text>
      </View>
      <Text style={styles.descriptionStyle}>{description}</Text>
      <Button title="Capture Rx" onPress={onPress} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  titleStyle: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "bold"
  },
  headerContainer: {
    justifyContent: "center",
    width: "100%",
    alignSelf: "center"
  },
  imageStyle: {
    width: 140,
    height: 140,
    borderRadius: 140
  },
  iconContainer: {
    paddingRight: 5,
    flexDirection: "row"
  },
  textWithIcon: {
    flexDirection: "row",
    width: "30%"
  },
  detailContainer: {
    height: "22%",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10
  },
  descriptionStyle: {
    paddingBottom: 20,
    textAlign: "center"
  }
});
