import React from 'react';
import Pokedex from './Pokedex';
import './App.css'; // This file should already exist in a CRA setup

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  );
}

export default App;