import React from "react";
import { Redirect, Route, Switch } from "react-router";
import styled from "styled-components";
import NavigationHeader from "../navigation-header";
import TaskController from "../task";
import BucketController from "../bucket";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Pages = styled.div`
  margin-top: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Dashboard = () => (
  <Container>
    <NavigationHeader />
    <Pages>
      <Switch>
        <Route exact path="/dashboard/tasks" component={TaskController} />
        <Route exact path="/dashboard/buckets" component={BucketController} />
        {/* <Redirect exact from="*" to="/dashboard/tasks" /> */}
      </Switch>
    </Pages>
  </Container>
);

export default Dashboard;
