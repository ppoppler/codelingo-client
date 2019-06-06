import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Components/Routes";
import "./App.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
