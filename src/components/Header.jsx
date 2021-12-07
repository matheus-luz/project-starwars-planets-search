import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function Header() {
  const { filterByName, setFilterByName } = useContext(StartWarsContext);
  const { name } = filterByName;
  return (
    <header>
      <h1>Projeto Star Wars</h1>
      <div>
        <form>
          <input
            data-testid="name-filter"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => {
              setFilterByName({ name: value });
            } }
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
