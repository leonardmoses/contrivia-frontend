import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Splash from './pages/Splash';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={()=> <Splash />} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;