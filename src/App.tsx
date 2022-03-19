import React from "react";
import "./App.css";
import "./features/burger/Burger";
import Burger from "./features/burger/Burger";

function App() {
  return (
    <>
      <header>Burger App</header>
      <main>
        <Burger />
      </main>
    </>
  );
}

export default App;
