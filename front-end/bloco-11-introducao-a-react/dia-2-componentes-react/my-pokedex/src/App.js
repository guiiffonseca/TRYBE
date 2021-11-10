import Pokemons from "./data";
import "./App.css";
import Pokedex from "./pokemon-card";
import React from "react";


class App extends React.Component {
  render() {
    return (
      <div>
      <h1>POKEDEX</h1>
      <div className="pokedex">
        <Pokedex pokemons={Pokemons} />
      </div>
      </div>
    );
  }
}

export default App;
