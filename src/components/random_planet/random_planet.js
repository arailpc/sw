import React, { Component } from "react";
import "./random_planet.css";
import SwapiService from "../../service/swapi_service";

class RandomPlanet extends Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    planet:null
  };

  swapiService = new SwapiService();

  onPlanetLoad = planet => {
    this.setState(planet);
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoad);
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;

    return (
      <div className="random-planet jumbotron clearfix py-4">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
        />
        <div className="float-left ml-3">
          <h4 className="mb-3">{name}</h4>
          <ul className="list-group list-group-flush mr-auto ml-3">
            <li className="list-group-item">
              <span className="term">Population </span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation period </span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default RandomPlanet;
