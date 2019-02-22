import { StyleSheet } from "react-native";
import { COLORS } from "../constants/appConstants";

const aStyles = StyleSheet.create({
  repoName: {
    fontSize: 16,
    fontFamily: "Lato_Regular",
    padding: 2,
    margin: 2,
    color: COLORS.BLUE
  },
  description: {
    fontSize: 14,
    color: COLORS.GREY,
    fontFamily: "Lato_Regular"
  },
  alignItems: {
    paddingLeft: 5,
    marginLeft: 16
  },
  language: {
    fontSize: 16,
    color: COLORS.GREY
  },
  details: {
    backgroundColor: COLORS.WHITE,
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "nowrap",
    paddingTop: 1,
    paddingBottom: 1
  },
  spacer: {
    marginRight: 5,
    color: COLORS.GREY
  },
  main: {
    flexDirection: "row",
    flexWrap: "nowrap",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.GREY,
    padding: 5,
    margin: 5
  },
  wrapItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5
  },
  success: {
    padding: 6,
    margin: 6,
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    backgroundColor: COLORS.GREEN
  },
  danger: {
    padding: 6,
    margin: 6,
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    backgroundColor: COLORS.RED
  },
  warning: {
    padding: 6,
    margin: 6,
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    backgroundColor: COLORS.ORANGE
  },
  none: {
    padding: 6,
    margin: 6,
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    backgroundColor: COLORS.WHITE
  }
});
export default aStyles;
