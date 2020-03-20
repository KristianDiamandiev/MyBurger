import React from "react";

import classes from "./Burger.module.css";
import BurgerIngridient from "./BurgerIngridients/BurgerIngridient";

const burger = props => {
  console.log(props);
  // const transformedIngredients = Object.keys(props.ingredients)
  //     .map(igKey => {
  //         return [...Array(props.ingredients[igKey])].map((_, i) => {
  //             return <BurgerIngridient key={igKey + i} type={igKey} />
  //         }); // [,]
  //     });

  let ingredients = [];
  Object.keys(props.ingredients).map(ingredient => {
    for (let i = 0; i < props.ingredients[ingredient]; i++) {
      ingredients.push(ingredient);
    }
    return null;
  });

  let burgerIngredients;
  if (ingredients.length === 0) {
    burgerIngredients = <p>Please start adding ingredients</p>;
  } else {
    burgerIngredients = ingredients.map((ingredient, index) => {
      return <BurgerIngridient type={ingredient} key={index} />;
    });
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {burgerIngredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
