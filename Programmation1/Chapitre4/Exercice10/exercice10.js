//Le collège offre 6 options aux étudiants. Ces options sont :
// INFORMATIQUE
// ADMINISTRATION
// HISTOIRE
// GÉNIE
// GEOGRAPHIE
// BUREAUTIQUE
//
// Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option.
// Vous lui répondez si OUI ou NON le collège offre cette option.

var options = ["INFORMATIQUE","ADMINISTRATION","HISTOIRE","GÉNIE","GEOGRAPHIE","BUREAUTIQUE"];
var choix = prompt("Entrez le nom du cours que vous aimeriez suivre au collège.").toUpperCase();
var trouver = false;

for(var i =0;i<6;i++){
    if (choix === options[i]){
        trouver = true;
    }
}

if(trouver){
    document.write("Le cours est offert");
}
else{
    document.write("Le cours n'est pas offert");
}
