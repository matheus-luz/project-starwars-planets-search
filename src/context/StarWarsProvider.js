import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StartWarsContext';

function StartWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [data, setData] = useState([]);

  async function getAPI() {
    const r = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await r.json();
    const { results } = json;
    // const orderPlanets = results.sort((a, b) => a.name - b.name);
    // console.log(orderPlanets);
    setData([...results]);
    return setPlanets([...results]);
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <StartWarsContext.Provider
      value={ {
        setData,
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
