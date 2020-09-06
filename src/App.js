import React from "react";
import "./App.scss";
import Header from "./components/organisms/Header";
import Main from "./components/organisms/Main";
import { Switch, Route } from "react-router-dom";
import ElencoTimbrature from "./components/organisms/ElencoTimbrature";
function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/elencotimbrature">
          <ElencoTimbrature />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
