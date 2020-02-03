//Lire les noms et notes d’examen d’une classe de 5 élèves.
// Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.


var notemoyenne;
var tabnotes = [];
var tabnoms = [];

for(var i=0;i<5;i++){
    tabnoms[i] = prompt("Veuillez entrer votre nom.");
    tabnotes[i] = Number(prompt("Veuillez entrer votre note"));
}

notemoyenne = ((tabnotes[0]+tabnotes[1]+tabnotes[2]+tabnotes[3]+tabnotes[4])/5);

for(var i=0;i<5;i++){
if (tabnotes[i]>notemoyenne){
    document.write(tabnoms [i] +tabnotes [i]);
}

}