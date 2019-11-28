//Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

var nombre;

nombre = (prompt ("Veuillez entrer un nombre entier"));

if (nombre === "1"){
    console.log ("Janvier");
}

else if (nombre === "2"){
        console.log ("Février");
}

else if (nombre === "3"){
        console.log ("Mars");
}

else if (nombre === "4"){
        console.log ("Avril");
}

else if (nombre === "5"){
        console.log ("Mai");
}

else if (nombre === "6"){
        console.log ("Juin");
}

else if (nombre === "7"){
        console.log ("Juillet");
}

else if (nombre === "8"){
        console.log ("Août");
}

else if (nombre === "9"){
        console.log ("Septembre");
}

else if (nombre === "10"){
        console.log ("Octobre");
}

else if (nombre ==="11"){
        console.log ("Novembre");
}

else if (nombre === "12"){
        console.log ("Décembre");
}


else console.log ("Mois invalide");
