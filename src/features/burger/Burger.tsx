import React from "react";
import Ingredients from "../ingredients/Ingredients";
import Summary from "../summary/SummaryList";
import Overview from "../overview/Overview";

export default function Burger() {
  return (
    <>
      <Ingredients />
      <Overview />
      <Summary />
    </>
  );
}
