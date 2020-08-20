import React from 'react'; 
import logo from '../../img/LogoSpotifyQc.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';

export class Connexion extends React.Component {  
    constructor(props){
        super(props);
        this.handleConnexion = this.handleConnexion.bind(this);
    }
    handleConnexion(){
        let connecter = false;

            let user = document.getElementById("user").value;
            let pass = document.getElementById("pass").value;

            if (user.toLowerCase() === "shany.carle@gmail.com" && pass === "patate"){ 
                connecter = true;
            }

        this.props.onClick(connecter);    
    }

    render() {
       return (
        <Container>
            <Jumbotron>
                <Row className="text-center">
                    <Col>
                        <h1>Connexion Spotify Québec</h1>
                        <img src={logo} alt="Logo SpotifyQc" width="400px" className="text-center"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>

                        <Form.Group controlId="user">
                            <Form.Label>Nom d'utilisateur</Form.Label>
                            <Form.Control type="text" placeholder="Nom d'utilisateur ou adresse courriel" />
                        </Form.Group>
                        <Form.Group controlId="pass">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" />
                        </Form.Group>

                        <Form.Group>
                            <Form inline>  
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                    label="Garder ma session ouverte"
                                />               
                            </Form>
                        </Form.Group>

                            <Button variant="success" size="lg" onClick={this.handleConnexion}>
                                    Se connecter
                            </Button>

                        </Form>
                    </Col>  
                </Row>
            </Jumbotron>
        </Container>
       );
    }  
}  