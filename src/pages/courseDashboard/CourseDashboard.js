import React, { Component } from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navigation from "../../Components/Navigation";
import HappyPlanet from "./HappyPlanet.js";
import NeutralPlanet from "./NeutralPlanet.js";
import SadPlanet from "./SadPlanet.js";
import { capitalize } from "../../helpers.js";
import { AUTH_TOKEN, USER_INFO, CURRENT_LESSON } from "../../constants";
import "../../css/CourseDashboard.css";


export default class CourseDashboard extends Component {
  state = {
    user: "",
    module: {},
    isLoaded: false
  };

  async componentDidMount() {
    await this.setState({ user: JSON.parse(localStorage.getItem(USER_INFO)) });
    await this.setState({ module: this.state.user.current_modules[0], isLoaded: true},);
 
  }

  render() {
    if(this.state.isLoaded)
      console.log(this.state.module);
 
    return (
      <div id="background">
        <br />
        <br />

        <h1>{this.state.user.name}</h1>
        <h2>{capitalize(this.state.module.name)}</h2>

        <Container className="courseDashboard">
          {this.state.isLoaded && (
            <Row>
              {this.state.module.completed_lessons.map((lesson) => 
                <HappyPlanet lesson={lesson} />
              )}
              {this.state.module.current_lessons.map((lesson)=> 
                <NeutralPlanet lesson={lesson} />)}
              {this.state.module.incomplete_lessons.map((lesson) => 
                <SadPlanet lesson={lesson} />)}
            </Row>
          )}

          <br />
          <br />
          <br />
          <center>
            <ProgressBar style={{ maxWidth: 1000, minHeight: 25 }}>
              <ProgressBar
                striped
                variant="success"
                animated
                now={40}
                key={1}
              />
              <ProgressBar
                striped
                variant="warning"
                animated
                now={20}
                key={2}
              />
            </ProgressBar>
            <br />
            
          </center>
        </Container>
      </div>
    );
  }
}
