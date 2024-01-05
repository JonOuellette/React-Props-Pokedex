import React from "react";
import './Pokecard.css'


function Pokecard({ id, name, type, base_experience }) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div className="pokecard">
        <h3 className="pokecard-title">{name}</h3>
        <img className="pokecard-image" src={imgSrc} alt={name} />
        <p className="pokecard-data">Type: {type}</p>
        <p className="pokecard-data">EXP: {base_experience}</p>
      </div>
    );
  }
  

export default Pokecard