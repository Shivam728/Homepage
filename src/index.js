import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit

import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Redirect to="/login-page" />
        <Redirect from="/" to="/login-page" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
