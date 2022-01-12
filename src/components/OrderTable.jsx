import React from 'react';

function OrderTable() {
  const column = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  return (
    <div>
      <select
        data-testid="column-sort"
      >
        {
          column.map((col, i) => (
            <option key={ i }>{col}</option>
          ))
        }
      </select>
      <label htmlFor="sort-ASC">
        ASC
        <input
          type="radio"
          id="sort-ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="sort-DESC">
        DESC
        <input
          type="radio"
          id="sort-DESC"
          value="DESC"
          data-testid="column-sort-input-desc"
        />
      </label>
    </div>
  );
}

export default OrderTable;
