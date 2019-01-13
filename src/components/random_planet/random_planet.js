import React, { Component } from "react";
import "./random_planet.css";
import SwapiService from "../../service/swapi_service";

class RandomPlanet extends Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  swapiService = new SwapiService();

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 1);
    this.swapiService.getPlanet(id).then(planet => {
      this.setState({
        id: id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      });
    });
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
