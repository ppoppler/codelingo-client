import React, { Component } from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import {AUTH_TOKEN, USER_INFO} from "../constants";
import "../css/Profile.css";

class Profile extends Component {

  state ={
    user: ''
  }

  componentDidMount(){
    
    this.setState({user: JSON.parse(localStorage.getItem(USER_INFO))});
  }

  render() {
    return (
      <div id="background">
        <br />
        <p>Welcome, {this.state.user.name}!</p>
        <div id="bars">
        <center>
        <a href="../module"><Button id="links">
          <h2>Python</h2>
          <ProgressBar
            striped
            variant="success"
            now={80}
            style={{ maxWidth: 500, minHeight: 20 }}
          />
          </Button></a>
          <a href="../module"><div id="bars"><Button id="links">
          <h2>Java</h2>
          <ProgressBar
            striped
            variant="warning"
            now={40}
            style={{ maxWidth: 500, minHeight: 20 }}
          />
          </Button></div></a>
          <a id="links" href="../module"><div id="bars">
          <Button id="links"><h2>Data Structures and Algorithms</h2>
          <ProgressBar
            striped
            variant="info"
            now={65}
            style={{ maxWidth: 500, minHeight: 20 }}
          />
          </Button></div></a>
        </center>
        </div>
      </div>
    );
  }
}

export default Profile;
