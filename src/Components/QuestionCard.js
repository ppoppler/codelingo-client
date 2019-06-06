import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../css/QuestionCard.css";
import UserNav from "./UserNav";
class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Form.Check
        className="questionCard"
        type={"radio"}
        id={this.props.answer}
        name="answer"
        value={this.props.answer}
        label={<h1>{this.props.answer}</h1>}
      />
    );
  }
}

export default QuestionCard;
