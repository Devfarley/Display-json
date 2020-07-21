import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Characters from './characters'


class Title extends React.Component {
  render() {
    return <div>
      <h1>Hello! This site displays Rick and Morty Characters. </h1>
      <Characters />
      {/* <h2>{character.map((character) => {
        const name = character.name
        const species = character.species
        const text=`Name: ${name} | Species: ${species} \n`
        return text.split('\n').map((item) => <p>{item}</p>);
      })} </h2> */}
    </div> 
  }
}



ReactDOM.render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>,
  document.getElementById('root')
);

                                                                             