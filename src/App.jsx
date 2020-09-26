import React from "react";
import MenuList from "./components/MenuList";
import SignUpForm from './components/SignUpForm'

const App = () => {
  return (
    <>
      <h1 data-cy="header">Johan's Pizzeria</h1>
      <MenuList />
      <button id="signup">Sign Up</button>
      <SignUpForm />
    </>
  );
};

export default App;
