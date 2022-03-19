import React, { useState } from "react";
import Ingredient from "./Ingredient";
import {
  addIngredient,
  IIngredient,
  selectBurger,
} from "../burger/burgerSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

export default function Ingredients() {
  const burger = useAppSelector(selectBurger);
  const dispatch = useAppDispatch();

  const [ingredients, setIngrdients] = useState<IIngredient[]>([
    { id: NaN, name: "tomato", value: 2 },
    { id: NaN, name: "slad", value: 1 },
    { id: NaN, name: "cheese", value: 3 },
    { id: NaN, name: "cucamber", value: 0.5 },
    { id: NaN, name: "beacon", value: 2 },
  ]);

  const id: number = burger.ingredients.length + 1;

  const add = (ingredient: IIngredient) => {
    ingredient.id = id;
    dispatch(addIngredient(ingredient));
  };

  const list = ingredients.map((ingredient) => (
    <Ingredient key={ingredient.id} ingredient={ingredient} add={add} />
  ));

  return (
    <div className="ingredients">
      <div className="title">Ingredients:</div>
      <div className="list">{list}</div>
    </div>
  );
}
