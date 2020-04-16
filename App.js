import React, { Component } from "react";
import { View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import reducers from "./src/reducers";
import { AppContainer } from "./src/navigation";
import * as theme from "./src/constant/theme.json";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

console.disableYellowBox = true;
export default class App extends Component {
  state = {
    isReady: false
  };
  async componentWillMount() {
    await Font.loadAsync({
      Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
      RobotoThin: require("./assets/fonts/Roboto-Bold.ttf")
    });

    this.setState({
      isReady: true
    });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}
