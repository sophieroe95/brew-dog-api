import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import Filter from "../Filter"

const NavBar = (props) => {
  
  return (
    < div className={styles.navbar} >
      <h1>Brew Dog API</h1>
      <SearchBar placeholder="Search for beers..." updateSearchText={props.updateSearchText} updateABV={props.updateABV} />
      <Filter />
    </div>
  );
};

export default NavBar;
