import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../CardList";
import FeedbackPanel from "../FeedbackPanel";

const Dashboard = (props) => {
  const beerList = props.beerList;

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
