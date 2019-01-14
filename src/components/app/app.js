import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random_planet";
import ItemList from "../item_list"

export default class App extends Component {

  onItemSelect = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row">
            <div className="col-md-6">
                <ItemList onItemSelect={this.onItemSelect}/>
            </div>
            <div className="col-md-6">

            </div>

        </div>
      </div>
    );
  }
}
