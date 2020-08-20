import React from 'react';
import logo from '../../img/LogoSpotifyQc.png';
import { Connexion } from '../Connexion/Connexion';
import './App.css';
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 


function App() {
  return (

    <Container fluid>
    <Row>
     <Col>
        <img src={logo} alt="SpotifyQc" width="100px"/>
     </Col>
    </Row>
    <Connexion />
  </Container>

);
}


export default App;
