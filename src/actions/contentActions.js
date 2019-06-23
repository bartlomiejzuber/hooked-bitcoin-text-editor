import { UPDATE_CONTENT } from "../const/actions";

function updateContent(text) {
    return {
      type: UPDATE_CONTENT,
      text
    };
  }
  
  export { updateContent };
  