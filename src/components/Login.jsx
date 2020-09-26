import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import authLogin from "../modules/auth"


class Login = () => {

  state = {
    renderLoginForm: false,
    authLogin: false

  }  
  
  onLogin = async (e) => {
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
  return (
    <>
    {
      this.state.renderLoginForm  ? (
        <LoginForm />
      ) : (
        <button
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}
        >
          Login
        </button>

      )}
    </>
  )
}

export default Login
