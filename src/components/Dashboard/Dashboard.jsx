import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../CardList";
import FeedbackPanel from "../FeedbackPanel";

const Dashboard = (props) => {
  const beerList = props.beerList;

  // const checkBeerName = (beer) => {
  //   const beer = beer.name.toLowerCase();
  //   return beer.includes(props.searchText.toLowerCase());
  // };
  // const matchingbeers = recipes.filter(checkRecipeName);

  // 2. If we have some recipes, show the cardlist, ELSE show a feedback panel to tell us no recipes exist
  const contentJsx = beerList.length ? (
    <CardList beerList={beerList}  />
  ) : (
    <FeedbackPanel
      header="No matches"
      text="None of our beers matched that search"
    />
  );
  
  return <section className={styles.dashboard}>{contentJsx}</section>
};
export default Dashboard;
