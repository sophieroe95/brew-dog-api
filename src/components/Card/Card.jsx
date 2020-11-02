import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {
    image_url,
    name,
    tagline,
    abv,
    ph,
    description,
  } = props.beer;

  return (
    <>
    <div className={styles.card}>
      <img src={image_url} alt={name} />
      <section className={styles.beerDetails}>
        <h2>{name}</h2>
        <p>
          <span>{tagline}</span>
        </p>
        <p>{abv}</p>
        <p>{ph}</p>
        <p>{description}</p>
      </section>
    </div>
    </>
  );
};

export default Card;
