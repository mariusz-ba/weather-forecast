import { TYPES } from './actions';

const INITIAL_STATE = {
  isFetching: false,
  data: null,
  errors: null
}

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch(type) {
    case TYPES.REQUEST_WEATHER:
      return { ...state, errors: null, isFetching: true };
    case TYPES.RECEIVE_WEATHER:
      return { ...state, errors: null, isFetching: false, data: payload };
    case TYPES.SET_WEATHER_ERRORS:
      return { ...state, errors: payload, isFetching: false }
    default:
      return state;
  }
}