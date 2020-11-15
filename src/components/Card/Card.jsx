import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {
    image_url,
    name,
    tagline,
    abv,
    ph,
    first_brewed,
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
        <p>ABV: {abv}</p>
        <p>pH: {ph}</p>
        <p>First Brewed: {first_brewed}</p>
        <p>{description}</p>
      </section>
    </div>
    </>
  );
};

export default Card;
