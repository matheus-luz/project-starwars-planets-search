import React, { useContext, useState } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function OrderTable() {
  const [columnOrder, setColumnOrder] = useState('population');
  const column = [
    'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const [sort, setSort] = useState('ASC');

  const { data, setData } = useContext(StartWarsContext);

  function handleOrder() {
    let numberOrder = [];
    if (data.length > 0 && sort === 'ASC') {
      numberOrder = [...data].sort((a, b) => a[columnOrder] - b[columnOrder]);
    }
    if (data.length > 0 && sort === 'DESC') {
      numberOrder = [...data].sort((a, b) => b[columnOrder] - a[columnOrder]);
    }
    setData(numberOrder);
  }

  return (
    <div>
      <select
        data-testid="column-sort"
        value={ columnOrder }
        onChange={ ({ target }) => setColumnOrder(target.value) }
      >
        {
          column.map((col, i) => (
            <option key={ i } value={ col }>{col}</option>
          ))
        }
      </select>
      <label htmlFor="sort-ASC">
        ASC
        <input
          type="radio"
          id="sort-ASC"
          value="ASC"
          name="sort"
          onChange={ ({ target: { value } }) => setSort(value) }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="sort-DESC">
        DESC
        <input
          type="radio"
          value="DESC"
          name="sort"
          onChange={ ({ target: { value } }) => setSort(value) }
          id="sort-DESC"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleOrder }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderTable;
