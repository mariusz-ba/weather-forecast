import React from 'react';
import PropTypes from 'prop-types';
import styles from './weatherIconComponent.scss';

const WeatherIcon = ({ icon, name }) => (
  <div className={styles.icon}>
    <i className={icon}></i>
    <span className={styles.name}>{name}</span>
  </div>
)

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default WeatherIcon;