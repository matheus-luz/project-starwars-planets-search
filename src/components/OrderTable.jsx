import React, { useContext, useEffect, useState } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function OrderTable() {
  const [columnOrder, setColumnOrder] = useState('name');
  const column = [
    'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const [sort, setSort] = useState('ASC');
  const [orderMode, setOrderMode] = useState(true);

  const { data, setData } = useContext(StartWarsContext);

  useEffect(() => {
    const one = -1;
    if (orderMode) {
      let numberOrder = [];
      if (columnOrder === 'name' && data.length > 0 && sort === 'ASC') {
        numberOrder = data.sort((a, b) => (a[columnOrder] < b[columnOrder] ? one : 1));
        setData(numberOrder);
        setOrderMode(false);
      }

      if (data.length > 0 && sort === 'ASC') {
        numberOrder = data.sort((a, b) => b[columnOrder] - a[columnOrder]);
        setData(numberOrder);
        setOrderMode(false);
      }
      if (data.length > 0 && sort === 'DESC') {
        numberOrder = data.sort((a, b) => a[columnOrder] - b[columnOrder]);
        setData(numberOrder);
        setOrderMode(false);
      }
      // setOrderMode(false);
      setData(numberOrder);
    }
  }, [columnOrder, sort, setData, data, orderMode]);

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
        onClick={ () => setOrderMode(true) }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderTable;
