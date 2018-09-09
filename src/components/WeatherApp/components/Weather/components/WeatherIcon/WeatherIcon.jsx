import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherIcon.scss';

const propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

const WeatherIcon = ({ icon, name }) => (
  <div className={styles.icon}>
    <i className={icon}></i>
    <span className={styles.name}>{name}</span>
  </div>
)

WeatherIcon.propTypes = propTypes;

export default WeatherIcon;