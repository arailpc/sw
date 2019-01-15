import React, { Component } from "react";
import "./random_planet.css";
import SwapiService from "../../service/swapi_service";
import Spinner from "../spinner";
import ErrorMessage from "../error_message";

class RandomPlanet extends Component {
  componentDidMount() {
    this.updatePlanet();
  }

  state = {
    planet: null,
    loading: true,
    error: false
  };

  swapiService = new SwapiService();

  onPlanetLoad = planet => {
    this.setState({ planet: planet, loading: false });
  };

  onErrorLoad = err => {
    this.setState({
      loading: false,
      error: true
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    // const id = 15000;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoad)
      .catch(this.onErrorLoad);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(error || loading);
    const spinner = loading ? <Spinner /> : null;
    const viewPlanet = hasData ? <ViewPlanet planet={planet} /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;

    return (
      <div className="random-planet jumbotron clearfix py-4">
        {spinner}
        {viewPlanet}
        {errorMessage}
      </div>
    );
  }
}

const ViewPlanet = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
        className="rounded"
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
    </React.Fragment>
  );
};

export default RandomPlanet;
