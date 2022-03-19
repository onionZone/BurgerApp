import React from "react";
import { IIngredient } from "../burger/burgerSlice";

type Props = {
  item: IIngredient;
  remove: Function;
};

export default function SummaryItems(props: Props) {
  const { id, name, value } = props.item;
  return (
    <div>
      <span>{id} </span>
      <span>{name} </span>
      <span>{value} </span>
      <span>
        <button onClick={() => props.remove}>X</button>
      </span>
    </div>
  );
}
