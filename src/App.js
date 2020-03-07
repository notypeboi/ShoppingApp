/*
import React, { Component } from "react";
import "./App.css";
import "./components/Headermake";
import { Route, Router } from "react-router-dom";
import Home from "pages/Home.js";
import About from "pages/About.js";
import Headermake from "components/Headermake.js";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBasket: true,
      mode: {
        main: "main",
        sub: "basket"
      },
      contents: [
        {
          id: 1,
          title: "HTML",
          desc: "good"
        },
        {
          id: 1,
          title: "HTML",
          desc: "good"
        },
        {
          id: 1,
          title: "HTML",
          desc: "good"
        }
      ]
    };
  }

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
export default App;
*/
