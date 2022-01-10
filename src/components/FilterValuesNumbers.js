/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import StartWarsContext from '../context/StartWarsContext';

const columnOptions = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];
const comparisonOptions = ['maior que', 'menor que', 'igual a'];

function FilterValuesNumbers() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const {
    filterByNumericValues,
    setFilterByNumericValues, planets, setPlanets } = useContext(StartWarsContext);

  function handleClick() {
    setFilterByNumericValues((prevState) => ([
      ...prevState,
      { column, comparison, value },
    ]));
    const numberFilter = planets.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }

      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }

      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return numberFilter;
    });
    setPlanets(numberFilter);
  }

  function handleReset() {
    // console.log('ola');
  }

  return (
    <div>
      <label htmlFor="coluna">
        Coluna
        <select
          value={ column }
          data-testid="column-filter"
          id="coluna"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          { columnOptions.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="operador">
        Operador
        <select
          value={ comparison }
          data-testid="comparison-filter"
          id="operador"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          { comparisonOptions.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <input
        value={ value }
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        testid="button-filter"
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
      <div>
        <p>{`${column} ${comparison} ${value}`}</p>
        {/* { console.log(filterByNumericValues) } */}
        <button type="button" onClick={ () => handleReset() }>Apagar</button>
      </div>
    </div>
  );
}

export default FilterValuesNumbers;
