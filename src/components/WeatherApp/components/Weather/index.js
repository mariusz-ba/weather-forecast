import weatherComponent from './Weather';
import weatherContainer from './WeatherContainer';
import weatherReducer from './reducer';
import * as weatherActions from './actions';
import weatherModel from './WeatherModel';

export default weatherContainer;

export const Weather = weatherComponent;
export const WeatherContainer = weatherContainer;
export const WeatherActions = weatherActions;
export const WeatherReducer = weatherReducer;
export const WeatherModel = weatherModel;