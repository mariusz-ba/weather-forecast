import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './searchComponent';

export default class SearchContainer extends Component {
  state = {
    value: ''
  }

  setValue = e => {
    this.setState({ value: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }
  
  render() {
    return (
      <Search value={this.state.value} setValue={this.setValue} onSubmit={this.onSubmit}/>
    )
  }
}

SearchContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
}