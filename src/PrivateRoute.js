import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./context/UserContext";
import Header from "./components/organisms/Header";
import ProfilePage from "./components/pages/Profile";

function PrivateRoute({ component: Component, ...rest }) {
  const { userData } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        userData ? (
          <>
            <Header />
            {userData.contrattoSelezionato ? (
              <Component {...props} />
            ) : (
              <ProfilePage />
            )}
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
