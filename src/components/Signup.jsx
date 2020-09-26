import React, { Component } from 'react';
import SignUpForm from "./SignUpForm";
import authenticate from "../modules/auth";


class Signup = () => {
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
