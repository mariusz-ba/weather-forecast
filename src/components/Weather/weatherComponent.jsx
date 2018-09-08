import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './weatherComponent.scss';

export default class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather('Kraków');
  }

  render() {
    const { 
      loading, city, icon, name,
      temperature,
      temperature_min,
      temperature_max,
    } = this.props;

    if(loading)
      return <div>Loading</div>
  
    return (
      <div className={styles.weather}>
        <h3 className={styles.weather__city}>{city}</h3>
        <div className={styles.weather__icon}><img src={icon} alt="icon"/></div>
        <p className={styles.weather__temp}>{temperature}&deg;</p>
        <p className={styles.weather__tmin}>{temperature_min}&deg;</p>
        <p className={styles.weather__tmax}>{temperature_max}&deg;</p>
        <h4 className={styles.weather__name}>{name}</h4>
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