import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import "../css/Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.time = props.time;
    this.state = { percentage: 100, timeUp: false };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(this.timer), this.time * 10);
  }

  tick(timer) {
    if (this.state.percentage !== 0) {
      this.setState({ percentage: this.state.percentage - 1 });
    } else {
      clearInterval(timer);
      this.setState({ timeUp: true });
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
