//Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
// Une semaine de travail normale est de 40 heures.

var tauxhoraire;
var nombreheures;
var salaire = tauxhoraire * nombreheures;
var salaireover = ((nombreheures-40)*salaire*2)

tauxhoraire = Number (prompt ("Veuillez entrer votre taux horaire."));
nombreheures = Number (prompt ("Veuillez entrer le nombre d'heures travaillées."));

if (nombreheures<=40){
    console.log ("Votre salaire est" +salaire, )
}

else {
    console.log ("Votre salaire est" )
}