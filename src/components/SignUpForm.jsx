import React from "react";

const SignUpForm = props => {
    return (
        <form id="signup-form">
            <label>Email</label>
            <input name="email" type="email" id="email"></input>

            <label>Password</label>
            <input name="password" type="password" id="password"></input>

            <label>Confirm Password</label>
            <input name="confirm-password" type="password" id="confirm-password"></input>

            <button id="submit">Submit</button>
            
        </form>

    );
}
export default SignUpForm