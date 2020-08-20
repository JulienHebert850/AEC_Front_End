import React from 'react';
import Row from 'react-bootstrap/Row'; 
import {Album} from '../Album/Album';

const tabPop = [
  {
    src: require("../../img/PierreLapointeEnnui.jpg"),
    alt: "Pierre Lapointe",
    title: "Pierre Lapointe",
    artiste: "Pierre Lapointe",
    titrealbum: "Pour déjouer l'ennui",
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
];

  const tabBlues = [
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

export class Categorie extends React.Component{

  render() {
      return (
        <>
        <Row>
          <h3>{this.props.nom}</h3>
        </Row>
        <Row>
          {this.AfficherAlbums()}
        </Row>
      </>
      );
  }


    AfficherAlbums() {
        if (this.props.nom === "Pop") {
          return tabPop.map((element, i) => (
            <Album
              key={"Pop" + i}
              src={element.src}
              alt={element.alt}
              title={element.title}
              artiste={element.artiste}
              titrealbum={element.titrealbum}
            ></Album>
          ));
        }
        else if (this.props.nom === "Blues") {
          return tabBlues.map((element, i) => (
            <Album
              key={"Blues" + i}
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
  Categorie.defaultProps = { nom: "Blues" };