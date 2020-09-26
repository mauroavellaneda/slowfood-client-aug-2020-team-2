  onLogin = async (e) => {debugger
    e.preventDefault();
    const response = await authLogin(
      e.target.login_email.value,
      e.target.login_password.value,
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };



  {
      
      this.state.renderLoginForm  ? (
        <LoginForm submitFormHandler={this.onLogin} />
      ) : (
        <button
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}
        >
          Login
        </button>
      )
  
    }









    sign up 
    import React, { Component } from 'react';
import SignUpForm from "./SignUpForm";
import authenticate from "../modules/auth";


class Signup extends Component {
  state = {
    renderSignUpForm: false,
    authenticate: false

  }

  onSignUp = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value,
      e.target.confirm_password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderSignUpForm: false });
    }
  };

  render () {
  return (
    <>
      {
        this.state.renderSignUpForm ? (
          <SignUpForm />
        ) : (
          <button
            id="signup"
            onClick={() => this.setState({ renderSignUpForm: true })}
          >
            Sign Up
          </button>
        )
      }
    </>
  )
    
}

export default Signup
