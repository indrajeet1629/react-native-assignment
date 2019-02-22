import { StyleSheet } from "react-native";
import { COLORS } from "./constants/appConstants";

const iStyles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: COLORS.WHITE,
    height: 4
  },
  topBarIconStyle: {
    width: 30,
    height: 30
  },
  counterStyle: {
    width: 30,
    height: 30
  },
  topBarLabelStyle: {
    fontSize: 12,
    fontFamily: "Roboto_Regular",
    fontWeight: "bold",
    paddingBottom: 15,
    margin: 5
  },
  headerTitleStyle: {
    fontWeight: "bold",
    alignItems: "center"
  },
  topHeaderStyle: {
    backgroundColor: COLORS.PRIMARY,
    height: 45,
    paddingBottom: 10
  },
  topBarCenterIcon: {
    position: "relative",
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 5
  },
  topBarSideIcons: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5
  }
});
export default iStyles;
