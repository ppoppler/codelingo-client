import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navigation from "../Components/Navigation";
import laptop from "../images/laptop.png";

import "../css/HomePage.css";
class HomePage extends Component {
  render() {
    return (
      <Container className="homePage fullscreen" fluid>
        <div id="space">
          <Row>
            <Col md={6} className="no-padding">
              <div className="registration">
                <h2 className="registrationText">
                  Make your coding skills out of this world.
                </h2>
                <Button id="registrationButton" variant="success" href="/register" size="lg">
                  <h3>Register</h3>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-fluid" id="appDescription">
          <Row id="appDescriptionElements">
            <Col sm={6} align="center">
              <Image id="laptop" src={laptop} width="250" height="250" fluid />
            </Col>
            <Col sm={6}>
              <Row>
                <Col md={12} align="left" style={{color:"#171717"}} className="Rubik">
                  <h2>Learn and improve your programming skills.</h2>
                </Col>
              </Row>
              <Row>
                <Col md={10} align="left">
                  <p style={{color:"#505050"}} className="Rubik">
                  Codelingo makes learning a programming language easy and fun! Our modules are perfect for beginning programmers or seasoned professionals looking to pick up a new programming language! Practice anywhere and anytime.<br /><br /> 
                  Courses now available in Python, Java, and Data Structures and Algorithms.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

/*

<Image src={space} width="auto" height="auto" fluid />

*/
export default HomePage;
