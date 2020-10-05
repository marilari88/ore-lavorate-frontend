import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/organisms/Header";
import { useAuth } from "./context/UserContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { userData } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        userData ? (
          <>
            <Header />
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
