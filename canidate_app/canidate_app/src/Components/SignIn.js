import React, { Component } from "react";
import { Link } from "react-router-dom";


class SignIn extends Component {
  state = {
    password: "",
    username: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
        <div className="auth-container">
        <h2>Sign In</h2>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleLogin(this.state);
            // this.props.history.push('/home')
          }}
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
          <hr />
          <button>Enter</button>
        </form>
      </div>
    );
  }
}


export default SignIn;
