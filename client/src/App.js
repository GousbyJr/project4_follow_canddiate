import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignUp from './Components/SignUp';
import AllCanidates from './Components/AllCanidates';
import User from './Components/User';
import OneCanidate from './Components/OneCanidate';
import SignIn from './Components/SignIn'
import AddNewCanidate from './Components/AddNewCanidate';

import axios from 'axios';
import decode from 'jwt-decode';

class App extends Component {
  state = {
    currentUser: {},
  }
  componentDidMount() {  
    // 1. check if there is token saved in localStorage at "jwt"
    const token = localStorage.getItem('jwt')
    // 2. if there is, decode it and save the object to currentUser state
    if (token){
      this.setState({
        currentUser: decode(token)
      })


    }
    
 
  }

  handleLogin = async (data)=> {
    const res = await axios.post('/auth/login', data)
    // 2. Retrieve token from response object
    const {token} = res.data
    // 3. save token to local storage at key 'jwt'
    localStorage.setItem("jwt", token)

    // 4. decode token and set currentUser state
    this.setState({
      currentUser: decode(token)
    })

    /* 
    1. submit form data to appropriate endpoint
    2. Retrieve token from response object
    3. save token to local storage at key 'jwt'
    4. decode token and set currentUser state
    */

  }

  handleLogout = ()=>{
    // 1. remove jwt from local storage
    localStorage.removeItem('jwt')
    // 2. clear currentUser in state to empty object
    this.setState({
      currentUser: {}
    })


  }

  handleSignUp = async  (data)=> {
    // 1. submit form data to the appropriate endpoint
    const res = await axios.post('/users', data)
    // 2. Retrieve token from response object
    const {token} = res.data
    // 3. save token to local storage at key 'jwt'
    localStorage.setItem("jwt", token)

    // 4. decode token and set currentUser state
    this.setState({
      currentUser: decode(token)
    })

  }

  

  render() {
    const {currentUser} = this.state;
    const userIsLoggedIn = currentUser.user_id
    return (
      <Router>
        <div className="App">
        {this.state.redirectToLogin && <Redirect to='/signin'/>}
        <header>
        {userIsLoggedIn ?<Link onClick = {this.handleLogout} to='/logout'>Sign Out</Link> : <nav> <Link to='/signup'>Sign Up</Link> <Link to='/signin'>Log in</Link></nav> }
        <div className="username">{currentUser.user_id && `Welcome ${currentUser.username}`}</div>
        <div className="title">
        <h1>
        <Link 
        to="/allcanidates" 
        // onClick={() => 
        // this.setState({
        //   canidateBio: {
        //     name: "",
        //     politicalParty: "",
        //     photo: "",
        //     bio: ""
        //   }
        // })
        // }
        >
        iCanidate
        </Link>
        </h1>
        </div>
        </header>
        <Switch>
          <Route exact path="/signin" render={() => <SignIn handleLogin={this.handleLogin} />} />
          <Route exact path="/signup" render={() => <SignUp handleSignUp={this.handleSignUp} />} />
          <Route exact path="/allcanidates" render={() => <AllCanidates  />} />
        </Switch>
        </div>
        
        </Router>
    );
  }
}


export default App;
