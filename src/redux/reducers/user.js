import sessionManager from "manager/session-manager";
import { cookiesConstants, ReduxEvent } from "constant";

const userData = sessionManager.getDataFromCookies(cookiesConstants.USER) || "";
const sessionToken =
  sessionManager.getDataFromCookies(cookiesConstants.SESSION_TOKEN) || "";

const initialState = {
  userDetails: userData,
  sessionToken: sessionToken,
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ReduxEvent.LOGGED_IN:
      return {
        userDetails: action.data?.userDetails,
        token: action.data?.token,
        isLoggedIn: true,
      };
    case ReduxEvent.LOGGED_OUT:
      return {
        userDetails: "",
        token: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
