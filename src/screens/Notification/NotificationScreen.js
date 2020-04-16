import React, { Component } from "React";
import { View, FlatList } from "react-native";
import { NotificationCard, DatePicker, PromptModal } from "../../componants";
import { isTablet } from "../../constant";

class NotificationScreen extends Component {
  state = {
    data: [
      {
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.",
        time: "16 June, 10:30 AM"
      },
      {
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.",
        time: "16 June, 10:30 AM"
      },
      {
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.",
        time: "16 June, 10:30 AM"
      },
      {
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.",
        time: "16 June, 10:30 AM"
      },
      {
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.",
        time: "16 June, 10:30 AM"
      },
      {
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.",
        time: "16 June, 10:30 AM"
      }
    ],
    date: "",
    editModalVisible: false
  };

  toggleEditModal = () => {
    this.setState(prev => ({
      editModalVisible: !prev.editModalVisible
    }));
  };

  updateDate = date => {
    this.setState({
      date
    });
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        contentContainerStyle={{ padding: 20, flexGrow: 1 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
        extraData={this.state.data}
        renderItem={({ item }) => (
          <NotificationCard onPressEdit={this.toggleEditModal} {...item} />
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
        listKey={(item, index) => "D" + index.toString()}
      />
    );
  }
}

export default NotificationScreen;
