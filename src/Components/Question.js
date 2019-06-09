import React, { Component } from "react";
import { Row, Col, Button, Form, Navbar } from "react-bootstrap";
import AnswerCard from "./AnswerCard";
import Container from "react-bootstrap/Container";
import Timer from "./Timer";
import "../css/QuestionPage.css";
import Result from "./Result";
import UserNav from "./UserNav";
import logo from "../images/codelingowo.png";

/**
 * React component for displaying a question  
 */
class Question extends Component {
  state = {
    selection: "",
    answerState: "undefined",
    timeout: false,
    displayResult: false
  };


  handleChange(e) {
    this.setState({ selection: e.target.value });
  }

  remainingTime(e) {
    console.log("testing " + e.target.state);
  }

  submit() {
    if (
      this.state.selection === this.props.question.correct_ans &&
      !this.state.timeout
    ) {
      console.log("correct");
      this.setState({ answerState: "correct" });
    } else if (this.state.selection != this.props.question.correct_ans) {
      this.setState({ answerState: "incorrect" });
    } else if (this.state.timeout) {
      this.setState({ answerState: "timeout" });
      this.setState({ displayResult: true });
    }
    this.setState({ displayResult: true });
    console.log(this.state.displayResult);
  }
  createCards(answers) {
    let size = 12 / answers.length;
    return answers.map(element => (
      <Col md={size} align="center">
        <AnswerCard answer={element} />
      </Col>
    ));
  }

  render() {
    return (
      <div className="question">
        <UserNav />
        <Container>
          <Row id="questionLogo">
            <Col md={12}>
              <a href="#home">
                <img src={logo} className="qPagelogo" alt="" />
              </a>
            </Col>
          </Row>

          <Row className="countdown">
            <Col>
              <Timer time={30} onChange={this.remainingTime.bind(this)} />
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 id="question">{this.props.question.text}</h1>
            </Col>
          </Row>

          <Row id="qCards" fluid="true">
            <Form>
              <Form.Group onChange={this.handleChange.bind(this)}>
                {this.createCards(this.props.question.answers)}
              </Form.Group>
            </Form>
          </Row>

          <Row>
            <Col md={12} align="right">
              <Button
                id="submitButton"
                variant="success"
                size="lg"
                onClick={this.submit.bind(this)}
              >
                <h2>Submit</h2>
              </Button>
            </Col>
          </Row>

          {(this.state.displayResult && this.state.answerState) ===
          "timeout" ? (
            <Result
              correctAnswer={this.props.question.correct_ans}
              answerState={"timeout"}
            />
          ) : null}

          {this.state.displayResult &&
          this.state.answerState === "incorrect" ? (
            <Result
              correctAnswer={this.props.question.correct_ans}
              answerState={"incorrect"}
            />
          ) : null}

          {this.state.displayResult && this.state.answerState === "correct" ? (
            <Result
              correctAnswer={this.props.question.correct_ans}
              answerState={"correct"}
            />
          ) : null}
        </Container>
      </div>
    );
  }
}

export default Question;
