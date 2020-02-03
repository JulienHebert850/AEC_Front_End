//Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
// Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10.

var bonnesReponses =[true,false,false,false,true,true,false,false,true,true];
var examenEtudiant = [];
var nbBonnesReponses = 0;

for(var i=0;i<bonnesReponses.length;i++){

    examenEtudiant[i] = Boolean(Math.floor(Math.random()*2));
}

for(var j=0;j<bonnesReponses.length;j++){
    if(bonnesReponses[j] === examenEtudiant[j]){
        nbBonnesReponses++;
    }
}

document.write("L'étudiant a eu " + nbBonnesReponses + " bonnes réponses");
