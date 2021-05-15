import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, Router } from "react-router";
import History from "./manager/history";
import Loader from "./components/shared/loader";
import Login from "./components/app/auth/login";
import SignUp from "./components/app/auth/sign-up";

const Routes = () => {
  const isLoading = useSelector(({ loader }) => loader.isLoading);
  console.log("isLoading ==== > ", isLoading);
  return (
    <Router history={History}>
      {isLoading && <Loader />}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Redirect exact from="*" to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;
