import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StartWarsContext';

function StartWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('name');

  async function getAPI() {
    const one = -1;
    const r = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await r.json();
    const { results } = json;
    const order = [...results].sort((a, b) => (a[column] < b[column] ? one : 1));
    setData([...order]);
    return setPlanets([...order]);
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <StartWarsContext.Provider
      value={ {
        setData,
        setColumn,
        data,
        planets,
        setPlanets,
        filterByName,
        setFilterByName,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      { children }
    </StartWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StartWarsProvider;
