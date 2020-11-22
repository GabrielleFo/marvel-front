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
import CharacterCommics from "./containers/CharacterCommics";

//import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/CharacterCommics">
          <CharacterCommics />
        </Route>
        <Route path="/Favorites">
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
