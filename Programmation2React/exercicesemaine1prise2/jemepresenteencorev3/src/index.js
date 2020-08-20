import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import img from './img/Julien_Hebert.jpg';

const presentation =(

  <div>
  <h1 className="rouge">Julien Hébert</h1>
  <p>Bonjour, je suis étudiant en développement web au Cégep de Trois-Rivières à distance. Je suis un passionné de course automobile et j'adore le chocolat.</p>
  <img src={img} alt="julien" width="500px"/>
  <br/>
  <a href={'https://github.com/JulienHebert850/AEC_Front_End'} target="blank">GitHub Julien</a>
    <ul>Coure automobile</ul>
    <ul>Musique</ul>
    <ul>Chocolat</ul>
  </div>

);

ReactDOM.render(
  presentation,
  document.getElementById('root')  
  ); 
  


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
