import React from 'react';
import {Album} from '../Album/Album';
import {Chansons} from '../Chansons/Chansons';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const tabAlbums = [
  {
    src: require("../../img/PierreLapointeEnnui.jpg"),
    alt: "Pierre Lapointe",
    title: "Pierre Lapointe",
    artiste: "Pierre Lapointe",
    titrealbum: "Pour déjouer l'ennui",
    chanson1: "Tatouage",
    chanson2: "La plus belle des maisons",
    chanson3: "Pour déjouer l'ennui",
    chanson4: "Un coeur qui saigne",
    chanson5: "Le monarque des indes",
    chanson6: "Amour bohème",
    chanson7: "Amour ou songe",
    chanson8: "Dis-moi je ne sais pas",
    chanson9: "Je connais le chemin",
    chanson10: "Vivre ma peine",
    chanson11: "Qu'est ce qu'on y peut",
    chanson12: "Vendredi 13",
  },
  {
    src: require("../../img/PierreLapointePunkt.jpg"),
    alt: "Pierre Lapointe",
    title: "Pierre Lapointe",
    artiste: "Pierre Lapointe",
    titrealbum: "Punkt",
  },
  {
    src: require("../../img/PierreLapointeScienceCoeur.jpg"),
    alt: "Pierre Lapointe",
    title: "Pierre Lapointe",
    artiste: "Pierre Lapointe",
    titrealbum: "La science du coeur",
  },
  {
    src: require("../../img/PierreLapointeForetDesMalAimes.jpg"),
    alt: "Pierre Lapointe",
    title: "Pierre Lapointe",
    artiste: "Pierre Lapointe",
    titrealbum: "La foret des mal aimés",
  },
  {
    src: require("../../img/SRVBluesYouCanUse.jpg"),
    alt: "SRV",
    title: "SRV",
    artiste: "Stevie Ray Vaughan",
    titrealbum: "Blues you can use",
  },
  {
    src: require("../../img/SRVStandTheWeather.jpg"),
    alt: "SRV",
    title: "SRV",
    artiste: "Stevie Ray Vaughan",
    titrealbum: "Couldn't stand the weather",
  },
  {
    src: require("../../img/SRVTexasFlood.jpg"),
    alt: "SRV",
    title: "SRV",
    artiste: "Stevie Ray Vaughan",
    titrealbum: "Texas Flood",
  },
  {
    src: require("../../img/SRVCompleteEpicRecordings.jpg"),
    alt: "SRV",
    title: "SRV",
    artiste: "Stevie Ray Vaughan",
    titrealbum: "The complete epic recordings collection",
  },
];

export class Catalogue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rechercher:""};
    this.Rechercher = this.Rechercher.bind(this);
    this.Effacer = this.Effacer.bind(this);
  }
  Rechercher(){
    let nom = document.getElementById("inputRechercher").value;
    this.setState({rechercher:nom});
  }
  Effacer(){
    document.getElementById("inputRechercher").value = "";
    this.setState({rechercher:""});
  }
  

  render() {
    return (
  
      <Container fluid>
          <Row>
            <Form>
              <InputGroup className="mb-3">
                <FormControl
                  id="inputRechercher"
                  placeholder="Rechercher"
                  aria-label="Rechercher"
                  aria-describedby="Rechercher"
                  onChange={this.Rechercher}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={this.Rechercher}>Rechercher</Button>
                </InputGroup.Append>
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={this.Effacer}>Annuler</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Row>
          <Row>
          <h1>Albums</h1>
          <h5>{this.props.chanson1}</h5>
          <Chansons/>
          </Row>
          <Row>
          {this.AfficherAlbums()}
          </Row>
        </Container>
      );
  }        



AfficherAlbums() {

  if(this.state.rechercher === ""){
    return tabAlbums.map((element, i) => (
      <Album
        key={"album" +i}
        src={element.src}
        alt={element.alt}
        title={element.title}
        artiste={element.artiste}
        titrealbum={element.titrealbum}
      ></Album>
    ));
  } else {
    const searchResult = this.state.tabAlbums.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
    return searchResult.map((element, i) => (
      <Album
        key={"album" +i}
        src={element.src}
        alt={element.alt}
        title={element.title}
        artiste={element.artiste}
        titrealbum={element.titrealbum}
      ></Album>
      ));
    }
  }
}

console.log(tabAlbums);