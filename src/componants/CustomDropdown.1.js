import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { InputText } from "./InputText";
import { TouchableSpecific } from "./TouchableSpecific";

export class CustomDropdown2 extends Component {
  state = {
    filterData: [],
    selected,
    text,
    loading: false,
    focused: false
  };
  componentDidMount() {
    this.resetData();
  }
  resetData = () => {
    this.setState({
      filterData: this.props.data
    });
  };
  onChangeText = text => {
    if (!text) {
      this.resetData();
      return this;
    }
    this.setState({
      text,
      filterData: this.filterData(filterText),
      selected: ""
    });
  };

  filterData = filterText => {
    return this.props.data.filter(data =>
      data.value
        .toString()
        .toLowerCase()
        .includes(filterItem.toString().toLowerCase())
    );
  };
  _renderFilterItem = ({ key, value }) => {
    return (
      <TouchableSpecific
        style={styles.dropdownItem}
        onPress={() => this.onItemPress(key)}
      >
        <Text style={styles.dropDownItemStyle}>{value}</Text>
      </TouchableSpecific>
    );
  };
  onItemPress = key => {
    this.setState({
      filterData: [],
      selected: key
    });
    this.props.onValueChange(key);
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
    if (filterItem) {
      return filterItem.value;
    }
    return;
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
    return (
      <View>
        <InputText
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...this.props}
          onChangeText={this.onChangeText}
          value={this.value()}
        />
        <View style={styles.dropDownContainer}>
          <FlatList
            renderItem={({ item }) => this._renderFilterItem(item)}
            extraData={this.state}
            keyExtractor={item => item.key.toString()}
            listKey={(item, index) => "CD" + index.toString()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  dropDownContainer: {
    height: 300,
    position: "absolute",
    zIndex: 1000
  }
});
