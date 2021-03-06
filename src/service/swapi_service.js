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
    return res.results.map(this._tranformPerson).slice(0, 5);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._tranformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource("/planets/");
    return res.results.map(this._tranformPlanet).slice(0, 5);
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

  _tranformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      eyeColor: person.eye_color,
      birthYear: person.birth_year
    };
  };
}
