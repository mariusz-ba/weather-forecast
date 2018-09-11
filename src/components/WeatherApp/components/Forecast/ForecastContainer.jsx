import Forecast from './Forecast';
import { connect } from 'react-redux';
import get from 'lodash/get';

function mapStateToProps(state) {
  return {
    items: get(state, 'forecast.items', [])
  }
}

export default connect(mapStateToProps)(Forecast);