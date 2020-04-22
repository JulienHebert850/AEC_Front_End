import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render( 

  <h1>Hello React World!!!</h1>,

  <div>

  <h1>Julien Hébert</h1>, 
  <img 
  src='./AC2   2020-04-19 21_55_33 (1).jpg' 
  alt="acc"
  />,

  </div>,

  document.getElementById('root') 
  
  ); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
