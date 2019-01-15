import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random_planet";
import ItemList from "../item_list";
import PersonDetail from "../person_detail";

export default class App extends Component {
  state = {
    id: 1
  };

  onItemSelect = id => {
    console.log(id);
    this.setState({ id: id });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row">
          <div className="col-md-6">
            <ItemList onItemSelect={this.onItemSelect} />
          </div>
          <div className="col-md-6">
            <PersonDetail id={this.state.id} />
          </div>
        </div>
      </div>
    );
  }
}
