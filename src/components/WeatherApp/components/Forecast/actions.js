import API from '@modules/api';
import Weather from '../../WeatherModel';
import get from 'lodash/get';

const REQUEST_FORECAST = 'forecast/REQUEST_FORECAST';
const RECEIVE_FORECAST = 'forecast/RECEIVE_FORECAST';
const SET_FORECAST_ERRORS = 'forecast/SET_FORECAST_ERRORS';

export const TYPES = {
  REQUEST_FORECAST,
  RECEIVE_FORECAST,
  SET_FORECAST_ERRORS
}

export const requestForecast = (city) => ({
  type: REQUEST_FORECAST,
  payload: city
})

export const receiveForecast = (items) => ({
  type: RECEIVE_FORECAST,
  payload: items
})

export const fetchForecast = ({ city }) => {
  return async dispatch => {
    dispatch(requestForecast(city));
    try {
      const res = await API.getForecast({ city });
      const list = get(res.data, 'list', []);
      const days = getDays(list);
      const items = days.map(item => new Weather({
        date: new Date(get(item, 'dt_txt', Date.now())),
        name: get(item, 'weather[0].description', 'Sunny'),
        city: get(item, 'name', 'London'),
        icon: get(item, 'weather[0].id', 800),
        temperature: get(item, 'main.temp', 0),
        temperature_min: get(item, 'main.temp_min', 0),
        temperature_max: get(item, 'main.temp_max', 0),
      }))
      dispatch(receiveForecast(items));
    } catch (e) {
      console.log('error: ', e);
      dispatch(setForecastErrors(e))
    }
  }
}

export const setForecastErrors = (errors) => ({
  type: SET_FORECAST_ERRORS,
  payload: errors
})

function getDays(list) {
  const today = new Date(Date.now());

  const middays = list.filter(item => {
    const date = new Date(item.dt_txt);
    return date.getHours() === 12;
  })

  const result = middays.map(midday => {
    const currentDay = (new Date(midday.dt_txt)).getDate();
    const min = Math.min(...list.filter(item => (new Date(item.dt_txt)).getDate() === currentDay).map(item => item.main.temp));
    const max = Math.max(...list.filter(item => (new Date(item.dt_txt)).getDate() === currentDay).map(item => item.main.temp));
    return {
      ...midday,
      main: {
        ...midday.main,
        temp_min: min,
        temp_max: max
      }
    }
  })

  if(result.length > 0 && (new Date(result[0].dt_txt)).getDate() === today.getDate() ) {
    result.shift();
  }

  if(result.length >= 3)
    return result.slice(0, 3);

  return result;
}