import React from 'react';
import Row from 'react-bootstrap/Row'; 
import {Album} from '../Album/Album';



export class Categorie extends React.Component{




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