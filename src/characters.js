import React from 'react';
import ReactDOM from 'react-dom';
import character from './characters.json'




const Characters = () => character.map((character) => {
    const name = character.name
    const species = character.species
    const text=`Name: ${name} | Species: ${species} \n`
    const characterList = text.split('\n').map((item) => <h2>{item}</h2>)
    
    return characterList
});


  export default Characters;