import React, { Component } from "react";
import withPythonAnswers from "../modules/providers/QuestionList";
import Question from "../Components/Question";

@withPythonAnswers
class QuestionPage extends Component {
  state = {
    currentQuestion: {}
  };


  render() {
    console.log(this.props.questions);
    if (!this.props.loading && this.props.questions.length > 0) {
      return <Question question={this.props.questions[0]} />;
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
