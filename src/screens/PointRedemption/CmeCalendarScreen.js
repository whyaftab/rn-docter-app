import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native-elements";
import { EventCard } from "../../componants";
import { colors, demoStyles, isTablet } from "../../constant";

class CmeCalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          month: "Sep",
          day: 20,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "5PM GMT +5:30",
          location: "Sydney, 100ft Ring Road, Cricket Ground"
        },
        {
          month: "Sep",
          day: 20,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industrydsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          time: "5PM GMT +5:30",
          location: "Sydney, 100ft Ring Road, Cricket Ground"
        },
        {
          month: "Sep",
          day: 20,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "5PM GMT +5:30",
          location: "Sydney, 100ft Ring Road, Cricket Ground"
        },
        {
          month: "Sep",
          day: 20,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "5PM GMT +5:30",
          location: "Sydney, 100ft Ring Road, Cricket Ground"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Calendar
          style={{ flex: 0.4 }}
          onDayLongPress={this.onDayLongPress}
          markedDates={{
            "2019-09-20": {
              marked: true,
              selected: true
            },
            "2019-09-16": {
              marked: true
            },
            "2019-09-24": {
              marked: true
            },
            "2019-09-06": {
              marked: true
            }
          }}
          hideArrows={false}
          theme={{
            dotColor: "red",
            arrowColor: colors.primary,
            selectedDayBackgroundColor: colors.primary,
            selectedDayTextColor: "#ffffff",
            currentDayBackgroundColor: "grey",
            textMonthFontWeight: "bold"
          }}
          style={[demoStyles.elevationStyle]}
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.data}
            ListHeaderComponent={() => (
              <Text style={styles.headingStyle}>2 Events Found</Text>
            )}
            renderItem={({ item }) => <EventCard {...item} />}
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
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  text: {
    textAlign: "center",
    borderColor: "#bbb",
    padding: 10,
    backgroundColor: "#eee"
  },
  container: {
    flex: 1
  },
  headingStyle: {
    textAlign: "center",
    fontSize: 18,
    padding: 10,
    fontWeight: "bold"
  }
});

export default CmeCalendarScreen;
