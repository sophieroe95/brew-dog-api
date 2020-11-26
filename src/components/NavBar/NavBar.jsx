import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import Filter from "../Filter"

const NavBar = (props) => {
  
  return (
    < div className={styles.navbar} >
      <h1>Brew Dog API</h1>
      <SearchBar placeholder="Beer name..." updateSearchText={props.updateSearchText}  />
      <Filter updateABV={props.updateABV} updateClassic={props.updateClassic} updatepH={props.updatepH} />
    </div>
  );
};

export default NavBar;
