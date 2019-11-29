var angle;
var position;

angle = Number(prompt("Veuillez entrer l'angle de la main du robot pour afficher sa position."));

if (angle >=0 && angle <=39){
    document.write ("La main du robot est fermée.")
}

else if (angle >=40 && angle <=89){
    document.write ("La main du robot agrippe.")
}

else if (angle >=90 && angle <=180){
    document.write ("La main du robot est ouverte.")
}

else document.write ("Le robot est hors de contrôle.");

