import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import {Accueil} from '../src/components/Accueil/Accueil'; 

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Accueil /> 
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
