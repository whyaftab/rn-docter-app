import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { WriteRxCard } from "../../../componants";

class WriteRxListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          sno: "1",
          name: "test",
          number: "909099090",
          date: "02 Jul 05:55PM"
        },

        {
          sno: "2",
          name: "test",
          number: "909099090",
          date: "02 Jul 05:55PM"
        },
        {
          sno: "3",
          name: "test",
          number: "909099090",
          date: "02 Jul 05:55PM"
        },
        {
          sno: "4",
          name: "test",
          number: "909099090",
          date: "02 Jul 05:55PM"
        }
      ]
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-around"
        }}
        contentContainerStyle={{ padding: 20, flexGrow: 1 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
        extraData={this.state.data}
        renderItem={({ item }) => <WriteRxCard {...item} />}
      />
    );
  }
}

export default WriteRxListScreen;
