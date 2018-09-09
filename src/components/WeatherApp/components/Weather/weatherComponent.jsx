import React from 'react';
import PropTypes from 'prop-types';
import styles from './weatherComponent.scss';
import WeatherIcon from './components/WeatherIcon';

const Weather = ({ loading, city, icon, name, temperature }) => {
  if(loading)
    return <div className={styles.loading}><span></span></div>

  return (
    <div className={styles.weather}>
      <h3 className={styles.weather__city}>{city}</h3>
      <p className={styles.weather__temp}>{Math.floor(temperature)}<span>&deg;C</span></p>
      <div className={styles.weather__icon}>
        <WeatherIcon icon={icon} name={name}/>
      </div>
      <h4 className={styles.weather__day}>Sunday</h4>
    </div>
  )
}

Weather.propTypes = {
  loading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default Weather;