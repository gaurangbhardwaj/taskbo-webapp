import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, Router } from "react-router";
import History from "manager/history";
import Loader from "components/shared/loader";

const LazyNavigationHeader = lazy(() =>
  import("components/app/navigation-header")
);
const LazyLogin = lazy(() => import("components/app/auth/login"));
const LazySignUp = lazy(() => import("components/app/auth/sign-up"));
const LazyTask = lazy(() => import("components/app/task"));
const LazyBucket = lazy(() => import("components/app/bucket"));

const AppRoutes = () => (
  <>
    <LazyNavigationHeader />
    <Switch>
      <Route exact path="/task" component={LazyTask} />
      <Route exact path="/bucket" component={LazyBucket} />
      <Redirect exact from="*" to="/task" />
    </Switch>
  </>
);

const AuthRoutes = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LazyLogin} />
      <Route exact path="/sign-up" component={LazySignUp} />
      <Redirect exact from="*" to="/login" />
    </Switch>
  </>
);

const Routes = () => {
  const reduxState = useSelector(({ loader, user }) => {
    return {
      isLoading: loader.isLoading,
      isLoggedIn: !!(user.isLoggedIn && user.token),
    };
  });
  return (
    <Router history={History}>
      {reduxState.isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        {reduxState.isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
      </Suspense>
    </Router>
  );
};

export default Routes;
