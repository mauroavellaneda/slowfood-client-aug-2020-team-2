import React from "react";
import MenuList from "./components/MenuList";
import Login from './components/LoginForm'



const App = () => {
  return (
    <>
      <h1 data-cy="header">Johan's Pizzeria</h1>
      
      <MenuList />
      <Login />
      
      
      
    </>
  );
};

export default App;
