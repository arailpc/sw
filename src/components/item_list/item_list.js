import React, { Component } from "react";
import "./style.css";
import SwapiService from "../../service/swapi_service";
import Spinner from "../spinner";

class ItemList extends Component {
  state = {
    itemList: null
  };

  swapiService = new SwapiService();

  renderItem = ({ id, name }) => {
    return (
      <button
        className="list-group-item list-group-item-action"
        key={id}
        onClick={()=> this.props.onItemSelect(id)}
      >
        {name}
      </button>
    );
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({ itemList: peopleList });
    });
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) return <Spinner />;

    const itemElements = itemList.map(this.renderItem);

    return <div className="item-list list-group">{itemElements}</div>;
  }
}

export default ItemList;
