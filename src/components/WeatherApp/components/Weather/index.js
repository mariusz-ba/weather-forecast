import weatherComponent from './Weather';
import weatherContainer from './WeatherContainer';
import weatherReducer from './reducer';
import * as weatherActions from './actions';

export default weatherContainer;

export const Weather = weatherComponent;
export const WeatherContainer = weatherContainer;
export const WeatherActions = weatherActions;
export const WeatherReducer = weatherReducer;