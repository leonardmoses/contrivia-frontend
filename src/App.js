import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Splash from './pages/Splash';
import Home from './pages/Home';
import New from './components/New';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={()=> <Splash />} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;