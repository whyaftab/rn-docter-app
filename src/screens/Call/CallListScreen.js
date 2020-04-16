import React, { Component } from "React";
import { View, FlatList } from "react-native";
import { CallCard, DatePicker, PromptModal } from "../../componants";
import { isTablet } from "../../constant";

class CallListScreen extends Component {
  state = {
    data: [
      {
        title: "Lorem Ipsum",
        time: "16 June, 10:30 AM"
      },
      {
        title: "Lorem Ipsum",
        time: "16 June, 10:30 AM"
      },
      {
        title: "Lorem Ipsum",
        time: "16 June, 10:30 AM"
      },
      {
        title: "Lorem Ipsum",
        time: "16 June, 10:30 AM"
      },
      {
        title: "Lorem Ipsum",
        time: "16 June, 10:30 AM"
      },
      {
        title: "Lorem Ipsum",
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
      <View>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{ padding: 20, flexGrow: 1 }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
          extraData={this.state.data}
          renderItem={({ item }) => (
            <CallCard onPressEdit={this.toggleEditModal} {...item} />
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
        <PromptModal
          visible={this.state.editModalVisible}
          onSubmit={this.toggleEditModal}
          onCancel={this.toggleEditModal}
          heading="Change Date"
        >
          <View style={{ padding: 20, paddingTop: 0 }}>
            <DatePicker
              date={this.state.date}
              onChange={this.updateDate}
              label="Assign Date"
            />
          </View>
        </PromptModal>
      </View>
    );
  }
}

export default CallListScreen;
