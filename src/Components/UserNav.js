import React, { Component } from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";
import "../css/Navigation.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from "../images/codelingowo.png";
import "../css/UserNav.css";
class UserNav extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    // const { isAuthenticated, user } = this.props.auth;
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
        </ButtonGroup>
    )
    
    const guestLinks = (
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
        <Nav className="ml-auto">{authLink}{/* isAuthenticated ? authLink : guestLinks */}</Nav>
      </Navbar>
    );
  }
}

UserNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default UserNav;