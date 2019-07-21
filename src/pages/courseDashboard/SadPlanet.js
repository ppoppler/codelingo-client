import React, { Component } from "react";
import sadPlanet from "../../images/Sad Planet.png";
import { Col } from "react-bootstrap";
import { capitalize } from "../../helpers.js";

export default class SadPlanet extends Component {
  render() {
    return (
      <Col>
        <p>{capitalize(this.props.lesson)}</p>
        <img src={sadPlanet} className="planet" alt="module" />
      </Col>
    );
  }
}
