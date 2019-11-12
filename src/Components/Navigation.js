import React, { Component } from "react";
import { Navbar, Button, ButtonGroup } from "react-bootstrap";
import "../css/Navigation.css";
import logo from "../images/codelingowo.png";
import {AUTH_TOKEN} from '../constants';

/**
 * React component for the navbar when a user is not logged in 
 */

class Navigation extends Component {
  onLogout(e) {
    e.preventDefault();
    this.logoutUser();
  }

  logoutUser() {
    localStorage.setItem(AUTH_TOKEN, '');
    this.render();
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const authLink = (
      <ButtonGroup id="loginButtonGroup" aria-label="Basic">
        <Button
          id="account"
          variant="success"
          size="lg"
          className="Rubik"
          style={{ fontSize: "18px" }}
          href="/profile"
        >
          Account
        </Button>
        <Button
          id="loginButton"
          variant="success"
          size="lg"
          className="Rubik"
          style={{ fontSize: "18px" }}
          href="/"
          onClick={this.logoutUser.bind(this)}
        >
          Logout
        </Button>
      </ButtonGroup>
    );
    const guestLinks = (
        <Button
          id="loginButton"
          variant="success"
          size="lg"
          className="Rubik"
          style={{ fontSize: "18px" }}
          href="/login"
        >
          Login
        </Button>
    );
    return (
      <Navbar
        style={{ backgroundColor: "#171717" }}
        expand="lg"
        className="fixed-top"
      >
        <Navbar.Brand href="/" className="mr-auto">
          <img src={logo} className="logo" alt="codelingo" />
        </Navbar.Brand>
        {authToken ? (
          authLink) : (guestLinks
        )}
      </Navbar>
    );
  }
}



const mapStateToProps = state => ({
  auth: state.auth
});

export default Navigation;