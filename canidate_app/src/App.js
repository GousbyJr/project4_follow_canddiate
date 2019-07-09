import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link} from "react-router";
import AllCanidates from './Components/AllCanidates';
import User from './Components/User';
import OneCanidate from './Components/OneCanidate';
import SignIn from './Components/SignIn'
import AddNewCanidate from './Components/AddNewCanidate';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/user" component={User} />
        <Route exact path="/home" component={AllCanidates} />
        <Route exact path="/canidate/:id" component={OneCanidate} />
        <Route exact path="/canidate/add/:categoryId" component={AddNewCanidate} />
        </Switch>
      </div>
    );
  }
}


export default App;
