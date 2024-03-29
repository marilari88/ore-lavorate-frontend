import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import ElencoTimbrature from "./components/pages/ElencoTimbrature";
import Register from "./components/pages/Register";
import Login from "components/pages/LoginPage/Login";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import Splashscreen from "./components/pages/Splashscreen";
import ContractPage from "components/pages/ContractPage/ContractPage";

import Main from "./components/pages/Main";
import { UserContext } from "./context/UserContext";

import AuthService from "./services/AuthService";
import ContrattoService from "./services/ContrattoService";

import "./App.scss";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSplashscreen, setShowSplashscreen] = useState(true);
  const [message, setMessage] = useState("Accesso in corso");

  useEffect(() => {
    setTimeout(() => {
      setShowSplashscreen(false);
    }, 1000);

    const authToken = () => {
      AuthService.checkToken()
        .then(async (response) => {
          if (response) {
            const contrattoUtente = response.data.user.contrattoSelezionato
              ? await ContrattoService.get(
                  response.data.user.contrattoSelezionato
                )
              : undefined;

            setUserData({
              id: response.data.user.id,
              name: response.data.user.name,
              email: response.data.user.email,
              picture: response.data.user.picture,
              contrattoSelezionato: contrattoUtente?.data,
            });
          }
          setLoading(false);
        })
        .catch((err) => {
          setMessage(err.message);
        });
    };
    authToken();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ userData, setUserData }}>
          {loading || showSplashscreen ? (
            <Splashscreen message={message} />
          ) : (
            <Switch>
              <PrivateRoute exact path="/" component={Main} />
              <PrivateRoute exact path="/profile" component={ProfilePage} />
              <PrivateRoute exact path="/contract" component={ContractPage} />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
