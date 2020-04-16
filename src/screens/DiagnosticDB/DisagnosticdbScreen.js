import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { DiagnosticdbCard, PromptModal, ModalCheckbox } from "../../componants";
import { isTablet } from "../../constant";

class DiagnosticdbScreen extends Component {
  state = {
    data: [
      {
        sno: "1",
        name: "Lorem ipsum",
        number: 200
      },
      {
        sno: "2",
        name: "Lorem ipsum",
        number: 200
      },
      {
        sno: "3",
        name: "Lorem ipsum",
        number: 200
      },
      {
        sno: "4",
        name: "Lorem ipsum",
        number: 200
      },
      {
        sno: "5",
        name: "Lorem ipsum",
        number: 200
      }
    ],
    searchModalVisible: false
  };

  componentDidMount() {
    this.props.navigation.setParams({
      openSearch: this.toggleSearch.bind(this)
    });
  }

  toggleSearch = () => {
    this.setState(prev => ({
      searchModalVisible: !prev.searchModalVisible
    }));
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{ padding: 20, flexGrow: 1 }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
          extraData={this.state.data}
          renderItem={({ item }) => <DiagnosticdbCard {...item} />}
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
        <PromptModal
          visible={this.state.searchModalVisible}
          heading="Search"
          onCancel={this.toggleSearch}
        >
          <View style={{ padding: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ModalCheckbox
                title="Indivisual Test"
                checked
                containerStyle={{
                  padding: 0,
                  margin: 0,
                  width: "40%",
                  alignItems: "flex-start",
                  justifyContent: "flex-start"
                }}
              />
              <ModalCheckbox
                title="ProfileTest"
                containerStyle={{
                  padding: 0,
                  margin: 0,
                  width: "40%",
                  alignItems: "flex-start",
                  justifyContent: "flex-start"
                }}
              />
            </View>
          </View>
        </PromptModal>
      </View>
    );
  }
}

export default DiagnosticdbScreen;
