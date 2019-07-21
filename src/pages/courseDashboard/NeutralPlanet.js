import React, { Component } from "react";
import neutralPlanet from "../../images/Neutral Planet.png";
import { Col } from "react-bootstrap";
import { capitalize } from "../../helpers.js";
import { CURRENT_LESSON } from "../../constants";

export default class NeutralPlanet extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    localStorage.setItem(CURRENT_LESSON, this.props.lesson);
  }

  render() {
    return (
      <Col>
        <p>{capitalize(this.props.lesson)}</p>
        <a href="/questions">
          <img
            src={neutralPlanet}
            className="planet"
            alt="module"
            onClick={this.onPress}
          />
        </a>
      </Col>
    );
  }
}
