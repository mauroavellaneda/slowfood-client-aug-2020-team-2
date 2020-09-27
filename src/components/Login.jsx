import React, { Component } from 'react'
import { authLogin } from '../modules/auth'
import LoginForm from './LoginForm'


class Login extends Component {
  state = {
    renderLoginForm: false,
  }

  onLogin = async (e) => {
    e.preventDefault();
    const authResponse = await authLogin(
      e.target.login_email.value,
      e.target.login_password.value,
    );
    if (authResponse.authenticated) {
      this.props.authenticated()
    } else {
      this.props.renderLoginError(authResponse.data);
    }
  };

  render() {
    
    return (
      <>
      {
        this.state.renderLoginForm ? (
          <LoginForm 
          submitFormHandler={this.onLogin}
          />
        ) : (
          <button id='login' onClick={() => this.setState({renderLoginForm: true})} data-cy="toggle-login">Login</button>
        )
      }
      </>
    )
  }
}
export default Login