import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import ElencoTimbrature from "./components/pages/ElencoTimbrature";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Splashscreen from "./components/pages/Splashscreen";

import Main from "./components/pages/Main";
import { UserContext } from "./context/UserContext";

import AuthService from "./services/AuthService";

import "./App.scss";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSplashscreen, setShowSplashscreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashscreen(false);
    }, 2000);

    const authToken = () => {
      AuthService.checkToken()
        .then((response) => {
          if (response)
            setUserData({
              id: response.data.user.id,
              name: response.data.user.name,
              email: response.data.user.email,
              picture: response.data.user.picture,
            });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    authToken();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        {loading || showSplashscreen ? (
          <Splashscreen />
        ) : (
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute
              path="/elencotimbrature"
              exact
              component={ElencoTimbrature}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
