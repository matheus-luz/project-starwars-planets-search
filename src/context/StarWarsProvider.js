import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StartWarsContext';

function StartWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  async function getAPI() {
    const r = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await r.json();
    const { results } = json;
    return setPlanets(results);
  }

  // function handleSearch(name) {
  //   return setFilterByName({ name });
  // }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <StartWarsContext.Provider
      value={ {
        data: planets, filterByName, setFilterByName } }
    >
      { children }
    </StartWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StartWarsProvider;
