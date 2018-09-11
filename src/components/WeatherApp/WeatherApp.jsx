import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './components/Search';
import Weather, { WeatherActions } from './components/Weather'
import Forecast, { ForecastActions } from './components/Forecast';
import styles from './WeatherApp.scss';

export class WeatherApp extends Component {
  componentDidMount() {
    this.props.fetchWeather('Kraków');
    this.props.fetchForecast('Kraków');
  }
  
  onSearch = city => {
    this.props.fetchWeather(city);
    this.props.fetchForecast(city);
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.navbar}>
          <Search onSubmit={this.onSearch} />
        </div>
        <div className={styles.container}>
          <Weather />
          <Forecast />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeather: city => { dispatch(WeatherActions.fetchWeather({ city })) },
    fetchForecast: city => { dispatch(ForecastActions.fetchForecast({ city })) }
  }
}

export default connect(null, mapDispatchToProps)(WeatherApp);