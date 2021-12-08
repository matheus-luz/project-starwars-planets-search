import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function Table() {
  const {
    data, filterByName,
    filterByNumericValues, submitFiltrar } = useContext(StartWarsContext);

  const { column, comparion, value } = filterByNumericValues;

  const filterPlanets = data
    .filter((planetsFilter) => planetsFilter.name.includes(filterByName.name));

  const filterNumbered = data.filter((numberPlanets) => (
    console.log(numberPlanets)
    // .includes(column)
    // && numberPlanets.comparion.includes(comparion) && numberPlanets.value.includes(value)
  ));

  function tablePlanets() {
    if (filterByName.name === '') {
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
    const mapPlanets = filterPlanets.map((filter) => (
      <tr key={ filter.name }>
        <td>{filter.name}</td>
        <td>{filter.rotation_period}</td>
        <td>{filter.orbital_period}</td>
        <td>{filter.diameter}</td>
        <td>{filter.climate}</td>
        <td>{filter.gravity}</td>
        <td>{filter.terrain}</td>
        <td>{filter.surface_water}</td>
        <td>{filter.population}</td>
      </tr>
    ));
    return mapPlanets;
  }

  function filterButton() {
    const planetsFilterSubmit = data.map((planet, index) => (
      <div key={ index }>
        <h1>{planet.name}</h1>
        <h1>{filterByNumericValues.column}</h1>
      </div>
    ));
    return planetsFilterSubmit;
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
          { submitFiltrar ? filterButton() : tablePlanets() }
          { console.log(filterNumbered) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
