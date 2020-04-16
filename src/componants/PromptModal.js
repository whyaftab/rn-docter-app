import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { ModalBox } from "./ModalBox";
import { colors } from "../constant";

export const PromptModal = ({
  visible,
  heading,
  onSubmit,
  children,
  onCancel
}) => (
  <ModalBox visible={visible} heading={heading}>
    <View>
      {children}
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <Button
          title="Cancel"
          onPress={onCancel}
          buttonStyle={{
            backgroundColor: "#fff",
            borderTopWidth: 0.5,
            borderLeftWidth: 0.5,
            borderColor: "#E2E2E2",
            borderRadius: 0,
            borderBottomLeftRadius: 10
          }}
          containerStyle={{ width: "50%" }}
          titleStyle={{ color: colors.text, fontFamily: "Roboto" }}
        />
        <Button
          title="Submit"
          onPress={onSubmit}
          buttonStyle={{
            backgroundColor: "#fff",
            borderTopWidth: 0.5,
            borderLeftWidth: 0.5,
            borderColor: "#E2E2E2",
            borderRadius: 0,
            borderBottomEndRadius: 10
          }}
          containerStyle={{ width: "50%" }}
          titleStyle={{ color: "#333", fontFamily: "Roboto" }}
        />
      </View>
    </View>
  </ModalBox>
);
