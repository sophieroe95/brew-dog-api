import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { library } from "./data/fa-library";

const App = () => {
  const [beerList, setBeerList] = useState([])

  useEffect(() => {
    setBeers();
  }, [])


  const setBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then(response => response.json())
      .then(response => {
        const beerList = response;
        setBeerList(beerList);
      });
  };

  const getApiData = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then(response => response.json())
      .then(response => {
        const apiBeers = response;
        setBeerList(apiBeers);
        console.log('h:', apiBeers)
      });
  };

  const getHighABV = () => {
    fetch(`https://api.punkapi.com/v2/beers?abv_gt=6`)
      .then(response => response.json())
      .then(response => {
        const apiBeers = response;
        setBeerList(apiBeers);

      });
  };

  const getClassic = () => {
    fetch(`https://api.punkapi.com/v2/beers?brewed_before=01-2010`)
      .then(response => response.json())
      .then(response => {
        const apiBeers = response;
        setBeerList(apiBeers);

      });
  };

 
  const getLowpH = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then(response => response.json())
      .then(response => {
        const lowpHBeers = response.filter(beer => beer.ph <=4 && beer.ph!==null);
        setBeerList(lowpHBeers);
      });
  };

  return (
    <div className={styles.App}>
      <NavBar className={styles.navbar} updateSearchText={getApiData} updateABV={getHighABV} updateClassic={getClassic} updatepH={getLowpH} />
      <Dashboard className={styles.dashboard} beerList={beerList} />
    </div>
  );
}

export default App;