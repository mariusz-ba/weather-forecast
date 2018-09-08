import get from 'lodash/get';

export const WeatherIcons = {
  'icon_sunny': '/img/icons/icon_sunny.svg',
  'icon_rainy': '/img/icons/icon_rainy.svg',
  'icon_cloudy': '/img/icons/icon_cloudy.svg',
  'icon_broken_clouds': '/img/icons/icon_broken_clouds.svg',
  'icon_partly_cloudy': '/img/icons/icon_partly_cloudy.svg',
  'icon_clear_sky': '/img/icons/icon_partly_cloudy.svg',
}

class Weather {
  constructor(data) {
    const city = get(data, 'city', 'London');
    const icon = get(data, 'icon', 'icon_sunny');
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
    console.log('value: ',  value);
    const icon = typeof value === 'string' ? value : 'icon_sunny';
    if(WeatherIcons[icon])
      return icon;
    return 'icon_sunny';
  }

  _getTemperature(value) {
    return typeof value === 'number' ? value : 30;
  }
}

export default Weather;