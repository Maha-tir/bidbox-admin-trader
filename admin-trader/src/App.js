import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { authRoutes, adminRoutes } from "./routes/allRoutes";
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
    exact
  ></Route>
);
function App() {
  return (
    <Router>
      <Switch>
        {authRoutes.map((route, index) => (
          <AppRoute
            key={index}
            path={route.path}
            component={route.component}
            layout={route.layout}
          />
        ))}
        {adminRoutes.map((route, index) => (
          <AppRoute
            key={index}
            path={route.path}
            component={route.component}
            layout={route.layout}
          />
        ))}
        <Redirect strict from="/" to="/auth/login" />
      </Switch>
    </Router>
  );
}

export default App;
