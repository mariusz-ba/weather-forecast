import { TYPES } from './actions';

const INITIAL_STATE = {
  isFetching: false,
  items: [],
  errors: null
}

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch(type) {
    case TYPES.REQUEST_FORECAST:
      return { ...state, errors: null, isFetching: true };
    case TYPES.RECEIVE_FORECAST:
      return { ...state, errors: null, isFetching: false, items: payload }
    case TYPES.SET_FORECAST_ERRORS:
      return { ...state, isFetching: false, errors: payload }
    default:
      return state;
  }
}