import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner, Container } from "native-base";
import RepositoriesScreen from "../screens/RepositoriesScreen";
import { getRepos } from "../actions/repositoryActions";

class Repositories extends Component {
  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    const { repo } = this.props;
    return (
      <Container>
        {repo && repo.isLoading && <Spinner />}
        {repo && !repo.isLoading && (
          <RepositoriesScreen
            data={repo.repos}
            currentTab={this.props.thisTab}
          />
        )}
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    getRepos: () => {
      return dispatch(getRepos());
    }
  };
}

function mapStateToProps(state) {
  return {
    repo: state && state.git ? state.git : null
  };
}

export default connect(
  mapStateToProps,
  bindAction
)(Repositories);
