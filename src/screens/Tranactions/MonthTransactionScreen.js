import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { DiamondHeading } from "../../componants/DiamondHeading";
import { DailyTransactionCard } from "../../componants";
import { isTablet } from "../../constant";

class MonthTransactionScreen extends Component {
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
        feesType: "Professinal fees",
        transactionType: "Redeem",
        amount: 2000,
        date: "02 March 05:55 PM"
      },
      {
        feesType: "Professinal fees",
        transactionType: "Earn",
        amount: 3000,
        date: "02 March 05:55 PM"
      },
      {
        feesType: "Professinal fees",
        transactionType: "Redeem",
        amount: 2000,
        date: "02 March 05:55 PM"
      },
      {
        feesType: "Professinal fees",
        transactionType: "Earn",
        amount: 3000,
        date: "02 March 05:55 PM"
      },
      {
        feesType: "Professinal fees",
        transactionType: "Redeem",
        amount: 2000,
        date: "02 March 05:55 PM"
      },
      {
        feesType: "Professinal fees",
        transactionType: "Earn",
        amount: 3000,
        date: "02 March 05:55 PM"
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
          extraData={this.state}
          data={this.state.transactions}
          style={{ flex: 0.75 }}
          renderItem={({ item }) => <DailyTransactionCard {...item} />}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          contentContainerStyle={{ padding: 20 }}
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
      </View>
    );
  }
}

export default MonthTransactionScreen;
