import React from 'react';
import ScienceDuCoeur from '../../../img/PierreLapointeScienceCoeur.jpg';
import "./ScienceDuCoeur.css";








export class ScienceDuCoeurAlbum extends React.Component {  

    render() {  

       return (
            <div>
                <a href="ChansonsScienceCoeur">
                <img src={ScienceDuCoeur} width="400" alt="Logo" />
                <h1>La science du coeur</h1>
                <p>Pierre Lapointe</p>
                </a>
            </div>
        );
    }  

};  