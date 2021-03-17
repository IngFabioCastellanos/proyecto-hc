import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Agenda from "../views/agenda";
import HistoriaClinica from "../views/historiaClinica";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
        <Route path="/HistoriaClinica">
          <HistoriaClinica />
        </Route>
        <Route path="/agenda">
          <Agenda />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
