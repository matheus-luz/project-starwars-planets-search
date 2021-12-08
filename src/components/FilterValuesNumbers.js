import React, { useContext, useState } from 'react';
import StartWarsContext from '../context/StartWarsContext';

const columnOptions = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];
const comparisonOptions = ['maior que', 'menor que', 'igual a'];

function FilterValuesNumbers() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const { setFilterByNumericValues, setSubmitFiltrar } = useContext(StartWarsContext);

  function handleClick() {
    setFilterByNumericValues({ column, comparison, value });
    setSubmitFiltrar(true);
  }

  return (
    <di>
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
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </di>
  );
}

export default FilterValuesNumbers;
