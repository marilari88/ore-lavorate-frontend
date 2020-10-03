import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/organisms/Header";
import Main from "./components/pages/Main";
import ElencoTimbrature from "./components/pages/ElencoTimbrature";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

import UserContext from "./context/UserContext";

import AuthService from "./services/AuthService";

import "./App.scss";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    AuthService.checkToken().then((response) => {
      setUserData({ id: response.data.user.id, name: response.data.user.name });
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/elencotimbrature" component={ElencoTimbrature} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
