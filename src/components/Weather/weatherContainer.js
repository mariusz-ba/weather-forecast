import Weather from './weatherComponent';
import { WeatherIcons } from './weatherModel';
import { connect } from 'react-redux';
import { fetchWeather } from './actions';
import get from 'lodash/get';

function mapStateToProps(state) {
  return {
    loading: state.current.isFetching,
    city: get(state, 'current.data.city', 'London'),
    icon: get(state, 'current.data.icon', 'wi wi-sunny'),
    name: get(state, 'current.data.name', 'Sunny'),
    temperature: get(state, 'current.data.temperature', 0),
    temperature_min: get(state, 'current.data.temperature_min', 0),
    temperature_max: get(state, 'current.data.temperature_max', 0),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeather: city => dispatch(fetchWeather({ city }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);