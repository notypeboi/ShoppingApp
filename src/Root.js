import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages/Home.js";
import About from "pages/About.js";
import Headermake from "components/Headermake.js";

/*
const Root = () => (
  <Router>
    <Headermake />
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
  </Router>
);

export default Root;
*/

class Root extends Component {
  render() {
    return (
      <div>
        <Router>
          <Headermake />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </Router>
      </div>
    );
  }
}

export default Root;
