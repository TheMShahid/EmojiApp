import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.car.id}?set=set3&size=180x180`}
      alt="kittens"
    />
    <h2>{props.car.name}</h2>
    <p>{props.car.email}</p>
  </div>
);
