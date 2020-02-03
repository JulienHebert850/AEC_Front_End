//Lire 12 nombres quelconques et les mettre dans un tableau.
// Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15.
// Si tel est le cas, afficher ces 2 nombres.

var tabnombres = [];
var trouver = false;

for(var i=0; i<12; i++){
    tabnombres[i] = Math.floor(Math.random() * 10);
    console.log(tabnombres[i]);
}

for (var j=0; j<tabnombres.length-1; j++){
    if ((tabnombres[11] + tabnombres[j]) === 15){
         trouver=true;{
            document.write ("L'addition du nombre " +tabnombres[11] +" et du nombre "+ tabnombres[j] + " font une somme de 15.");
        }

    }
}

if(!trouver){
    document.write("L'addition du nombre " +tabnombres[11] +" aux autres nombres ne donne pas 15.");
}