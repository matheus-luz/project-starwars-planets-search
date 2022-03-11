/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function Table() {
  const { filterByName, data } = useContext(StartWarsContext);
  const table = [
    'Name', 'Rotation Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

  const filterOrder = data.filter((planet) => planet.name
    .includes(filterByName.name));

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {table.map((th) => (
              <th key={ th }>{th}</th>
            ))}
          </tr>
          { filterOrder.map((filter) => (
            <tr key={ filter.name }>
              <td data-testid="planet-name">{filter.name}</td>
              <td>{filter.rotation_period}</td>
              <td>{filter.orbital_period}</td>
              <td>{filter.diameter}</td>
              <td>{filter.climate}</td>
              <td>{filter.gravity}</td>
              <td>{filter.terrain}</td>
              <td>{filter.surface_water}</td>
              <td>{filter.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
