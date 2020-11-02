import React, {useState} from "react";
import styles from "./Filter.module.scss";

const Filter = (props) => {
  const {setBeerList, updateABV, unchecked} = props;
  const {checkedState, setCheckedState} = useState(false);



  return (
    <div className={styles.filter}>
      <p>Filter by:</p>
      <div>
      <label for="abv">High ABV (>6.0%)</label><br></br>
      <input id ="abv"type="checkbox" onClick={updateABV}/>
      </div>
      <div>
      <label for="abv">Classic Range</label><br></br>
      <input id ="abv"type="checkbox"/>
      </div>
      <div>
      <label for="abv">Acidic (ph under 4)</label><br></br>
      <input id ="abv" type="checkbox"/>
      </div>
    </div>


  );

};



export default Filter;
