import React, { Component } from "react";
import withPythonAnswers from "../modules/providers/QuestionList";
import Question from "../Components/Question";

/**
 * React component that contains all the question pages
 */
@withPythonAnswers
class QuestionPage extends Component {
  state = {
    currentQuestion: {}
  };

  /**
   * TODO: create an event handler function in QuestionPage to be implemented with question, so everytime a question is submitted (or hit next or skipped)
   * a new question is loaded that is different from the previous questions
   */

  render() {
    console.log(this.props.questions);
    if (!this.props.loading && this.props.questions.length > 0) {
      return <Question question={this.props.questions[Math.floor(Math.random() * this.props.questions.length)]} />;
    } else {
      return (
        <div>
          <h3>No Questions loaded</h3>
        </div>
      );
    }
  }
}

export default QuestionPage;
