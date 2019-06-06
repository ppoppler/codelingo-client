import React, { Component } from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";
import "../css/Navigation.css";
import PropTypes from "prop-types";
import logo from "../images/codelingowo.png";

class Navigation extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    
    const authLink = (
      <ButtonGroup id="loginButtonGroup" aria-label="Basic">
        <Button
          id="loginButton"
          variant="success"
          size="lg"
          className="Rubik"
          style={{ fontSize: "18px" }}
          href="#"
          onClick={this.onLogout.bind(this)}
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
        {guestLinks}
        {/* {{isAuthenticated ? authLink : guestLinks}} */}
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default Navigation;