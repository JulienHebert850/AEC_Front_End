import React from 'react';
import {Categorie} from '../Categorie/Categorie';



export class Catalogue extends React.Component {


  render() {
    return (
      <>
      <h1>Albums</h1>
      <Categorie nom="Pop"/>
      <Categorie nom="Blues"/>
      </>
    );
  }
}


