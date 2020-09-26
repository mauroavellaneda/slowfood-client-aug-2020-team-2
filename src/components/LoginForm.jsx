import React from "react";

const LoginForm = ({submitFormHandler}) => {
  return (
    <form onSubmit={submitFormHandler} id="login-form">
      <label>Email</label>
      <input name="login_email" type="email" id="login_email"></input>

      <label>Password</label>
      <input name="login_password" type="password" id="login_password"></input>

      <button id="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
