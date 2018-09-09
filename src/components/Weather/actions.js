import API from '@modules/api';
import Weather from './weatherModel';
import get from 'lodash/get';

const REQUEST_WEATHER = 'weather/REQUEST_WEATHER';
const RECEIVE_WEATHER = 'weather/RECEIVE_WEATHER';
const SET_WEATHER_ERRORS = 'weather/SET_WEATHER_ERRORS';

export const TYPES = {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  SET_WEATHER_ERRORS
}

export const requestWeather = (city) => ({
  type: REQUEST_WEATHER,
  payload: city
})

export const receiveWeather = (weather) => ({
  type: RECEIVE_WEATHER,
  payload: weather
})

export const fetchWeather = ({ city }) => {
  return async dispatch => {
    dispatch(requestWeather(city));
    try {
      const res = await API.getCurrentWeather({ city });
      const data = res.data;
      console.log(data);
      const weather = new Weather({
        name: get(data, 'weather[0].description', 'Sunny'),
        city: get(data, 'name', 'London'),
        icon: get(data, 'weather[0].id', 800),
        temperature: get(data, 'main.temp', 0),
        temperature_min: get(data, 'main.temp_min', 0),
        temperature_max: get(data, 'main.temp_max', 0),
      });
      dispatch(receiveWeather(weather));
    } catch (e) {
      dispatch(setWeatherErrors(e));
    }
  }
}

export const setWeatherErrors = (errors) => ({
  type: SET_WEATHER_ERRORS,
  payload: errors
})