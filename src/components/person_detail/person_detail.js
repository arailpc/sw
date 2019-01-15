import React, { Component } from "react";
import "./style.css";
import SwapiService from "../../service/swapi_service";
import Spinner from "../spinner/spinner";

class PersonDetail extends Component {
  state = {
    person: null,
    loading: true
  };

  swapiService = new SwapiService();

  onLoadPerson = person => {
    this.setState({ person, loading: false });
  };

  componentDidMount() {
    this.getPerson(this.props.id);
  }

  getPerson = id => {
    this.setState({ loading: true });
    this.swapiService.getPerson(id).then(this.onLoadPerson);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.id === this.props.id) return;
    this.getPerson(this.props.id);
  }

  render() {
    const { person, loading } = this.state;
    if (loading) return <Spinner />;
    const { id, name, birthYear, eyeColor } = person;
    return (
      <div className="person-detail card border-secondary">
        <div className="card-body clearfix">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt=""
            className="float-left rounded mr-3"
            width="45%"
          />
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-0 py-2 border-top-0">
              birthYear {birthYear}
            </li>
            <li className="list-group-item px-0 py-2">Eye color {eyeColor}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonDetail;
