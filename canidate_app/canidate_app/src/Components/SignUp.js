import React, { Component } from "react";
import { Link } from "react-router-dom";



class SignUpForm extends Component {
  state = {
    password: "",
    username: "",
    email: "",
    passwordConfirm: ""
    
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    
    // 1. check that password and password confirm match; alert the user and prevent submission if they don't
    if (this.state.passwordConfirm !== this.state.password){
        
        alert('Your passwords do not match')
        return this.setState({
            password: "",
            passwordConfirm: ""
        })
    }

    this.props.handleSignUp(this.state)
    /*
    2. Otherwise, call the handleSignup from props with the form data 
    */

  }

  render() {
    return (
      <div className="register-container">
        <h2>Sign Up</h2>
        <hr />
        <form
          onSubmit={this.handleSubmit}
        >
          <placeholder>Username:</placeholder>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        <placeholder>Email:</placeholder>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <placeholder>Password:</placeholder>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
            <placeholder>Confirm Password</placeholder>
           <input
            name="passwordConfirm"
            type="password"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
          />

          <hr/>
          <button>Enter</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
