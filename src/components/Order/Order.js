import React from "react";

import classes from "./Order.module.css";

const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    // { bacon:2, meat:1 } => [ {name: bacon, amount:2}, {name: meat, amount: 1} ]
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}$</strong>
      </p>
    </div>
  );
};

export default order;
