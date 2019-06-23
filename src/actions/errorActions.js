import { SHOW_ERROR } from "../const/actions";

function showError(message) {
  return {
    type: SHOW_ERROR,
    message
  };
}

export { showError };
