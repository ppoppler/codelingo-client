import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../css/AnswerCard.css";
import UserNav from "./UserNav";


/**
 * React Component for each Answer for a Question
 */

class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Form.Check
        className="answerCard"
        type={"radio"}
        id={this.props.answer}
        name="answer"
        value={this.props.answer}
        label={<h1>{this.props.answer}</h1>}
      />
    );
  }
}

export default AnswerCard;
