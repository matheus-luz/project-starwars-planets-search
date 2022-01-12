import React, { useContext, useEffect, useState } from 'react';
import StartWarsContext from '../context/StartWarsContext';
import '../App.css';
import OrderTable from './OrderTable';

function FilterValuesNumbers() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  const [filterColumn, setFilterColumn] = useState([
    'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  const { filterByNumericValues,
    setFilterByNumericValues, planets, setData } = useContext(StartWarsContext);

  useEffect(() => {
    if (filterByNumericValues[0]) {
      const columnRemove = filterColumn
        .filter((arrColumn) => arrColumn !== filterByNumericValues[0].column);
      setFilterColumn(columnRemove);
    }
  }, [filterByNumericValues]);

  function handleClick() {
    setFilterByNumericValues((prevState) => ([
      ...prevState,
      { column, comparison, value },
    ]));
  }

  useEffect(() => {
    console.log(filterByNumericValues);
    if (filterByNumericValues[0]) {
      filterByNumericValues.forEach((filter) => {
        const numberFilter = planets.filter((planet) => {
          if (filter.comparison === 'maior que') {
            return Number(planet[filter.column]) > Number(filter.value);
          }

          if (filter.comparison === 'menor que') {
            return Number(planet[filter.column]) < Number(filter.value);
          }

          if (filter.comparison === 'igual a') {
            return Number(planet[filter.column]) === Number(filter.value);
          }
          return numberFilter;
        });
        setData(numberFilter);
      });
    }
  }, [filterByNumericValues, planets, setData]);

  function handleResetFilter(filterRemove) {
    const buttonRemoveFilter = filterByNumericValues
      .filter((elem) => elem.column !== filterRemove);
    setFilterByNumericValues(buttonRemoveFilter);
  }

  return (
    <div>
      <form>
        <label htmlFor="coluna">
          Coluna
          <select
            value={ column }
            data-testid="column-filter"
            id="coluna"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            { filterColumn.map((option, index) => (
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
          { filterByNumericValues.map((select, index) => (
            <div data-testid="filter" className="filterNumeric" key={ index }>
              <button
                className="button-reset"
                type="button"
                onClick={ () => handleResetFilter(select.column) }
              >
                X
              </button>
              <p>
                {`${select.column} ${select.comparison} ${select.value}`}
              </p>
            </div>
          )) }
        </div>
        <OrderTable />
      </form>
    </div>
  );
}

export default FilterValuesNumbers;
