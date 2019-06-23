import { UPDATE_CONTENT } from "../const/actions";

function contentReducer(state, action) {
  switch (action.type) {
    case UPDATE_CONTENT:
      return action.text;
    default:
      return state;
  }
}

export { contentReducer };
