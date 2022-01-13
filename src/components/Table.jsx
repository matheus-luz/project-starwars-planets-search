/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function Table() {
  const [filterPlanetsName, setFilterPlanetsName] = useState([]);
  const { filterByName, data } = useContext(StartWarsContext);

  useEffect(() => {
    const filter = data.filter((planet) => planet.name
      .includes(filterByName.name));
    setFilterPlanetsName(filter);
  }, [data]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          { filterPlanetsName.map((filter) => (
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
