import React from 'react';
import logo from '../../img/open-graph-default.png';
import {Formulaire} from '../Form/Form';
import {Titre} from "../Titre/Titre";
import {ScienceDuCoeurAlbum} from "../Album/ScienceDuCoeur/ScienceDuCoeur";
import "./App.css";  
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';



function App() { 

  return ( 

    <div className="App"> 
      <header className="App-header"> 
        <Container>
          <Row>
            <Col lg={6}>
            <img src={logo} width="400" alt="Logo" />
            <Titre /> 
            </Col>
          </Row> 
          <Row>
            <Col lg={6}>
            <Formulaire/>
           </Col>          
          </Row>
        </Container>

      </header> 

      <body>

      <Container>
          <Row>
            <Col lg={6}>
              <ScienceDuCoeurAlbum/>
              <div>           
              </div>
            </Col>          
          </Row>
      </Container>

      </body>

    </div> 

  ); 

} 

export default App;


