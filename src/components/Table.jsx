/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function Table() {
  const { filterByName, planets } = useContext(StartWarsContext);
  // const isMounted = useRef(false);

  // useEffect(() => {
  //   if (isMounted.current) {
  //   //  did update only;
  //     console.log('update');
  //     const namePlanets = planets.filter((planet) => planet.name
  //       .includes(filterByName.name));
  //     setPlanets(namePlanets);
  //   } else {
  //     isMounted.current = true;
  //     // did Mount;
  //     console.log('mount');
  //   }
  // }, []);

  const filterPlanetsName = planets.filter((planet) => planet.name
    .includes(filterByName.name));

  // function filterPlanetsAll() {
  //   const namePlanets = planets.filter((planet) => planet.name
  //     .includes(filterByName.name));
  //   setPlanets(namePlanets);
  //   console.log('oi');
  // }

  // useEffect(() => {
  //   const namePlanets = planets.filter((planet) => planet.name
  //     .includes(filterByName.name));
  //   setPlanets(namePlanets);
  // }, [filterByName.name, setPlanets, planets]);

  // useCallback(
  //   () => {
  //     const namePlanets = planets.filter((planet) => planet.name.includes(filterByName.name));
  //     setPlanets(namePlanets);
  //     console.log('ola');
  //   },
  //   [planets, setPlanets, filterByName.name],
  // );

  // useEffect(() => {
  //   const namePlanets = planets.filter((planet) => planet.name.includes(filterByName.name));
  //   setPlanets(namePlanets);
  //   console.log(namePlanets);
  //   console.log('hello');
  // }, [planets, filterByName.name, setPlanets]);

  // const fetchRecipe = useCallback(
  //   async () => {
  //     const { drinks } = await fetchDrinksRecipeByID(id);
  //     const { meals } = await fetchRecomendation(FOOD_NAME_URL);
  //     setFoodsList(meals);
  //     setRecipe(drinks[0]);
  //     console.log(drinks[0]);
  //     setIsLoading(false);
  //   }, [id],
  // );

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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
