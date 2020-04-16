import { combineReducers } from "redux";
import signUp from "./SignUpReducer";
import login from "./LoginReducer";

export default combineReducers({
  signUp,
  login
});
