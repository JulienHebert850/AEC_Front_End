//Vous devez compléter un programme qui permet de calculer l’aire de formes.
// En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
// - "O" pour cercle : PI * rayon2
// - "R" pour rectangle : longueur * largeur
// - "T" pour triangle rectangle : (longueur * largeur) / 2
// - "C" pour carré : côté2
//
// L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules.
//
// En fonction de la lettre saisie par le client, votre programme doit demander les renseignements nécessaires pour le calcul de l’aire.
//
//
// Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type sélectionné ainsi que le calcul de l'aire.

//Créé par Julien Hébert
//12 Décembre 2019

var forme;

var rayoncercle;
var longrectangle;
var largerectangle;
var longtriangle;
var largetriangle;
var cotecarre;

var airecercle;
var airerectangle;
var airetriangle;
var airecarre;

forme = (prompt("Veuillez entrer la lettre correspondante à la forme dont vous voulez calculer l'aire: O pour cercle, R pour rectangle, T pour triangle rectangle et C pour carré."));

if (forme === "O" || forme === "o") {
    forme = "cercle";
    rayoncercle = Number(prompt("Veuillez entrer le rayon du cercle en centimètres."));
}

else if (forme === "R" || forme === "r"){
    forme = "rectangle";
    longrectangle = Number(prompt("Veuillez entrer la longueur du rectangle en centimètres."));
    largerectangle = Number(prompt("Veuillez entrer la largeur du rectangle en centimètres."));
}

else if (forme === "T" || forme === "t"){
    forme = "triangle rectangle";
    longtriangle = Number(prompt("Veuillez entrer la longueur du triangle rectangle en centimètres."));
    largetriangle = Number(prompt("Veuillez entrer la largeur du triangle rectangle en centimètres."));
}

else if (forme === "C" || forme === "c"){
    forme = "carré";
    cotecarre = Number(prompt("Veuillez entrer la longueur d'un des côtés du carré en centimètres."));
}

airecercle = (3.14159265359 * (rayoncercle * rayoncercle));
airerectangle = (longrectangle * largerectangle);
airetriangle = ((longtriangle * largetriangle) /2);
airecarre = (cotecarre * cotecarre);

if (forme === "cercle"){
    document.write ("L'aire du " +forme, " est " +airecercle, "cm².");
}

else if (forme === "rectangle"){
    document.write ("L'aire du " +forme, " est " +airerectangle, "cm².");
}

else if (forme === "triangle rectangle"){
    document.write ("L'aire du " +forme, " est " +airetriangle, "cm².");
}

else if (forme === "carré"){
    document.write ("L'aire du " +forme, " est " +airecarre, "cm².");
}
