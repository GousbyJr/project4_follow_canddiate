import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import decode from 'jwt-decode';
import "./App.css";
import SignUp from './Components/SignUp';
import AllCanidates from './Components/AllCanidates';
import User from './Components/User';
import OneCanidate from './Components/OneCanidate';
import SignIn from './Components/SignIn'
import AddNewCanidate from './Components/AddNewCanidate';

import axios from 'axios';

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
    const res = await axios.post('http://localhost:3001/auth/login', data)
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
    const res = await axios.post('http://localhost:3001/users', data)
    // 2. Retrieve token from response object
    const {token} = res.data
    // 3. save token to local storage at key 'jwt'
    localStorage.setItem("jwt", token)

    // 4. decode token and set currentUser state
    this.setState({
      currentUser: decode(token)
    })

  }

  authHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    const {currentUser} = this.state;
    const userIsLoggedIn = currentUser.user_id
    return (
      <Router>
        <div className="App">
        <header>
        <div></div>
        <h1><Link to='/allcanidates' onClick={() => this.setState({
          canidateBio: {
            name: "",
            politicalParty: "",
            photo: "",
            bio: ""
          }
        })}>iCanidate</Link></h1>
        <div>
        {this.state.currentUser
        ?
        <div>
          <p>{this.state.currentUser.username}</p>
          <button onClick={this.handleLogout}>Sign Out</button>
          </div>
          :
          <div>
          <button onClick={this.handleLoginButton}>Sign In</button>
          <button onClick={this.handleRegister}>Register</button>
           </div>
        }
        </div>
      </header>
      <Route exact path="/" render={()=> (
        <SignIn
          handleLogin={this.handleLogin}
          handleChange={this.authHandleChange}
          formData={this.state.authFormData} />)} />

        <Route 
        exact path="/signup" render={() => (
          <SignUp
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

          <Route
          exact path="/canidates"
          render={() => (
            <AllCanidates
              canidates={this.state.canidates}
              canidateBio={this.state.canidateBio}
              handleFormChange={this.handleFormChange}
              newCanidate={this.newCanidate} />
          )}
        />
          <Route
          path="/new/canidate"
          render={() => (
            < AddNewCanidate
              handleFormChange={this.handleFormChange}
              canidateBio={this.state.canidateBio}
              newCanidate={this.newCanidate} />
          )} />
       <Route
          path="/canidates/:id"
          render={(props) => {
            const { id } = props.match.params;
            const canidate = this.state.canidates.find(el => el.id === parseInt(id));
            return <OneCanidate
              id={id}
              canidate={canidate}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              canidateBio={this.state.canidateBio}
              deleteCanidate={this.deleteCanidate} />
          }}
        />

    {userIsLoggedIn && <Redirect to='/home'/> } 


          <header>
            
{userIsLoggedIn ? 
<div onClick={this.handleLogout}> Log Out </div> : 
<nav> <Link to='/signup'>Sign Up</Link> <br></br><Link to='/login'>Sign in</Link></nav> }         

   <div> {currentUser.user_id && `Hello ${currentUser.username}`} </div>
            <h1>
              <Link
                to="/"
                onClick={() =>
                  this.setState({
                    canidateBio: {
                      name: "",
                      photo: ""
                    }
                  })
                }
              >
               
              </Link>
            </h1>
          </header>
          <Switch>
            <Route exact path="/signin" render={(props) => <SignIn {...props} handleLogin={this.handleLogin} />} />
            <Route exact path="/signup" render={() => <SignUp handleSignUp={this.handleSignUp} />} />
            <Route exact path= '/home' render={()=> <div> this is the homepage </div>} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
