import React from "react";
import { IIngredient } from "../burger/burgerSlice";

type Props = {
  ingredient: IIngredient;
  add: Function;
};

export default function Ingredient(props: Props) {
  const ingredient = props.ingredient;

  return (
    <div onClick={() => props.add(ingredient)}>
      <span>{ingredient.name}</span>
      <span>{ingredient.value}</span>
    </div>
  );
}
