import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function Table() {
  const { data } = useContext(StartWarsContext);

  function tablePlanets() {
    const planetsData = data.map((planet) => (
      <tr key={ planet.name }>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
      </tr>
    ));
    return planetsData;
  }

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
          { tablePlanets() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
