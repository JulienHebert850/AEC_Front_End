//.Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'.
// Si c'est autre chose, écrire un message d'erreur.

var commande;

commande = (prompt("Veuillez entrer une commande."));

if (commande === "w"){
    console.log ("Avancer");
}

else if (commande === "a"){
    console.log ("Gauche");
}

else if (commande === "s"){
    console.log ("Reculer");
}

else if (commande === "d"){
    console.log ("Droite");
}

else (console.log ("Erreur"));

