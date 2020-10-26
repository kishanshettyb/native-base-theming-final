import React from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Screens } from "./navigation/Screens";

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Poppins_medium: require("./assets/fonts/Poppins-Medium.ttf"),
      Poppins_regular: require("./assets/fonts/Poppins-Regular.ttf"),
      Poppins_semi_bold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    return <Screens />;
  }
}
