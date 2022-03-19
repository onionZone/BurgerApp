import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  IIngredient,
  removeIngredient,
  selectBurger,
} from "../burger/burgerSlice";
import SummaryItems from "./SummaryItem";

import "./summary.css";

export default function SummaryList() {
  const burger = useAppSelector(selectBurger);
  const dispatch = useAppDispatch();

  const remove = (ingredient: IIngredient) =>
    dispatch(removeIngredient(ingredient));

  const items = burger.ingredients.map((item) => (
    <SummaryItems item={item} remove={remove} />
  ));

  const value: number = burger.ingredients
    .map((ingredient) => ingredient.value)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="summary">
      <div className="title">Summary:</div>
      <div className="list">{items}</div>
      <hr />
      <div className="value">{value ? value : 0}</div>
    </div>
  );
}
