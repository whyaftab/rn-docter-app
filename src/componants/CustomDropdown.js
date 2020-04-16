import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import Animated from "react-native-reanimated";
import { InputText } from "./InputText";
import { TouchableSpecific } from "./TouchableSpecific";
import { demoStyles, colors } from "../constant";

export class CustomDropdown extends Component {
  state = {
    filterData: [],
    selected: false,
    text: "",
    loading: false,
    focused: false
  };
  componentDidMount() {
    this.resetData();
  }
  resetData = () => {
    this.setState({
      filterData: this.props.data,
      text: ""
    });
  };
  onChangeText = text => {
    if (!text) {
      this.resetData();
      return this;
    }
    this.setState({
      text,
      filterData: this.filterData(text),
      selected: ""
    });
  };

  filterData = filterText => {
    return this.props.data.filter(data =>
      data.value
        .toString()
        .toLowerCase()
        .includes(filterText.toString().toLowerCase())
    );
  };
  _renderFilterItem = (item, index) => {
    const { key, value } = item;
    return (
      <TouchableSpecific
        key={key.toString()}
        style={[
          styles.dropdownItem,
          index == this.state.filterData.length - 1 && { borderBottomWidth: 0 }
        ]}
        onPress={() => this.onItemPress(key)}
      >
        <Text style={styles.dropDownItemStyle}>{value}</Text>
      </TouchableSpecific>
    );
  };
  onItemPress = key => {
    this.setState({
      filterData: this.props.data,
      selected: key
    });
    // this.props.onValueChange(key);
    this.fetchValueByKey(key);
    this.refs.myInput.refs.myInputCustom.blur();
  };
  value = () => {
    if (this.props.value) {
      return this.fetchValueByKey(this.state.value);
    } else if (this.state.selected) {
      return this.fetchValueByKey(this.state.selected);
    }
    return "";
  };
  fetchValueByKey = key => {
    let filterItem = this.props.data.find(data => data.key == key);
    if (Object.keys(filterItem).length) {
      console.log(this.state);
      return this.setState({
        text: filterItem.value
      });
    }

    return this.setState({
      text: ""
    });
  };
  onFocus = () =>
    this.setState({
      focused: true
    });
  onBlur = () =>
    this.setState({
      focused: false
    });
  render() {
    const props = { ...this.props, containerStyle: undefined };
    return (
      <View style={this.props.containerStyle}>
        <InputText
          ref="myInput"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.state.text}
          {...props}
          onChangeText={this.onChangeText}
        />

        {this.state.focused && (
          <View style={styles.dropDownContainer}>
            <ScrollView
              keyboardShouldPersistTaps="always"
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {this.state.filterData.map(this._renderFilterItem)}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  dropDownContainer: {
    ...demoStyles.elevationStyle,
    width: "100%",
    position: "absolute",
    top: 60,
    zIndex: 1000,
    backgroundColor: "#fff",
    maxHeight: 200
  },
  dropDownItemStyle: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold"
  },
  dropdownItem: {
    padding: 20,
    borderColor: colors.borderColor,
    borderBottomWidth: 1
  }
});
