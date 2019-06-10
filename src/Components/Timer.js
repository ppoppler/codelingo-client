import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import "../css/Timer.css";

/**
 * React Component that acts as a timer bar while a user answers a question
 */
class Timer extends Component {
  constructor(props) {
    super(props);
    this.time = this.props.time;
    this.state = { percentage: 100, timeUp: false };
  }

  /**
   * Initializes a timer for when the component loads
   */
  componentDidMount() {
    this.timer = setInterval(() => this.tick(this.timer), this.time * 10);
  }

  /**
   * Function that updates the state of the time
   *
   * @param {Timer} timer Timer object that is used to manage the state of the react-bootstrap ProgressBar component
   */
  tick(timer) {
    if (this.state.percentage !== 0) {
      this.setState({ percentage: this.state.percentage - 1 });
    } else {
      clearInterval(timer);
      // When the function ends call the props function to update the parent component's state. 
      this.props.onTime();
      console.log("done");
    }
  }

  render() {
    return (
      <ProgressBar
        variant="success"
        className="Timer"
        now={this.state.percentage}
      />
    );
  }
}

export default Timer;
