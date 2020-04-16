import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { DiamondHeading } from "../../componants/DiamondHeading";
import { YearlyTransactionCard } from "../../componants";
import { isTablet } from "../../constant";

class TransactionScreen extends Component {
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
        balancePoint: 2000
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000
      },
      {
        year: "2019",
        totalPoint: 3000,
        redeemedPoint: 1000,
        balancePoint: 2000
      }
    ]
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.25 }}>
          <DiamondHeading
            data={this.state.headlines}
            conatinerStyle={{ height: "100%", elevation: 1 }}
          />
        </View>
        <FlatList
          keyExtractor={(_, key) => key.toString()}
          extraData={this.state}
          data={this.state.transactions}
          style={{ flex: 0.75 }}
          renderItem={({ item }) => (
            <YearlyTransactionCard
              onPress={() =>
                this.props.navigation.navigate("yearlyTransaction")
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

export default TransactionScreen;
