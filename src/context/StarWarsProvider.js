import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StartWarsContext';

function StartWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  async function getAPI() {
    const r = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await r.json();
    const { results } = json;
    return setPlanets(results);
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <StartWarsContext.Provider value={ { data: planets } }>
      { children }
    </StartWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StartWarsProvider;
