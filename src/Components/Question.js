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


  /**
   * Function event handler that occurs when a user selects an answer
   * @param {Event} e Event that changes the selection to the currently selected AnswerCard
   */
  handleChange(e) {
    this.setState({ selection: e.target.value });
  }

  /**
   * Function event handler that occurs when the timer from the Timer React Component ends
   * @param {Event} e Event that displays a failure option when the time runs out 
   */
  handleTime(e) {
    this.setState({answerState: "timeout"});
    this.setState({timeout: true});
    this.setState({displayResult: true});
  }

  /**
   * Submit function that submits the current answer selected and then checks for truthiness
   */
  submit() {
    if (
      this.state.selection === this.props.question.correctAnswer &&
      !this.state.timeout
    ) {
      console.log("correct");
      this.setState({ answerState: "correct" });
    } else if (this.state.selection != this.props.question.correctAnswer) {
      this.setState({ answerState: "incorrect" });
    } 
    this.setState({ displayResult: true });
    console.log(this.state.displayResult);
  }

  /**
   * Function that creates AnswerCard React Components of specific sizes depending on how many answers the question has
   * @param {Array} answers Array containing all of the answer JSON objects.
   */
  createCards(answers) {
    let size = 12 / answers.length;
    return answers.map(element => (
      <Col md={size} align="center">
        <AnswerCard answer={element} />
      </Col>
    ));
  }

  render() {
    console.log(this.props.question)
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
              <Timer time={30} onTime = {this.handleTime.bind(this)} />
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 id="question">{this.props.question.question}</h1>
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
              correctAnswer={this.props.question.correctAnswer}
              answerState={"timeout"}
            />
          ) : null}

          {this.state.displayResult &&
          this.state.answerState === "incorrect" ? (
            <Result
              correctAnswer={this.props.question.correctAnswer}
              answerState={"incorrect"}
            />
          ) : null}

          {this.state.displayResult && this.state.answerState === "correct" ? (
            <Result
              correctAnswer={this.props.question.correctAnswer}
              answerState={"correct"}
            />
          ) : null}
        </Container>
      </div>
    );
  }
}

export default Question;
