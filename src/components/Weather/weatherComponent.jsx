import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './weatherComponent.scss';
import WeatherIcon from './components/WeatherIcon';

export default class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather('Kraków');
  }

  render() {
    const { 
      loading, city, icon, name, temperature
    } = this.props;

    if(loading)
      return <div>Loading</div>
  
    return (
      <div className={styles.weather}>
        <h3 className={styles.weather__city}>{city}</h3>
        <p className={styles.weather__temp}>{temperature}<span>&deg;C</span></p>
        <div className={styles.weather__icon}>
          <WeatherIcon icon={icon} name={name}/>
        </div>
        <h4 className={styles.weather__day}>Sunday</h4>
      </div>
    )
  }
}

Weather.propTypes = {
  loading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  fetchWeather: PropTypes.func.isRequired
}