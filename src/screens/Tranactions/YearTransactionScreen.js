import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { DiamondHeading } from "../../componants/DiamondHeading";
import { MonthlyTransactionCard } from "../../componants";
import { isTablet } from "../../constant";

class YearTransactionScreen extends Component {
  state = {
    headlines: [
      {
        title: "total service points earned",
        count: 200
      },
      {
        title: "total service points earned",
        count: 200
      },
      {
        title: "total service points earned",
        count: 200
      }
    ],
    transactions: [
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000,
        month: "January"
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000,
        month: "January"
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000,
        month: "January"
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000,
        month: "January"
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000,
        month: "January"
      }
    ]
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(_, key) => key.toString()}
          extraData={this.state}
          data={this.state.transactions}
          style={{ flex: 0.75 }}
          renderItem={({ item }) => (
            <MonthlyTransactionCard
              onPress={() =>
                this.props.navigation.navigate("monthlyTransaction")
              }
              {...item}
            />
          )}
          columnWrapperStyle={
            isTablet()
              ? {
                  justifyContent: "space-evenly"
                }
              : undefined
          }
          numColumns={isTablet() ? 2 : 1}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          contentContainerStyle={{ padding: 20 }}
        />
      </View>
    );
  }
}

export default YearTransactionScreen;
