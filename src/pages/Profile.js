import React, { Component } from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import "../css/Profile.css";
import UserNav from "../Components/UserNav";

class Profile extends Component {
  render() {
    return (
      <div id="background">
      <UserNav/>
        <br />
        <p>Welcome, Philip!</p>
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
