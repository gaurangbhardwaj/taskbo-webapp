import { getDataFromLocalStorage } from "manager/session-manager";
import { cookiesConstants, ReduxEvent } from "constant";

const userDetails = getDataFromLocalStorage(cookiesConstants.USER_DETAILS) || "";
const token = getDataFromLocalStorage(cookiesConstants.TOKEN) || "";
const isLoggedIn =
  getDataFromLocalStorage(cookiesConstants.IS_LOGGED_IN) || false;

const initialState = {
  userDetails: userDetails,
  token: token,
  isLoggedIn: isLoggedIn,
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
