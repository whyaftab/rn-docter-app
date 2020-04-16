import React from "react";
import { View, Text, Image } from "react-native";
import { demoStyles } from "../constant";
import { TouchableSpecific } from "./TouchableSpecific";

const SideBarButton = ({ onPress, source, title, active, index }) => (
  <TouchableSpecific
    onPress={onPress}
    key={index}
    style={{
      padding: 20,
      paddingLeft: 30,
      paddingRight: 30,
      width: "100%",
      backgroundColor: active ? "#e1e1e1" : "#fff",
      flexDirection: "row",
      alignItems: "center"
    }}
  >
    <Image source={source} style={{ width: 20, height: 20, marginRight: 10 }} />
    <Text style={{ textTransform: "capitalize" }}>{title}</Text>
  </TouchableSpecific>
);

export const SideBar = ({ active, onChange, data }) => (
  <View
    style={[
      demoStyles.elevationStyle,
      {
        borderRadius: 10,
        overflow: "hidden",
        width: "100%"
      }
    ]}
  >
    {data.map((value, key) => (
      <SideBarButton
        index={key}
        source={value.source}
        title={value.title}
        active={key == active}
        onPress={() => onChange(key)}
      />
    ))}
  </View>
);
