import React, { Component } from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navigation from "../../Components/Navigation";
import happyPlanet from "../../images/Happy Planet.png";
import sadPlanet from "../../images/Sad Planet.png";
import neutralPlanet from "../../images/Neutral Planet.png";
import { AUTH_TOKEN, USER_INFO } from "../../constants";
import "../../css/CourseDashboard.css";

export default class CourseDashboard extends Component {
  state = {
    user: "",
    module: {}
  };

  async componentDidMount() {
    await this.setState({ user: JSON.parse(localStorage.getItem(USER_INFO)) });
    await this.setState({ module: this.state.user.current_modules[0] });
    
  }

  render() {
    return (
      <div id="background">
        <br />
        <br />

        <div>{this.state.user.name}</div>
        <div>{this.state.module.name}</div>

        <Container className="courseDashboard">
          <Row>
            <Col>
              <p>Variables</p>
              <img src={happyPlanet} className="planet" alt="module" />
            </Col>
            <Col />
            <Col />
            <Col>
              <p>Keywords</p>
              <a href="../questions">
                <img src={neutralPlanet} className="planet" alt="module" />
              </a>
            </Col>
            <Col />
            <Col />
            <Col>
              <p>Strings</p>
              <img src={sadPlanet} className="planet" alt="module" />
            </Col>
          </Row>
          <Row>
            <Col md={3} />
            <Col md={3} />
            <Col md={3} />
            <Col md={3} />
            <Col md={3} />
            <Col md={3} />
            <Col md={3} />
          </Row>
          <Row>
            <Col />
            <Col />
            <Col>
              <p>Expressions</p>
              <img src={happyPlanet} className="planet" alt="module" />
            </Col>
            <Col />
            <Col />
            <Col>
              <p>Conditionals</p>
              <img src={sadPlanet} className="planet" alt="module" />
            </Col>
            <Col />
          </Row>
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
            <h1>Python</h1>
          </center>
        </Container>
      </div>
    );
  }
}
