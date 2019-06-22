import { SHOW_ERROR, CLEAR_ERROR } from "../const/actions";

function errorReducer(state, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.message;
    case CLEAR_ERROR:
      return "";
    default:
      return "";
  }
}

export { errorReducer };
