import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Register from "./Register";
import HomePage from "../pages/Home";
import Navigation from './Navigation';
import Login from "./Login";
import Question from "./Question";
import CourseDashboard from "../pages/courseDashboard/CourseDashboard";
import Profile from "../pages/Profile";
import testData from "../json_tests/test_json";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>          
        <div style={{width:"100%"}}>
        <Navigation />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/questions" render={() => <Question question={testData[1]}/>}/>
          <Route exact path="/module" component={CourseDashboard}/>
        </div>
      </BrowserRouter>
    );
  }
}
