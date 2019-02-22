import React, { Component } from "react";
import {
  Content,
  Text,
  Badge,
  Header,
  Item,
  Input,
  Button,
  Icon as Icons
} from "native-base";
import { Platform, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import aStyles from "./styles.android";
import iStyles from "./styles.ios";
const styles = Platform.OS === "ios" ? iStyles : aStyles;
export default class RepositoriesScreen extends Component {
  getBadgeByType = type => {
    switch (type) {
      case "CSS":
        return styles.success;
      case "HTML":
        return styles.danger;
      case "JavaScript":
        return styles.warning;
      default:
        return styles.none;
    }
  };
  searchBarComp = tab => {
    if (tab === "Repositories")
      return (
        <Header searchBar rounded>
          <Item>
            <Icons name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
  };
  render() {
    const { data, currentTab } = this.props;
    return (
      <Content>
        {this.searchBarComp(currentTab)}
        {data.map((repoItem, index) => {
          return (
            <View key={`repoItem.${index}`} style={styles.main}>
              <View style={styles.details}>
                <View style={styles.wrapItems}>
                  <Icon name="code-fork" size={30} />
                  <Text style={styles.repoName}>{repoItem.full_name}</Text>
                </View>
                <View style={styles.alignItems}>
                  <View style={styles.wrapItems}>
                    <Text style={styles.description}>
                      {repoItem.description ? repoItem.description : "NA"}
                    </Text>
                  </View>
                  <View style={styles.wrapItems}>
                    <Icon name="star" size={20} style={styles.spacer} />
                    <Text>{repoItem.stargazers_count}</Text>
                    <Badge style={this.getBadgeByType(repoItem.language)} />
                    <Text style={styles.language}>{repoItem.language}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </Content>
    );
  }
}
