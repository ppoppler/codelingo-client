import React, { Component } from "react";
import "../css/Result.css";
import UserNav from "./UserNav";
import {Navbar, Nav } from 'react-bootstrap';

class Result extends Component {
  constructor(props) {
    super(props);
    this.correctAnswer = props.correctAnswer;
    this.answerState = props.answerState;
  }

  correct() {
    return (
      <div>
        <Navbar className={this.answerState}>
          <h1>Correct!</h1>
          <h2 className="alignans">The correct answer is:</h2>
          <div id="answer">
            <h3>{this.correctAnswer}</h3>
          </div>
        </Navbar>
      </div>
    );
  }

  incorrect() {
    return (
        <div>
          <Navbar className={this.answerState}>
            <h1>Incorrect!</h1>
            <h2 className="alignans">The correct answer is:</h2>
            <div id="answer">
              <h3>{this.correctAnswer}</h3>
            </div>
          </Navbar>
        </div>
    );
  }

  timeout() {
    return (
      <div>
        <Navbar className={this.answerState}>
          <h1>Time's Up!</h1>
          <h2 className="alignans">The correct answer is:</h2>
          <div id="answer">
            <h3>{this.correctAnswer}</h3>
          </div>
        </Navbar>
      </div>
    );
  }

  render() {
    if (this.answerState === "correct") {
      return this.correct();
    } else if (this.answerState === "incorrect") {
      return this.incorrect();
    } else {
      return this.timeout();
    }
  }
}

export default Result;
