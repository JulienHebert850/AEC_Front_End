import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


  

export class Connexion extends React.Component {  

    render() {  

       return (
       
            <Form>

              <Form.Group controlId="nomutilisateur">
                <Form.Control type="text" placeholder="Nom d'utilisateur ou adresse courriel" />
              </Form.Group>

              <Form.Group controlId="motdepasse">
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>

            <Container>
              <Row>
                <Col>
                    <Form.Group>
                        <Form inline>
                            <p>Garder ma session ouverte</p>
                            <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label=""
                            /> 
                        </Form>
                    </Form.Group>
                </Col>
              </Row>
            </Container>

            <Button variant="success" type="submit" size="lg" block>
                    Se connecter
            </Button>
              
              
            </Form>
       );
    }  

};  