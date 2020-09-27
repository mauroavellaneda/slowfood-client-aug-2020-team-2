import React, { Component } from "react";
import MenuList from "./components/MenuList";
import Login from "./components/Login";

class App extends Component {
  state = {
    authenticated: false,
  };
  render() {
    let message;

    this.state.authenticated &&
      (message = (
        <p id="message">
          Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
        </p>
      ));

    this.state.authError &&
      (message = <p id="message">{this.state.authError}</p>);

    return (
      <>
        {message}
        <h1 data-cy="header">Johan's Pizzeria</h1>

        <MenuList />
        <Login
          authenticated={() =>
            this.setState({ authError: undefined, authenticated: true })
          }
          renderLoginError={(authResponse) =>
            this.setState({ authError: authResponse })
          }
        />
      </>
    );
  }
}

export default App;
