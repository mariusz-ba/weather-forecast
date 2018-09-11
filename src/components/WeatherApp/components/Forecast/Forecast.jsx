import React from 'react';
import PropTypes from 'prop-types';
import styles from './Forecast.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    icon: PropTypes.string.isRequired,
    temperature_min: PropTypes.number.isRequired,
    temperature_max: PropTypes.number.isRequired
  })).isRequired
}

const Forecast = ({ items }) => (
  <table className={styles.forecast}>
    <tbody>
      { 
        items && 
        items.map(item => (
          <tr key={item.date.getDate()}>
            <td className={styles.forecast__day}>
              {item.date.toLocaleDateString('en-US', {weekday: 'long'})}
            </td>
            <td className={styles.forecast__icon}>
              <i className={item.icon}></i>
            </td>
            <td className={styles.forecast__temp}>
              <span>{Math.floor(item.temperature_min)}</span>
              <span>&deg;C</span>
            </td>
            <td className={styles.forecast__temp}>
              <span>{Math.floor(item.temperature_max)}</span>
              <span>&deg;C</span>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

Forecast.propTypes = propTypes;

export default Forecast;