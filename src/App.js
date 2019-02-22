import React, { Component } from "react";
import { Root, Container, Badge, Text } from "native-base";
import { Icon as NativeIcon } from "react-native-elements";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Repositories from "./components/Repositories";
import Icon from "react-native-vector-icons/FontAwesome";
import { Platform } from "react-native";
import { COLORS } from "./constants/appConstants";
import aStyles from "./styles.android";
import iStyles from "./styles.ios";
const styles = Platform.OS === "android" ? aStyles : iStyles;
import TabNav from "./components/TabNav";

const GitTabs = screenName =>
  createMaterialTopTabNavigator(
    {
      Overview: {
        screen: props => <Repositories thisTab="Overview" />,
        navigationOptions: () => ({
          tabBarLabel: <TabNav menuType="Overview" />
        })
      },
      Repositories: {
        screen: props => <Repositories thisTab="Repositories" />,
        navigationOptions: () => ({
          tabBarLabel: <TabNav menuType="Repositories" />
        })
      },
      Stars: {
        screen: props => <Repositories thisTab="Stars" />,
        navigationOptions: () => ({ tabBarLabel: <TabNav menuType="Stars" /> })
      }
    },
    {
      initialRouteName: screenName,
      swipeEnabled: true,
      lazy: false,
      tabBarPosition: "top",
      animationEnabled: true,
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.topBarLabelStyle,
        activeTintColor: COLORS.WHITE,
        inactiveTintColor: COLORS.WHITE,
        pressColor: COLORS.WHITE,
        style: {
          backgroundColor: COLORS.PRIMARY,
          height: 80,
          paddingBottom: 15
        },
        tabBarIcon: (
          <NativeIcon
            name="notifications"
            size={5}
            color={COLORS.WHITE}
            iconStyle={styles.topBarSideIcons}
          />
        )
      }
    }
  );

const AppNavigator = createStackNavigator(
  {
    Repositories: {
      screen: GitTabs("Repositories")
    }
  },
  {
    headerMode: "screen",
    initialRouteName: "Repositories",
    navigationOptions: {
      headerTintColor: COLORS.WHITE,
      headerStyle: styles.topHeaderStyle,
      headerTitleContainerStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },

      // title: "indrajeet",
      headerTitle: <Icon name="github" size={40} color={COLORS.WHITE} />,
      headerLeft: (
        <NativeIcon
          name="menu"
          size={25}
          color={COLORS.WHITE}
          iconStyle={styles.topBarSideIcons}
        />
      ),
      headerRight: (
        <NativeIcon
          name="notifications"
          size={25}
          color={COLORS.WHITE}
          iconStyle={styles.topBarSideIcons}
        />
      )
    },
    portraitOnlyMode: true,
    animationEnabled: true
  }
);

export default class App extends Component {
  render() {
    return (
      <Root>
        <Container>
          <AppNavigator />
        </Container>
      </Root>
    );
  }
}
