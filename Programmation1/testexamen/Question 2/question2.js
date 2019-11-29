

var pointsdevie;

pointsdevie = Number(prompt("Veuilllez entrer le nombre de points de vie de l’adversaire"));

if(pointsdevie <60){
    document.write("L’attaque Mad Bull GX de Tauros fera 100 points de dommages à l’adversaire.");
}

else if(pointsdevie >=60 && pointsdevie <=79){
    document.write ("L’attaque Mad Bull GX de Tauros fera 150 points de dommages à l’adversaire.");
}

else if(pointsdevie >=80 && pointsdevie <=99){
    document.write ("L’attaque Mad Bull GX de Tauros fera 200 points de dommages à l’adversaire.");
}

else if(pointsdevie >=100){
    console.log ("L’attaque Mad Bull GX de Tauros fera 250 points de dommages à l’adversaire.");
}
