import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { library } from "./data/fa-library";

const App = () => {
  const [beerList, setBeerList] = useState([])

  const getApiData = (searchTerm) => {
    // 4. Do a fetch 
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then(response => response.json())
      .then(response => {
        const apiBeers = response;
        setBeerList(apiBeers);
        console.log('h:', apiBeers)
      });
  };

  const getHighABV = () => {
    // 4. Do a fetch 
    fetch(`https://api.punkapi.com/v2/beers?abv_gt=6`)
      .then(response => response.json())
      .then(response => {
        const apiBeers = response;
        setBeerList(apiBeers);

      });
  };

  // abv_gt=6
  // brewed_before=01-2010

  // useEffect(() => {
  //   setBeerList();
  //   return () => {
  //     console.log("Use effect was called")
  //   }
  // }, []);

  return (
    <div className={styles.App}>
      <NavBar className={styles.navbar} updateSearchText={getApiData} updateABV={getHighABV} />
      <Dashboard className={styles.dashboard} beerList={beerList} />
      {/* <p>{beerList.map(beerList=> <div className={styles.beer}>{beerList.name}</div>)}</p> */}
    </div>
  );
}

export default App;
