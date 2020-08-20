import React from 'react';
import kerr from './img/stevekerr.jpg';
import mj from './img/michaeljordan.jpeg';
import bill from './img/billwennington.jpg';
import pippen from './img/scottiepippen.png';
import rodman from './img/dennisrodman.jpg';
import logo from './img/netflix.png';
import './App.css';
var joueurs = ["Steve Kerr", "Michael Jordan", "Bill Wennington", "Scottie Pippen", "Dennis Rodman"];
var nomJoueurAffiche = joueurs[i];

    var min=0; 
    var max=4;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min; 
    
   

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>THE LAST DANCE</h1>
        <p>Une production de</p>
        <img src={logo} className="logo" alt="logo"/>
        <p>Mettant en vedette</p>
        <h2>{nomJoueurAffiche}</h2>
        <img src={mj} className="mj" alt="mj"/>
      </header>
    </div>
  );
}

export default App;