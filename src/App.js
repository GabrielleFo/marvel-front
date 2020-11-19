import React from "react";
import "./App.css";

//import des packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import composants
import Header from "./components/Header";

//import des containers
import Favorites from "./containers/ Favorites";
import Character from "./containers/Character";
import Comics from "./containers/Comics";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Character />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
