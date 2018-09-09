import Icons from './icons';
import get from 'lodash/get';

export const WeatherIcons = Icons;

class Weather {
  constructor(data) {
    const city = get(data, 'city', 'London');
    const icon = get(data, 'icon', 800);
    const name = get(data, 'name', 'Sunny');
    const temperature = get(data, 'temperature', 0);
    const temperature_min = get(data, 'temperature_min', 0);
    const temperature_max = get(data, 'temperature_max', 0);

    this.city = this._getCity(city);
    this.name = this._getName(name);
    this.icon = this._getIcon(icon);
    this.temperature = this._getTemperature(temperature);
    this.temperature_min = this._getTemperature(temperature_min);
    this.temperature_max = this._getTemperature(temperature_max);
  }

  _getCity(value) {
    return typeof value === 'string' ? value : 'London';
  }

  _getName(value) {
    return typeof value === 'string' ? value : 'Sunny';
  }

  _getIcon(value) {
    // Set appropiate icon class based on code
    const prefix = 'wi wi-';
    const code = typeof value === 'number' ? value : 800;
    let icon = Icons[code].icon;

    if(!(code > 699 && code < 800) && !(code > 899 && code < 1000))
      icon = 'day-' + icon;
    
    console.log(prefix + icon);
    return prefix + icon;
  }

  _getTemperature(value) {
    return typeof value === 'number' ? value : 0;
  }
}

export default Weather;