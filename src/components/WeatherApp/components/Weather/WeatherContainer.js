import Weather from './Weather';
import { connect } from 'react-redux';
import get from 'lodash/get';

function mapStateToProps(state) {
  return {
    loading: state.current.isFetching,
    city: get(state, 'current.data.city', 'London'),
    icon: get(state, 'current.data.icon', 'wi wi-sunny'),
    name: get(state, 'current.data.name', 'Sunny'),
    temperature: get(state, 'current.data.temperature', 0),
  }
}

export default connect(mapStateToProps)(Weather);