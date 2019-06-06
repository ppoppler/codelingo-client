import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Components/Routes";
import { ApolloProvider } from "react-apollo";
import ApolloClient from './config/ApolloCreator';
import "./App.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <div className="App">
          <header className="App-header">
            <Routes />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
