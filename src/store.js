import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { WeatherReducer, ForecastReducer } from './components/WeatherApp';

const reducers = combineReducers({
  current: WeatherReducer,
  forecast: ForecastReducer
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)