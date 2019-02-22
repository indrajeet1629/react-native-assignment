import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "native-base";
import { View } from "react-native";
import { COLORS } from "../constants/appConstants";
import _ from "lodash";
class TabNav extends Component {
  render() {
    const { repo, menuType } = this.props;
    return (
      <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
        <Text style={{ fontSize: 16, color: COLORS.WHITE, marginRight: 5 }}>
          {menuType}
        </Text>
        {menuType !== "Overview" && (
          // TODO Center the data.
          <View
            style={{
              alignSelf: "center",
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
              backgroundColor: COLORS.WHITE,
              marginTop: 3
            }}
          >
            {repo && (
              <Text style={{ fontSize: 12, margin: 3, textAlign: "center" }}>
                {menuType === "Repositories" ? _.size(repo.repos) : 0}
              </Text>
            )}
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    repo: state && state.git ? state.git : null
  };
}

export default connect(
  mapStateToProps,
  {}
)(TabNav);
