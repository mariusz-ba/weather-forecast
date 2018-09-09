import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchComponent.scss';

const Search = ({ value, setValue, onSubmit }) => (
  <form className={styles.search} onSubmit={onSubmit}>
    <input className={styles.search__input} placeholder="City" type="text" value={value} onChange={setValue}/>
    <button className={styles.search__button} type="submit"></button>
  </form>
)

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Search;