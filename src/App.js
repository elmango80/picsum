import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/authService";

import Loading from "./components/ui/loading";

const Layout = React.lazy(() => import("./views/layout/Layout"));
const Login = React.lazy(() => import("./views/login"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => {
              return isAuthenticated() ? (
                <Layout {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location },
                  }}
                />
              );
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
