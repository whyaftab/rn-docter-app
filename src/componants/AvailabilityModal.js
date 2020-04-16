import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { PromptModal } from "./PromptModal";
import { Icon } from "react-native-elements";
import { colors } from "../constant";

export const AvailabilityModal = props => {
  return (
    <PromptModal {...props}>
      <View style={styles.container}>
        <Icon
          name="plus"
          color={colors.primary}
          containerStyle={{
            position: "absolute",
            top: -50,
            right: 10,
            zIndex: 1001
          }}
          underlayColor="#fff"
          onPress={() => console.log("called")}
        />
        <AvailabilityItem day="Day" week="Week" time="Time" heading />
        <FlatList
          data={props.data.availabilty}
          extraData={props.data}
          keyExtractor={(_, key) => key.toString()}
          renderItem={({ item }) => (
            <AvailabilityItem onEditPress={props.onEditPress} {...item} />
          )}
        />
      </View>
    </PromptModal>
  );
};

const AvailabilityItem = ({ day, week, time, heading, onEditPress }) => {
  return (
    <View style={styles.availabiltyDetailContainer}>
      <Text
        style={[styles.availabiltyStart, heading && styles.availabiltyHeading]}
      >
        {day}
      </Text>
      <Text
        style={[styles.availabiltyCenter, heading && styles.availabiltyHeading]}
      >
        {week}
      </Text>
      <Text
        style={[styles.availabiltyEnd, heading && styles.availabiltyHeading]}
      >
        {time}
      </Text>

      {heading ? (
        <Text
          style={[
            styles.actionContainer,
            styles.availabiltyHeading,
            { color: "#333", textAlign: "right" }
          ]}
        >
          Actions
        </Text>
      ) : (
        <View style={styles.actionContainer}>
          <Icon
            name="pencil"
            type="evilicon"
            size={18}
            containerStyle={{
              paddingLeft: 10
            }}
            color="#67D376"
            onPress={onEditPress}
            underlayColor="#fff"
          />
          <Icon
            name="trash"
            size={18}
            containerStyle={{
              paddingLeft: 10
            }}
            color="red"
            underlayColor="#fff"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 10
  },
  availabiltyDetailContainer: {
    flexDirection: "row",
    paddingBottom: 10
  },
  availabiltyHeading: { color: "#333", fontWeight: "bold" },
  availabiltyStart: {
    flex: 0.25,
    textAlign: "left",
    color: "#333"
  },
  availabiltyCenter: {
    flex: 0.15,
    textAlign: "center",
    color: "#333"
  },
  availabiltyEnd: {
    flex: 0.4,
    textAlign: "right",
    color: "#333"
  },
  actionContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
