import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './components/Search';
import { WeatherContainer, WeatherActions } from './components/Weather'
import styles from './weatherAppComponent.scss';

export class WeatherApp extends Component {
  componentDidMount() {
    this.props.fetchWeather('Kraków');
  }
  
  onSearch = city => {
    this.props.fetchWeather(city);
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.navbar}>
          <Search onSubmit={this.onSearch}/>
        </div>
        <div className={styles.container}>
          <WeatherContainer/>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeather: city => { dispatch(WeatherActions.fetchWeather({ city })) }
  }
}

export default connect(null, mapDispatchToProps)(WeatherApp);