import { React, Component } from 'react';
import shortid from 'shortid';

const API_KEY = '2a56f80f2c0640659c8e388315abe7ad';
const BASE_URL = 'http://api.weatherbit.io/v2.0/';
const id = shortid.generate();
export default class Weather extends Component {
  state = {
    weather: null,
  };

  componentDidMount() {
    return fetch(`${BASE_URL}current?key=${API_KEY}&city=Kiev`)
      .then(res => res.json())
      .then(weather => this.setState({ weather: weather.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { weather } = this.state;

    return (
      <div>
        {weather && (
          <ul>
            {weather.map(({ city_name, temp, weather }) => (
              <li key={id}>
                <h2>{city_name}</h2>
                <p>{weather.description}</p>
                <p>{Math.round(temp)} С°</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

// city_name
// temp
