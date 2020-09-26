import React, { Component } from "react";
import { getProducts } from "../modules/menu";
import SignUpForm from "./SignUpForm";
import { authenticate } from '../modules/auth';


class MenuList extends Component {
  state = {
    menuList: [],
    renderSignUpForm: false,
    authenticate: false
  };

  componentDidMount() {
    this.getMenuList();
  }

  async getMenuList() {
    let result = await getProducts();
    this.setState({ menuList: result });
  }

  render() {
    let menu;
    if (this.state.menuList.length > 0) {
      menu = this.state.menuList.map((product) => {
        return (
          <div data-cy={"product-" + product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        );
      });
    }
    const renderSignUp = this.state.renderSignUpForm ? (
      <SignUpForm />
    ) : (
      <button
        id="signup"
        onClick={() => this.setState({ renderSignUpForm: true })}
      >
        Sign Up
      </button>
    );

    return (<div>{menu}</div>), (<div>{renderSignUp}</div>);
  }
  onSignUp = async e => {
    e.preventDefault();
    const response = await authenticate (
      e.target.email.value, 
      e.target.password.value,
      e.target.confirm_password.value  
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderSignUpForm: false });
    }
  }
}

export default MenuList;
