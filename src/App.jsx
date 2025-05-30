// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/Landingpage";
import NoticeBoard from "./Components/NoticeBoard";
import Jobs from "./Components/Jobs";
import Crew from "./Components/Crew";
import Actors from "./Components/Actors";
import Ratecards from "./Components/Ratecards";
import Equipment from "./Components/Equipment";
import ProductionHse from "./Components/ProductionHse";
import WannaVent from "./Components/WannaVent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/noticeboard" exact component={NoticeBoard} />
        <Route path="/noticeboard/jobs" component={Jobs} />
        <Route path="/noticeboard/crew" component={Crew} />
        <Route path="/noticeboard/actors" component={Actors} />
        <Route path="/noticeboard/ratecards" component={Ratecards} />
        <Route path="/noticeboard/equipment" component={Equipment} />
        <Route path="/noticeboard/productionhse" component={ProductionHse} />
        <Route path="/noticeboard/wannavent" component={WannaVent} />
        <Route path="*">
          <div className="text-center text-xl text-red-700 mt-6">Jaribu Next Door</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
