import axios from "axios";
import { API_URL } from "../constants/apiUrlConstants";
import * as types from "../constants/actionTypeConstants";

const getRepos = () => {
  const _url = API_URL.REPOS;
  const getgetReposRequest = axios.get(_url);
  return dispatch => {
    dispatch({ type: types.REPO_API_INPROGRESS, isLoading: true });
    return getgetReposRequest
      .then(({ data }) => {
        return dispatch({ type: types.STORE_REPO, payload: data, isLoading: false });
      })
      .catch(error => {
        dispatch({ type: types.REPO_API_INPROGRESS, isLoading: true });
        throw new Error(error);
      });
  };
};

export { getRepos };
