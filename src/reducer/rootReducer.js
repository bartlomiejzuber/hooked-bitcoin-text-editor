import combineReducers from "../utils/combine-reducers";
import { contentReducer } from "./contentReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  error: errorReducer
});

export default rootReducer;
