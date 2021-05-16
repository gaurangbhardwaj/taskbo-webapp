import React from "react";
import { useDispatch } from "react-redux";
import { ReduxEvent } from "constant";
import { dispatchAction } from "utility";
import NavigationHeader from "./navigation-header";
import { signOut } from "services/firebase";
import { removeDataFromLocalStorage } from "manager/session-manager";

const NavigationHeaderController = () => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const clearSession = () => {
    removeDataFromLocalStorage("token");
    removeDataFromLocalStorage("user-details");
    removeDataFromLocalStorage("is-logged-in");
    triggerDispatchAction(ReduxEvent.LOGGED_OUT);
  };
  const logout = () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    signOut()
      .catch((err) => alert("Unable to logout user : ", err))
      .then(() => {
        triggerDispatchAction(ReduxEvent.HIDE_LOADER);
        clearSession();
      });
  };
  return <NavigationHeader logout={logout} />;
};

export default NavigationHeaderController;
