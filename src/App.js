import React, { useEffect, useState } from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Login from "./Login";
import Main from "./Main";

function App() {

  return (
    <Router>
    <Switch>
      <Route exact path="/home" component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
    </Router>
  );
}

export default App;