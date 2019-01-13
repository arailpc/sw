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
    return res.results.map(this._tranformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._tranformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource("/starships/");
    return res.results;
  };

  getStarship = id => {
    return this.getResource(`/starships/${id}/`);
  };

  _extractId = item => {
    const idRegExp = /(\d*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _tranformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };
}
