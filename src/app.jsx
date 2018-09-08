import React from 'react';
import styles from './app.scss';

import { WeatherContainer } from './components/Weather';

const App = () => (
  <div className={styles.app}>
    <div className={styles.container}>
      <WeatherContainer/>
    </div>
  </div>
)

export default App;