//Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid».
// Sinon, écrire « Enfin une belle journée! ».

var temperature;


temperature = Number(prompt("Veuillez entrer la température"));


if(temperature >= -40 && temperature <= -10){
    console.log ("HAAAAAAAAA! Il fait froid");
}

else{
    console.log ("Enfin une belle journée!");
}
