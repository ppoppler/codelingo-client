import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { AUTH_TOKEN, USER_INFO } from "../constants";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../modules/providers/UserAuthentication";
import gql from "graphql-tag";

class Login extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);
    this.registerPage = this.registerPage.bind(this);
  }

  state = {
    email: "",
    password: "",
    name: "",
    errors: {}
  };

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  routeChange() {
    let path = "../profile";
    this.props.history.push(path);
  }

  registerPage() {
    let path = "../register";
    this.props.history.push(path);
  }

  saveUserData(token, user) {
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(USER_INFO, JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem(USER_INFO)));
  }

  async confirm(data) {
    console.log(data);
    const token = data.loginUser.token;
    const user = data.loginUser.user;
    this.saveUserData(token, user);
    console.log(token);
    console.log(user);
    if (token) {
      this.props.history.push("../profile");
    }
    else{ 

    }
  }

  render() {
    const { email, password, name, errors } = this.state;
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h2 style={{ marginBottom: "40px" }}>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.email
              })}
              name="email"
              onChange={this.handleInputChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password
              })}
              name="password"
              onChange={this.handleInputChange}
              value={password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <Mutation
              mutation={LOGIN_USER}
              variables={{ email, password }}
              onCompleted={data => this.confirm(data)}
            >
              {mutation => (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={mutation}
                >
                  Login User
                </button>
              )}
            </Mutation>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.registerPage}
            >
              Need an account?
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  errors: PropTypes.object.isRequired
};

export default Login;
