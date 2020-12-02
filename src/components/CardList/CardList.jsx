import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
 
const CardList = (props) => {
  const { beerList } = props;
  
  const getCardJsx = (beer) => (
    <div data-cy="card" className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  );


  return <section data-cy="cardList" className={styles.cardList}>{beerList.map(getCardJsx)}</section>;
};

export default CardList;
