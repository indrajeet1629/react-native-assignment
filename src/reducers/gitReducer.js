import * as types from "../constants/actionTypeConstants";

const initialState = {
  repos: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.STORE_REPO:
      return Object.assign({}, state, {
        repos: action.payload,
        isLoading: action.isLoading
      });
    case types.REPO_API_INPROGRESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    default:
      return state;
  }
  return state;
}
