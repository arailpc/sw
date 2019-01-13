export default class SwapiService {
  _baseURL = "https://swapi.co/api";

  getResource = async url => {
    const res = await fetch(`${this._baseURL}${url}`);
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource("/people/");
    return res.results;
  };

  getPerson = id => {
    return this.getResource(`/people/${id}/`);
  };

  getAllPlanets = async () => {
    const res = await this.getResource("/planets/");
    return res.results;
  };

  getPlanet = id => {
    return this.getResource(`/planets/${id}/`);
  };

  getAllStarships = async () => {
    const res = await this.getResource("/starships/");
    return res.results;
  };

  getStarship = id => {
    return this.getResource(`/starships/${id}/`);
  };
}

