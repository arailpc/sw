import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random_planet";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
      </div>
    );
  }
}
