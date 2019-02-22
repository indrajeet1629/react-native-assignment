import * as React from "react";
import * as Expo from "expo";
import configureStore from "../store/storeConfigure";
import App from "../App";
import { Provider } from "react-redux";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/fonts/FontAwesome.ttf";
import MaterialIcons from "@expo/vector-icons/fonts/MaterialIcons.ttf";
import Feather from "@expo/vector-icons/fonts/Feather.ttf";

import Entypo from "@expo/vector-icons/fonts/Entypo.ttf";
import EvilIcons from "@expo/vector-icons/fonts/EvilIcons.ttf";
import Foundation from "@expo/vector-icons/fonts/Foundation.ttf";

import Ionicons from "@expo/vector-icons/fonts/Ionicons.ttf";
import MaterialCommunityIcons from "@expo/vector-icons/fonts/MaterialCommunityIcons.ttf";
import Octicons from "@expo/vector-icons/fonts/Octicons.ttf";

import SimpleLineIcons from "@expo/vector-icons/fonts/SimpleLineIcons.ttf";
import Zocial from "@expo/vector-icons/fonts/Zocial.ttf";

export default class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(),
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Lato_Bold: require("../assets/fonts/Lato-Bold.ttf"),
      Lato_Regular: require("../assets/fonts/Lato-Regular.ttf"),
      Lato_Light: require("../assets/fonts/Lato-Light.ttf"),
      Montserrat_Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
      Montserrat_Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
      Montserrat_Light: require("../assets/fonts/Montserrat-Light.ttf"),
      Roboto_Bold: require("../assets/fonts/Roboto-Bold.ttf"),
      Roboto_medium: require("../assets/fonts/Roboto-Medium.ttf"),
      Roboto_Regular: require("../assets/fonts/Roboto-Regular.ttf"),
      Roboto_Light: require("../assets/fonts/Roboto-Light.ttf"),
      "Material Icons": MaterialIcons,
      FontAwesome,
      MaterialIcons,
      Feather,
      Entypo,
      EvilIcons,
      Foundation,
      Ionicons,
      MaterialCommunityIcons,
      Octicons,
      SimpleLineIcons,
      Zocial
    });
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text />
        </View>
      );
    } else {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }
}
