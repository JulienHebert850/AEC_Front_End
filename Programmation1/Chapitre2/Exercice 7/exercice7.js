//Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var  nombre;

nombre = Number(prompt("Veuillez entrer un nombre"));

if(nombre >=1 && nombre <=9999) {
    document.write ("Positif")
}

else if (nombre <=-1 && nombre >=-9999){
    document.write ('Négatif')
}

else {document.write ("0")}

