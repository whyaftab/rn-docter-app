import React, { Component } from "react";
import Swiper from "react-native-swiper";
import { RxCard } from "../../componants";
import { Icon } from "react-native-elements";
import { colors } from "../../constant";

class WriteRxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Jon doe",
          since: "05/01/2005",
          lastVisitOn: "05/01/2019",
          date: "02 Jul 05:00 PM",
          phone: "9090909090",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
          name: "Jon doe 2",
          since: "05/01/2005",
          lastVisitOn: "05/01/2019",
          date: "02 Jul 05:00 PM",
          phone: "9090909090",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        }
      ]
    };
  }

  render() {
    return (
      <Swiper
        showsPagination={false}
        showsButtons
        nextButton={
          <Icon
            name="ios-arrow-dropright"
            size={40}
            type="ionicon"
            color="#dcdcdc"
          />
        }
        prevButton={
          <Icon
            name="ios-arrow-dropleft"
            size={40}
            type="ionicon"
            color="#dcdcdc"
          />
        }
      >
        {this.state.data.map(item => (
          <RxCard
            {...item}
            onPress={() => this.props.navigation.navigate("captureRx")}
          />
        ))}
      </Swiper>
    );
  }
}

export default WriteRxScreen;
