import React, { Component } from "react";
import happyPlanet from "../../images/Happy Planet.png";
import { Col } from "react-bootstrap";
import { capitalize } from "../../helpers.js";
import { CURRENT_LESSON } from "../../constants";

export default class HappyPlanet extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(lesson) {
    localStorage.setItem(CURRENT_LESSON, this.props.lesson);
    console.log(localStorage.getItem(CURRENT_LESSON));
  }

  render() {
    //localStorage.removeItem(CURRENT_LESSON);
    return (
      <Col>
        <p>{capitalize(this.props.lesson)}</p>
        <a href="/questions">
          <img
            src={happyPlanet}
            className="planet"
            alt="module"
            onClick={this.onPress}
          />
        </a>
      </Col>
    );
  }
}
