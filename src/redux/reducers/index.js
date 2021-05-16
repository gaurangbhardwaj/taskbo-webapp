import { combineReducers } from "redux";
import user from "./user";
import loader from "./loader";
import task from "./task";
import bucket from "./bucket";

export default combineReducers({
  loader,
  user,
  task,
  bucket,
});
