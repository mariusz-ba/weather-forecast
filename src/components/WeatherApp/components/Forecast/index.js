import forecastComponent from './Forecast';
import forecastContainer from './ForecastContainer';
import forecastReducer from './reducer';
import * as forecastActions from './actions';

export default forecastContainer;

export const Forecast = forecastComponent;
export const ForecastContainer = forecastContainer;
export const ForecastReducer = forecastReducer;
export const ForecastActions = forecastActions;